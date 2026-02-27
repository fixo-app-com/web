import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Group } from "three";
import { COLORS, MATERIAL, PARALLAX } from "../constants";

interface FloatingDiamondsProps {
  scrollProgress: React.RefObject<number>;
}

const DIAMONDS = [
  { pos: [3.5, 1.5, -1] as [number, number, number], scale: 0.2 },
  { pos: [-3.8, 2.8, -0.5] as [number, number, number], scale: 0.18 },
  { pos: [2.5, -1.2, -2] as [number, number, number], scale: 0.25 },
  { pos: [-2.2, -2.5, -1] as [number, number, number], scale: 0.15 },
  { pos: [4.2, -0.5, -1.5] as [number, number, number], scale: 0.2 },
  { pos: [-4.5, 0.8, 0] as [number, number, number], scale: 0.22 },
];

export default function FloatingDiamonds({
  scrollProgress,
}: FloatingDiamondsProps) {
  const groupRef = useRef<Group>(null);

  useFrame((_state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.05;
    groupRef.current.children.forEach((child) => {
      child.rotation.x += delta * 0.4;
      child.rotation.z += delta * 0.3;
    });
    groupRef.current.position.y =
      -(scrollProgress.current ?? 0) * PARALLAX.near * 8;
  });

  return (
    <group ref={groupRef}>
      {DIAMONDS.map((d, i) => (
        <Float key={i} speed={2 + i * 0.3} floatIntensity={0.6}>
          <mesh position={d.pos} scale={d.scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? COLORS.fixo400 : COLORS.fixo500}
              metalness={MATERIAL.metalness}
              roughness={MATERIAL.roughness}
              transparent
              opacity={MATERIAL.opacity.high}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}
