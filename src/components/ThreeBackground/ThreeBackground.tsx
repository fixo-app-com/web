import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

function getMatch(query: string) {
  return typeof window !== "undefined" && window.matchMedia(query).matches;
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => getMatch(query));

  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

export default function ThreeBackground() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)",
  );

  if (!isDesktop || prefersReducedMotion) return null;

  return (
    <div
      className="fixed inset-0 z-0"
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
