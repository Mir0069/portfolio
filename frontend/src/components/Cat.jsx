import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef } from "react";

// EXACT ORIGINAL VERTEX SHADER
const vertexShader = `
attribute vec3 barycentric;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vBarycentric;
varying float vWorldY;
uniform float uTime;
uniform vec3 uEarLeftTip;
uniform vec3 uEarRightTip;
uniform float uEarRadius;
uniform vec2 uMouse;

void main() {
    vec3 pos = position;
    float baseY_L = uEarLeftTip.y  - uEarRadius * 0.5;
    float baseY_R = uEarRightTip.y - uEarRadius * 0.5;

    float hL = smoothstep(baseY_L, baseY_L + uEarRadius * 0.25, pos.y);
    float hR = smoothstep(baseY_R, baseY_R + uEarRadius * 0.25, pos.y);
    float xReachL = 1.0 - smoothstep(uEarRadius * 0.45, uEarRadius * 0.9, abs(pos.x - uEarLeftTip.x));
    float xReachR = 1.0 - smoothstep(uEarRadius * 0.45, uEarRadius * 0.9, abs(pos.x - uEarRightTip.x));
    float wL = hL * xReachL;
    float wR = hR * xReachR;

    float tiltL = sin(uTime * 0.71)          * 0.18
                + sin(uTime * 1.37 + 1.2)    * 0.10
                + sin(uTime * 2.13 + 2.7)    * 0.06
                + sin(uTime * 0.29 + 3.1)    * 0.07;

    float tiltR = sin(uTime * 0.71 + 1.9)    * 0.18
                + sin(uTime * 1.37 + 3.4)    * 0.10
                + sin(uTime * 2.13 + 5.0)    * 0.06
                + sin(uTime * 0.29 + 1.3)    * 0.07;

    float cursorTilt = uMouse.x * 0.10;
    tiltL += cursorTilt;
    tiltR += cursorTilt;

    vec2 baseL2 = vec2(uEarLeftTip.x,  baseY_L);
    vec2 baseR2 = vec2(uEarRightTip.x, baseY_R);
    vec2 vL2    = pos.xy - baseL2;
    vec2 vR2    = pos.xy - baseR2;
    float cL = cos(tiltL), sL = sin(tiltL);
    float cR = cos(tiltR), sR = sin(tiltR);
    vec2 newL = baseL2 + vec2(cL * vL2.x - sL * vL2.y, sL * vL2.x + cL * vL2.y);
    vec2 newR = baseR2 + vec2(cR * vR2.x - sR * vR2.y, sR * vR2.x + cR * vR2.y);

    pos.xy = mix(pos.xy, newL, wL);
    pos.xy = mix(pos.xy, newR, wR);

    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    vViewPosition = mvPosition.xyz;
    vBarycentric = barycentric;
    vWorldY = (modelMatrix * vec4(pos, 1.0)).y;
    gl_Position = projectionMatrix * mvPosition;
}
`;

