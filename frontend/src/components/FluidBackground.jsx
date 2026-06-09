import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo, useEffect } from "react";

// ==========================================
// 1. EXACT ORIGINAL SHADERS FROM all.js
// ==========================================

const vertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fluidFragmentShader = `
uniform sampler2D uFluidPrev;
uniform vec2 uMouse;
uniform vec2 uMousePrev;
uniform float uInfluenceRadius;
uniform float uDecay;
varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    float b = 0.009;
    vec2 vel = vec2(0.0);
    
    vel += texture2D(uFluidPrev, uv + vec2(-b, -b)).rg;
    vel += texture2D(uFluidPrev, uv + vec2( 0, -b)).rg;
    vel += texture2D(uFluidPrev, uv + vec2( b, -b)).rg;
    vel += texture2D(uFluidPrev, uv + vec2(-b,  0)).rg;
    vel += texture2D(uFluidPrev, uv              ).rg * 2.0;
    vel += texture2D(uFluidPrev, uv + vec2( b,  0)).rg;
    vel += texture2D(uFluidPrev, uv + vec2(-b,  b)).rg;
    vel += texture2D(uFluidPrev, uv + vec2( 0,  b)).rg;
    vel += texture2D(uFluidPrev, uv + vec2( b,  b)).rg;
    vel /= 10.0;

    vec2 advectedUv = clamp(uv - vel * 0.03, 0.0, 1.0);
    vel = mix(vel, texture2D(uFluidPrev, advectedUv).rg, 0.7);

    vel *= uDecay;

    vec2 mouseUv = uMouse * 0.5 + 0.5;
    vec2 mouseDelta = (uMouse - uMousePrev) * 6.0;
    float dist = distance(uv, mouseUv);
    float influence = smoothstep(uInfluenceRadius, 0.0, dist);
    vel += mouseDelta * influence;

    gl_FragColor = vec4(vel, 0.0, 1.0);
}
`;

const renderFragmentShader = `
uniform sampler2D uTexture;
uniform sampler2D uFluid;
uniform float uTime;
uniform vec2 uResolution;
uniform float uScreenToImage;
uniform float uFluidMode;
varying vec2 vUv;

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float valueNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
        mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
        f.y
    );
}

float fbm(vec2 p) {
    float v = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 3; i++) {
        v += valueNoise(p) * amp;
        p *= 2.1;
        amp *= 0.5;
    }
    return v;
}

void main() {
    vec2 fluidVel = texture2D(uFluid, vUv).rg;
    float fluidStrength = length(fluidVel);
    vec2 distortedUvS = vUv + fluidVel * 0.04;
    vec2 uvS = distortedUvS - 0.5;
    
    if (uScreenToImage > 1.0) {
        uvS.y /= uScreenToImage;
    } else {
        uvS.x *= uScreenToImage;
    }
    uvS += 0.5;
    vec4 texS = texture2D(uTexture, uvS);

    float n = fbm(vUv * 5.0);
    float threshS  = n * 0.25;
    float maskS    = smoothstep(threshS, threshS + 0.08, fluidStrength);
    vec3  sumiColor = mix(vec3(0.0), texS.rgb, maskS);

    float pixelSize = 10.0;

    vec2 cellCoord = floor(vUv * uResolution / pixelSize);
    vec2 cellUv    = (cellCoord * pixelSize + pixelSize * 0.5) / uResolution;
    cellUv = clamp(cellUv, 0.0, 1.0);
    vec2 fluidVelC     = texture2D(uFluid, cellUv).rg;
    float fluidStrC    = length(fluidVelC);

    float cellRand  = hash(cellCoord);
    float threshD   = cellRand * 0.10;
    float maskD     = step(threshD, fluidStrC);

    float overThresh    = clamp((fluidStrC - threshD) * 30.0, 0.0, 1.0);
    float popMultiplier = 1.0 + exp(-overThresh * 4.0) * 0.6;

    vec2 distortedUvD = vUv + fluidVelC * 0.015;
    vec2 uvD = distortedUvD - 0.5;
    if (uScreenToImage > 1.0) {
        uvD.y /= uScreenToImage;
    } else {
        uvD.x *= uScreenToImage;
    }
    uvD += 0.5;
    vec4 texD = texture2D(uTexture, uvD);

    vec2 cellFract  = fract(vUv * uResolution / pixelSize);
    float gapX      = smoothstep(0.0, 0.07, cellFract.x) * smoothstep(1.0, 0.93, cellFract.x);
    float gapY      = smoothstep(0.0, 0.07, cellFract.y) * smoothstep(1.0, 0.93, cellFract.y);
    float pixelShape = gapX * gapY;
    float centerGlow = 1.0 - length(cellFract - 0.5) * 0.5;

    vec3 pixelColor  = texD.rgb * popMultiplier * centerGlow * pixelShape;
    vec3 digitalTint = vec3(0.5, 0.85, 1.0) * (1.0 - overThresh) * 0.2;
    pixelColor += digitalTint * maskD;
    vec3 digitalColor = mix(vec3(0.0), pixelColor, maskD);

    vec3 finalColor = mix(sumiColor, digitalColor, uFluidMode);

    gl_FragColor = vec4(finalColor, 1.0);
}
`;

