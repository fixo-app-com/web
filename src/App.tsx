import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AppPreview from "./components/AppPreview/AppPreview";
import Features from "./components/Features/Features";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Testimonial from "./components/Testimonial/Testimonial";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";

const ThreeBackground = lazy(
  () => import("./components/ThreeBackground/ThreeBackground"),
);

function App(): React.JSX.Element {
  return (
    <div className="min-h-screen text-gray-100 overflow-x-hidden">
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AppPreview />
        <Features />
        <HowItWorks />
        <Testimonial />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}

export default App;