// EXACT ORIGINAL BODY FRAGMENT SHADER
const fragmentShaderBody = `
uniform vec2 uMouse;
uniform vec2 uResolution;
uniform float uSweepY;
uniform float uSweepReverse;
uniform float uTime;
uniform float uIntroRedY;
uniform float uIntroTransition;
uniform float uIntroFade;
uniform float uHideY;
uniform float uHalftoneFade;
uniform float uIsTouch;
varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vBarycentric;
varying float vWorldY;
varying vec2 vUv;

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
        mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
        f.y
    );
}

void main() {
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(-vViewPosition);
    vec3 mouseLight = vec3(uMouse.x * 2.5, uMouse.y * 2.5, 1.5);
    vec3 autoLight = vec3(sin(uTime * 0.4) * 1.5, cos(uTime * 0.27) * 1.0, 1.5);
    vec3 lightDir = normalize(mix(mouseLight, autoLight, uIsTouch));

    vec3 halfVec = normalize(lightDir + viewDir);
    float spec = pow(max(dot(normal, halfVec), 0.0), 80.0);
    float specHard = pow(max(dot(normal, halfVec), 0.0), 200.0);
    float specular = spec * 0.5 + specHard * 0.8;

    float rim = pow(1.0 - max(dot(viewDir, normal), 0.0), 2.5) * 0.45;
    float diffuse = max(dot(normal, lightDir), 0.0) * 0.28;
    float brightness = pow(0.03 + diffuse + rim + specular, 2.75);

    float lightLevel = clamp(diffuse * 1.4 + rim * 0.9 + specular * 3.0, 0.0, 1.0);
    float lightShaped = smoothstep(0.1, 0.8, lightLevel);
    float cellSize = 10.0;
    vec2 cellId = floor(gl_FragCoord.xy / cellSize);
    vec2 cellLocal = fract(gl_FragCoord.xy / cellSize) - 0.5;
    float dotDist = length(cellLocal);
    float cellHash = fract(sin(dot(cellId, vec2(127.1, 311.7))) * 43758.5453);
    float cellHash2 = fract(sin(dot(cellId, vec2(91.34, 47.71))) * 28471.13);
    float pulsePrimary = sin(uTime * 2.2 + cellHash * 6.2831) * 0.5 + 0.5;
    float pulseSecondary = sin(uTime * 1.3 + cellHash2 * 6.2831) * 0.5 + 0.5;

    vec2 cursorPx = (uMouse * 0.5 + 0.5) * uResolution;
    vec2 cellCenterPx = (cellId + 0.5) * cellSize;
    float cursorDistPx = distance(cellCenterPx, cursorPx);
    float cursorInfluence = (1.0 - smoothstep(0.0, 220.0, cursorDistPx)) * (1.0 - uIsTouch);

    float dotRadius = lightShaped * 0.6
        + (pulsePrimary - 0.5) * 0.10 * lightShaped
        + (pulseSecondary - 0.5) * 0.06 * lightShaped
        + cursorInfluence * 0.35;
    dotRadius = max(dotRadius, 0.0);
    float dotMask = smoothstep(dotRadius + 0.08, dotRadius - 0.08, dotDist);
    vec3 dotColor = vec3(1.0);
    vec3 cursorColor = vec3(0.188, 0.722, 1.0);
    vec3 mixedDotColor = mix(dotColor, cursorColor, cursorInfluence);
    vec3 hotTint = vec3(0.4, 0.75, 1.0) * pow(specular, 1.2) * 2.0 * (1.0 - cursorInfluence);
    vec3 halftoneColor = mix(vec3(0.0), mixedDotColor + hotTint, dotMask);

    float minBary = min(min(vBarycentric.x, vBarycentric.y), vBarycentric.z);
    float wire = 1.0 - smoothstep(0.0, 0.04, minBary);

    float n1 = vnoise(vUv * 5.0  + vec2(uTime * 0.9,  uTime * 0.5));
    float n2 = vnoise(vUv * 12.0 - vec2(uTime * 1.7,  uTime * 1.1));
    float n3 = vnoise(vUv * 28.0 + vec2(uTime * 3.2, -uTime * 2.3));
    float edgeNoise = (n1 * 0.55 + n2 * 0.30 + n3 * 0.15) * 2.0 - 1.0;

    float rawDist = vWorldY - uSweepY;
    float proximity = exp(-abs(rawDist) * 6.0);
    float noisyDist = rawDist + edgeNoise * 0.18 * proximity;

    float directedDist = noisyDist * (1.0 - 2.0 * uSweepReverse);
    float inWire = smoothstep(0.07, -0.07, directedDist);

    float wireDiff = max(dot(normal, lightDir), 0.0);
    float wireSpec = pow(max(dot(normal, halfVec), 0.0), 30.0);
    float wireBrightness = 0.15 + wireDiff * 0.5 + wireSpec * 2.0;

    vec3 vp = vViewPosition;
    float travel1 = fract(vp.y * 4.0 - uTime * 0.6);
    float travel2 = fract(vp.x * 3.0 + uTime * 0.5);
    float travel3 = fract((vp.x + vp.y) * 3.5 - uTime * 0.7);
    float pulse1 = pow(1.0 - abs(travel1 - 0.5) * 2.0, 12.0);
    float pulse2 = pow(1.0 - abs(travel2 - 0.5) * 2.0, 12.0);
    float pulse3 = pow(1.0 - abs(travel3 - 0.5) * 2.0, 12.0);
    float travelLight = (pulse1 + pulse2 * 0.7 + pulse3 * 0.5) * wire * inWire;

    vec3 wireColor = mix(vec3(0.0), vec3(wireBrightness), wire);
    wireColor += vec3(0.6, 0.8, 1.0) * travelLight * 2.5;

    float sweepActive = smoothstep(3.0, 2.4, abs(uSweepY));
    float d = abs(noisyDist);

    float glow1 = exp(-d * 4.5) * sweepActive;
    float glow2 = exp(-d * 16.0) * sweepActive;
    float glow3 = exp(-d * 50.0) * sweepActive;

    float sparkN = vnoise(vUv * 22.0 + vec2(uTime * 4.5, 0.0));
    float spark  = pow(sparkN, 6.0) * glow2 * 12.0;

    float scan = fract(vUv.x * 1.0 - uTime * 1.8);
    scan = pow(1.0 - abs(scan - 0.5) * 2.0, 18.0) * glow3 * 6.0;

    float fringe = step(0.0, rawDist) * (1.0 - step(0.25, rawDist));
    float fringeN = vnoise(vUv * 18.0 - vec2(uTime * 2.0, 0.0));
    float fringeV = pow(fringeN, 4.0) * (1.0 - rawDist / 0.25) * fringe * sweepActive * 1.5;

    vec3 boundaryColor =
        vec3(0.15, 0.35, 1.00) * glow1 * 2.5
      + vec3(0.20, 0.85, 1.00) * glow2 * 5.0
      + vec3(0.85, 0.97, 1.00) * glow3 * 14.0
      + vec3(0.40, 0.80, 1.00) * spark
      + vec3(1.00, 1.00, 1.00) * scan
      + vec3(0.30, 0.70, 1.00) * fringeV;

    if (uIntroRedY > -900.0) {
        float effectiveInWire = (uIntroTransition > 0.5) ? 0.0 : inWire;
        vec3 litColor  = mix(halftoneColor, wireColor, effectiveInWire) + boundaryColor;
        vec3 darkColor = boundaryColor;
        gl_FragColor = vec4(mix(darkColor, litColor, uIntroFade), 1.0);
    } else {
        float effectiveInWire = (uIntroTransition > 0.5) ? 0.0 : inWire;
        vec3 finalColor = mix(halftoneColor, wireColor, effectiveInWire) + boundaryColor;
        gl_FragColor = vec4(finalColor, 1.0);
    }

    if (uHideY < 990.0) {
        float hideRawDist   = vWorldY - uHideY;
        float hideProximity = exp(-abs(hideRawDist) * 6.0);
        float hideNoisyDist = hideRawDist + edgeNoise * 0.18 * hideProximity;
        float hideAlpha = smoothstep(0.08, -0.08, -hideNoisyDist);

        float hideD = abs(hideNoisyDist);
        vec3 hideGlow = vec3(0.15, 0.35, 1.00) * exp(-hideD * 4.5) * 2.5
                      + vec3(0.20, 0.85, 1.00) * exp(-hideD * 16.0) * 5.0
                      + vec3(0.85, 0.97, 1.00) * exp(-hideD * 50.0) * 14.0;

        gl_FragColor.rgb += hideGlow * hideAlpha;
        gl_FragColor.a   *= hideAlpha;
    }
}
`;

