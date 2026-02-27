import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Mesh } from "three";
import { COLORS, MATERIAL, PARALLAX } from "../constants";

interface FloatingRingProps {
  position: [number, number, number];
  scrollProgress: React.RefObject<number>;
}

export default function FloatingRing({
  position,
  scrollProgress,
}: FloatingRingProps) {
  const meshRef = useRef<Mesh>(null);
  const baseY = position[1];

  useFrame((_state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.z += delta * 0.1;
    meshRef.current.position.y =
      baseY - (scrollProgress.current ?? 0) * PARALLAX.deep * 8;
  });

  return (
    <Float speed={0.8} rotationIntensity={0.4} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[1.8, 0.2, 16, 32]} />
        <meshStandardMaterial
          color={COLORS.fixo400}
          metalness={MATERIAL.metalness}
          roughness={MATERIAL.roughness}
          transparent
          opacity={MATERIAL.opacity.low}
        />
      </mesh>
    </Float>
  );
}
