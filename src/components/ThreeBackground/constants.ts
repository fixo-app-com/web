// Fixo brand colors (from index.css @theme)
export const COLORS = {
  fixo400: "#818cf8",
  fixo500: "#6366f1",
  fixo600: "#4f46e5",
} as const;

// Parallax speed multipliers per layer
export const PARALLAX = {
  deep: 0.1,
  middle: 0.3,
  near: 0.6,
} as const;

// Material defaults
export const MATERIAL = {
  metalness: 0.8,
  roughness: 0.2,
  opacity: {
    low: 0.35,
    mid: 0.5,
    high: 0.65,
  },
} as const;