// EXACT ORIGINAL EYE FRAGMENT SHADER
const fragmentShaderEyes = `
uniform vec2 uMouse;
uniform vec2 uResolution;
uniform float uTime;
uniform float uSweepY;
uniform float uSweepReverse;
uniform float uIntroRedY;
uniform float uIntroTransition;
uniform float uIntroFade;
uniform float uHideY;
uniform float uEyeFade;
uniform float uHalftoneFade;
uniform float uIsTouch;
varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vBarycentric;
varying vec2 vUv;
varying float vWorldY;

float hash(float n) { return fract(sin(n) * 43758.5453); }
float hash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

void main() {
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(-vViewPosition);
    float minBary = min(min(vBarycentric.x, vBarycentric.y), vBarycentric.z);
    float wire = 1.0 - smoothstep(0.0, 0.04, minBary);

    float sweepDist = vWorldY - uSweepY;
    float directedDist = sweepDist * (1.0 - 2.0 * uSweepReverse);
    float inWire = smoothstep(0.05, -0.05, directedDist);

    float cycle = mod(uTime, 3.0);
    float glowOn = smoothstep(0.0, 0.08, cycle) * smoothstep(0.5, 0.35, cycle);
    glowOn *= (uIntroRedY > -900.0) ? 0.0 : 1.0;

    vec3 mouseLight = vec3(uMouse.x * 2.5, uMouse.y * 2.5, 1.5);
    vec3 autoLight = vec3(sin(uTime * 0.4) * 1.5, cos(uTime * 0.27) * 1.0, 1.5);
    vec3 lightDir = normalize(mix(mouseLight, autoLight, uIsTouch));
    vec3 halfVec = normalize(lightDir + viewDir);
    
    float diffuse = max(dot(normal, lightDir), 0.0) * 0.12;
    float lightLevel = clamp(diffuse * 3.3, 0.0, 1.0);
    
    vec3 halftoneColor = vec3(0.05, 0.05, 0.05); // Base dark eye
    vec3 normalColor = mix(halftoneColor, vec3(1.0), glowOn);

    float wireBrightness = 0.15 + diffuse * 0.5;
    vec3 wireColor = mix(vec3(0.0), vec3(wireBrightness), wire);

    vec3 vp = vViewPosition;
    float travel1 = fract(vp.y * 4.0 - uTime * 0.6);
    float pulse1 = pow(1.0 - abs(travel1 - 0.5) * 2.0, 12.0);
    float travelLight = pulse1 * wire * inWire;
    wireColor += vec3(0.6, 0.8, 1.0) * travelLight * 2.5;

    float sweepActive = smoothstep(3.0, 2.6, abs(uSweepY));
    float distToBoundary = abs(vWorldY - uSweepY);
    float flare = exp(-distToBoundary * 12.0) * sweepActive;
    vec3 flareColor = vec3(0.7, 0.85, 1.0) * flare * 3.0;

    vec3 finalColor = mix(normalColor, wireColor, inWire) + flareColor;
    gl_FragColor = vec4(finalColor, uEyeFade);
}
`;