// ==========================================
// 2. PURE JS CLASS (Bypasses React Compiler Strictness)
// ==========================================

class FluidEngine {
  constructor(width, height) {
    const resScale = 0.5; // As defined in the original code
    const w = Math.max(1, Math.floor(width * resScale));
    const h = Math.max(1, Math.floor(height * resScale));

    const options = {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
      depthBuffer: false,
      stencilBuffer: false,
    };

    this.fboA = new THREE.WebGLRenderTarget(w, h, options);
    this.fboB = new THREE.WebGLRenderTarget(w, h, options);

    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0.1, 10);
    this.camera.position.z = 1;

    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: fluidFragmentShader,
      uniforms: {
        uFluidPrev: { value: null },
        uMouse: { value: new THREE.Vector2() },
        uMousePrev: { value: new THREE.Vector2() },
        uInfluenceRadius: { value: 0.25 },
        uDecay: { value: 0.992 },
      },
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), this.material);
    this.scene.add(mesh);
  }

  update(gl, pointer, mousePrev) {
    const dist = mousePrev.distanceTo(pointer);

    this.material.uniforms.uMouse.value.copy(pointer);
    this.material.uniforms.uMousePrev.value.copy(mousePrev);
    this.material.uniforms.uInfluenceRadius.value = dist > 0.001 ? 0.25 : 0.0;

    // Ping-Pong Render
    this.material.uniforms.uFluidPrev.value = this.fboA.texture;
    gl.setRenderTarget(this.fboB);
    gl.render(this.scene, this.camera);
    gl.setRenderTarget(null);

    // Swap FBOs
    const temp = this.fboA;
    this.fboA = this.fboB;
    this.fboB = temp;

    return this.fboA.texture;
  }

  resize(width, height) {
    const resScale = 0.75;
    const w = Math.max(1, Math.floor(width * resScale));
    const h = Math.max(1, Math.floor(height * resScale));
    this.fboA.setSize(w, h);
    this.fboB.setSize(w, h);
  }
}

// ==========================================
// 3. REACT THREE FIBER COMPONENT
// ==========================================

export default function FluidBackground() {
  const { gl, size, viewport } = useThree();
  
  // NOTE: Replace '/bg3.webp' with your actual background image
  const bgTexture = useTexture("/bg.webp"); 

  // Instantiate the engine once
  const engine = useMemo(() => new FluidEngine(window.innerWidth, window.innerHeight), []);
  
  // Handle resize cleanly
  useEffect(() => {
    engine.resize(size.width, size.height);
  }, [size, engine]);

  const renderMaterial = useRef();
  const mousePrev = useRef(new THREE.Vector2());

  useFrame((state) => {
    if (!renderMaterial.current) return;

    // 1. Run the fluid simulation internally and get the output texture
    const fluidTexture = engine.update(gl, state.pointer, mousePrev.current);
    
    // 2. Save current mouse for the next frame's velocity calculation
    mousePrev.current.copy(state.pointer);

    // 3. Update the main screen material
    const mat = renderMaterial.current;
    mat.uniforms.uTime.value = state.clock.elapsedTime;
    mat.uniforms.uFluid.value = fluidTexture;
    mat.uniforms.uResolution.value.set(size.width, size.height);
    mat.uniforms.uScreenToImage.value = 1.0;
    // Original aspect ratio logic from all.js (assumes background image is 16:9 like 3840x2160)
    const aspect = size.width / size.height;
    const imageAspect = 3840 / 2160; 
    mat.uniforms.uScreenToImage.value = aspect / imageAspect;

    // Optional: Animate the transition between "Ink/Sumi-e" (0.0) and "Digital Halftone" (1.0)
    // You can tie this to a scroll value instead!
    const transition = (Math.sin(state.clock.elapsedTime * 0.5) + 1) * 0.5;
    mat.uniforms.uFluidMode.value = transition; 
  });

  return (
    <mesh position={[0, 0, -5]}>
      {/* Massive plane to ensure it covers the screen across all aspect ratios */}
      <planeGeometry args={[viewport.width * 4, viewport.height * 4]} />
      <shaderMaterial
        ref={renderMaterial}
        vertexShader={vertexShader}
        fragmentShader={renderFragmentShader}
        transparent={true}
        depthWrite={false}
        uniforms={{
          uTime: { value: 0 },
          uTexture: { value: bgTexture },
          uFluid: { value: null },
          uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
          uScreenToImage: { value: 1.0 },
          uFluidMode: { value: 1.0 } // 1.0 = Halftone, 0.0 = Smooth Ink
        }}
      />
    </mesh>
  );
}