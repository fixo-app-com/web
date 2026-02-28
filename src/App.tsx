import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AppPreview from "./components/AppPreview/AppPreview";
import Features from "./components/Features/Features";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Testimonial from "./components/Testimonial/Testimonial";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";

function App(): React.JSX.Element {
  return (
    <div className="min-h-screen text-gray-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <AppPreview />
      <Features />
      <HowItWorks />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
