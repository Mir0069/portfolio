import { useRef, useState, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function FloatingGLB({
  url,
  position,
  scale = 1,
  speed = 1,
}) {
  const { scene } = useGLTF(url);

  const objectRef = useRef();
  const [hovered, setHovered] = useState(false);

  const clonedScene = useMemo(() => scene.clone(), [scene]);

  useEffect(() => {
    clonedScene.traverse((obj) => {
      if (!obj.isMesh) return;

      obj.castShadow = true;
      obj.receiveShadow = true;
    });
  }, [clonedScene]);

  useFrame(() => {
    if (!objectRef.current) return;

    const targetScale = hovered
      ? scale * 1.4
      : scale;

    objectRef.current.scale.lerp(
      new THREE.Vector3(
        targetScale,
        targetScale,
        targetScale
      ),
      0.08
    );

    const targetZ = hovered
      ? position[2] + 0.8
      : position[2];

    objectRef.current.position.z =
      THREE.MathUtils.lerp(
        objectRef.current.position.z,
        targetZ,
        0.08
      );

    objectRef.current.rotation.y += hovered
      ? 0.03
      : 0.008;
  });

  return (
    <Float
      speed={speed}
      rotationIntensity={hovered ? 2 : 1}
      floatIntensity={hovered ? 2 : 1}
    >
      <primitive
        ref={objectRef}
        object={clonedScene}
        position={position}
        scale={scale}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "pointer";
          setHovered(true);
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
          setHovered(false);
        }}
      />
    </Float>
  );
}

export default function FloatingElements() {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y =
      state.clock.elapsedTime * 0.08;

    groupRef.current.rotation.x =
      Math.sin(
        state.clock.elapsedTime * 0.05
      ) * 0.04;
  });

  return (
    <group ref={groupRef}>
      <FloatingGLB
        url="/emoji-coffee.glb"
        position={[4, 1.5, -4]}
        scale={0.4}
        speed={1}
      />

      <FloatingGLB
        url="/emoji-f1.glb"
        position={[-4, 2, -5]}
        scale={0.4}
        speed={1.2}
      />

      <FloatingGLB
        url="/emoji-game.glb"
        position={[3, -2, -6]}
        scale={0.4}
        speed={0.9}
      />

      <FloatingGLB
        url="/emoji-donatu.glb"
        position={[-3, -1.5, -4]}
        scale={0.4}
        speed={1.1}
      />
    </group>
  );
}

useGLTF.preload("/emoji-coffee.glb");
useGLTF.preload("/emoji-f1.glb");
useGLTF.preload("/emoji-game.glb");
useGLTF.preload("/emoji-donatu.glb");