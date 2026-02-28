import Hero from "../components/Hero/Hero";
import AppPreview from "../components/AppPreview/AppPreview";
import Features from "../components/Features/Features";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Testimonial from "../components/Testimonial/Testimonial";
import CallToAction from "../components/CallToAction/CallToAction";

export default function HomePage(): React.JSX.Element {
  return (
    <>
      <Hero />
      <AppPreview />
      <Features />
      <HowItWorks />
      <Testimonial />
      <CallToAction />
    </>
  );
}
