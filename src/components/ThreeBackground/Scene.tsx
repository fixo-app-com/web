import Coin from "./objects/Coin";
import BarChart from "./objects/BarChart";
import FloatingRing from "./objects/FloatingRing";
import GlassSphere from "./objects/GlassSphere";
import FloatingDiamonds from "./objects/FloatingDiamonds";
import { useScrollProgress } from "./hooks/useScrollProgress";

export default function Scene() {
  const scrollProgress = useScrollProgress();

  return (
    <>
      {/* Lighting — stronger to make objects pop on dark bg */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -3, 2]} intensity={0.5} color="#818cf8" />

      {/* Deep layer (0.1x) */}
      <FloatingRing position={[-4, 2, -3]} scrollProgress={scrollProgress} />
      <GlassSphere position={[4, -1.5, -2]} scrollProgress={scrollProgress} />

      {/* Middle layer (0.3x) */}
      <Coin position={[-3, 0.5, -1]} scrollProgress={scrollProgress} />
      <Coin
        position={[3.5, 2, -1.5]}
        color="#818cf8"
        scrollProgress={scrollProgress}
      />
      <BarChart position={[2.5, -1, -2]} scrollProgress={scrollProgress} />

      {/* Near layer (0.6x) */}
      <FloatingDiamonds scrollProgress={scrollProgress} />
    </>
  );
}
