import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Cat from "./Cat"; // This is the component you just pasted

export default function CatViewer() {
  return (
    <div style={{ width: "100%", height: "100vh", background: "#000" }}>
      <Canvas 
        camera={{ position: [0, 1, 1],  }}
        gl={{ antialias: false }} 
          eventPrefix="client" // Turn off default antialias when using post-processing
      >
        {/* A near-black background is essential for the emissive bloom to pop */}
        <color attach="background" args={["#050505"]} />

        <Cat />

        {/* The magic 'exact clone' glow sauce */}
        <EffectComposer disableNormalPass>
          <Bloom
            luminanceThreshold={0.2} // Only glow bright things (like our cyan wires)
            mipmapBlur               // Gives a smooth, physical light bleed
            intensity={1.5}          // How bright the glow is
            radius={0.4}             // How far the light spreads
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}