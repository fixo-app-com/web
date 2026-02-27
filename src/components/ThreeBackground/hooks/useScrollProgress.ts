import { useRef, useEffect } from "react";

/**
 * Tracks page scroll progress (0 → 1) via a shared ref
 * that can be read inside R3F's useFrame without triggering re-renders.
 */
export function useScrollProgress() {
  const progress = useRef(0);

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      progress.current = maxScroll > 0 ? scrollY / maxScroll : 0;
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}
