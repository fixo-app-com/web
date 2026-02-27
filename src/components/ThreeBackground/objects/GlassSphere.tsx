import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";
import { COLORS, PARALLAX } from "../constants";

interface GlassSphereProps {
  position: [number, number, number];
  scrollProgress: React.RefObject<number>;
}

export default function GlassSphere({
  position,
  scrollProgress,
}: GlassSphereProps) {
  const meshRef = useRef<Mesh>(null);
  const baseY = position[1];

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.position.y =
      baseY - (scrollProgress.current ?? 0) * PARALLAX.deep * 8;
  });

  return (
    <Float speed={0.6} rotationIntensity={0.5} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <MeshDistortMaterial
          color={COLORS.fixo600}
          metalness={0.6}
          roughness={0.3}
          transparent
          opacity={0.4}
          distort={0.25}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}
