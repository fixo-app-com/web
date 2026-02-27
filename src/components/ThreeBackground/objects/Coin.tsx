import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Mesh } from "three";
import { COLORS, MATERIAL, PARALLAX } from "../constants";

interface CoinProps {
  position: [number, number, number];
  color?: string;
  scrollProgress: React.RefObject<number>;
}

export default function Coin({
  position,
  color = COLORS.fixo500,
  scrollProgress,
}: CoinProps) {
  const meshRef = useRef<Mesh>(null);
  const baseY = position[1];

  useFrame((_state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.3;
    meshRef.current.position.y =
      baseY - (scrollProgress.current ?? 0) * PARALLAX.middle * 8;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <cylinderGeometry args={[0.8, 0.8, 0.12, 32]} />
        <meshStandardMaterial
          color={color}
          metalness={MATERIAL.metalness}
          roughness={MATERIAL.roughness}
          transparent
          opacity={MATERIAL.opacity.mid}
        />
      </mesh>
    </Float>
  );
}