function addBarycentric(geometry) {
  const g = geometry.index ? geometry.toNonIndexed() : geometry.clone();
  const count = g.attributes.position.count;
  const bary = [];

  for (let i = 0; i < count; i += 3) {
    bary.push(1, 0, 0, 0, 1, 0, 0, 0, 1);
  }

  g.setAttribute("barycentric", new THREE.Float32BufferAttribute(bary, 3));
  return g;
}

export default function Cat() {
  const { scene } = useGLTF("/cat.glb");
  const { size } = useThree();
  const catRef = useRef();

  const processed = useMemo(() => {
    const clone = scene.clone();

    const baseUniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2() },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uSweepY: { value: -3.0 }, 
      uSweepReverse: { value: 0 },
      uIntroRedY: { value: -999.0 },
      uIntroTransition: { value: 0 },
      uIntroFade: { value: 0 },
      uHideY: { value: 999.0 },
      uHalftoneFade: { value: 0 },
      uIsTouch: { value: 0 },
      uEarLeftTip: { value: new THREE.Vector3(-0.15, 1.0, 0.0) },
      uEarRightTip: { value: new THREE.Vector3(0.15, 1.0, 0.0) },
      uEarRadius: { value: 0.18 },
      uEyeFade: { value: 1.0 }
    };

    clone.traverse((obj) => {
      if (!obj.isMesh) return;

      const isEye = obj.name === "球" || /球/.test(obj.name) || /eye/i.test(obj.name);

      obj.geometry = addBarycentric(obj.geometry);

      obj.material = new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: isEye ? fragmentShaderEyes : fragmentShaderBody,
        transparent: true,
        uniforms: THREE.UniformsUtils.clone(baseUniforms)
      });
    });

    return clone;
  }, [scene]);

  useFrame((state) => {
    // 1. Get current normalized mouse coordinates (-1 to 1)
    const pointer = state.pointer;

    // 2. Exact physical tracking math from the Yuta Abe site
    if (catRef.current) {
      const targetRotY = pointer.x * 0.15;
      const targetRotX = -pointer.y * 0.1;
      const targetPosX = pointer.x * 0.3;
      const targetPosY = 0.1 + pointer.y * 0.15;

      // Smooth interpolation factor (0.06 is what the original uses per frame)
      const lerpFactor = 0.06;

      catRef.current.rotation.y = THREE.MathUtils.lerp(catRef.current.rotation.y, targetRotY, lerpFactor);
      catRef.current.rotation.x = THREE.MathUtils.lerp(catRef.current.rotation.x, targetRotX, lerpFactor);
      catRef.current.position.x = THREE.MathUtils.lerp(catRef.current.position.x, targetPosX, lerpFactor);
      catRef.current.position.y = THREE.MathUtils.lerp(catRef.current.position.y, targetPosY, lerpFactor);
    }

    // 3. Update shaders
    catRef.current?.traverse((obj) => {
      if (!obj.isMesh) return;

      const mat = obj.material;

      if (mat.uniforms?.uTime) {
        mat.uniforms.uTime.value = state.clock.elapsedTime;
        mat.uniforms.uMouse.value.set(pointer.x, pointer.y);
        mat.uniforms.uResolution.value.set(size.width, size.height);

        // Scan cycle between wireframe and dots
        const sweepPhase = Math.sin(state.clock.elapsedTime * 0.6) * 4.0;
        mat.uniforms.uSweepY.value = sweepPhase;
      }
    });
  });

  return (
    <primitive
      ref={catRef}
      object={processed}
      scale={1}
      // Start position slightly lower so the lerping snaps naturally
      position={[0, 0.5, 1]}
      rotation={[0, Math.PI, 0]}  
    />
  );
}

useGLTF.preload("/cat.glb");