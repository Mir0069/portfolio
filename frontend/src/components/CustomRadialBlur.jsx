import React, { forwardRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Effect } from 'postprocessing';
import { Uniform, Vector2 } from 'three';
import * as THREE from 'three';

// The GLSL Shader that physically pulls and blurs pixels radially
const fragmentShader = `
uniform float uIntensity;
uniform vec2 uCenter;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec2 dir = uv - uCenter;
    vec4 color = vec4(0.0);
    float totalWeight = 0.0;
    
    // 30 samples creates a very smooth, heavy blur
    const int samples = 30;

    for(int i = 0; i < samples; i++) {
        float percent = float(i) / float(samples);
        float weight = 1.0 - percent; // Closer pixels are sharper
        
        vec4 sampleColor = texture2D(inputBuffer, uv - dir * percent * uIntensity);
        color += sampleColor * weight;
        totalWeight += weight;
    }

    outputColor = color / totalWeight;
}
`;

// Create the PostProcessing Effect class
class RadialBlurEffectImpl extends Effect {
  constructor({ intensity = 0, center = [0.5, 0.5] } = {}) {
    super("RadialBlurEffect", fragmentShader, {
      uniforms: new Map([
        ["uIntensity", new Uniform(intensity)],
        ["uCenter", new Uniform(new Vector2(center[0], center[1]))]
      ])
    });
  }
}

// The React Component Wrapper
export const RadialBlur = forwardRef(({ targetIntensity = 0, center = [0.5, 0.5] }, ref) => {
  
  // FIX: We hardcode the initial state so useMemo has exactly ZERO dependencies.
  // The React Compiler will now be perfectly happy.
  const effect = useMemo(() => new RadialBlurEffectImpl({ intensity: 0, center: [0.5, 0.5] }), []);
  
  // This automatically animates the blur and updates the center dynamically
  useFrame(() => {
    effect.uniforms.get("uIntensity").value = THREE.MathUtils.lerp(
      effect.uniforms.get("uIntensity").value,
      targetIntensity,
      0.06 
    );
    // Update the center directly into the shader uniform every frame
    effect.uniforms.get("uCenter").value.set(center[0], center[1]);
  });
  
  return <primitive ref={ref} object={effect} dispose={null} />;
});