import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Group } from "three";
import { COLORS, MATERIAL, PARALLAX } from "../constants";

interface BarChartProps {
  position: [number, number, number];
  scrollProgress: React.RefObject<number>;
}

const BARS = [
  { height: 0.9, color: COLORS.fixo600 },
  { height: 1.5, color: COLORS.fixo500 },
  { height: 1.2, color: COLORS.fixo400 },
];

export default function BarChart({ position, scrollProgress }: BarChartProps) {
  const groupRef = useRef<Group>(null);
  const baseY = position[1];

  useFrame((_state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.15;
    groupRef.current.position.y =
      baseY - (scrollProgress.current ?? 0) * PARALLAX.middle * 8;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={groupRef} position={position}>
        {BARS.map((bar, i) => (
          <mesh key={i} position={[(i - 1) * 0.5, bar.height / 2, 0]}>
            <boxGeometry args={[0.35, bar.height, 0.35]} />
            <meshStandardMaterial
              color={bar.color}
              metalness={MATERIAL.metalness}
              roughness={MATERIAL.roughness}
              transparent
              opacity={MATERIAL.opacity.mid}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}
