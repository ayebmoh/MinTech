import HeroSection from "./components/sections/Herosection";
import WhySection from "./components/sections/WhySection";
import ServicesSection from "./components/sections/ServicesSection";
import ContactSection from "./components/sections/ContactSection";
import TextSlider from "./components/tools/TextSlider";
import SectionDivider from "./components/tools/TextSlider2";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <HeroSection />
      <SectionDivider />
      <WhySection />
      <ServicesSection />
      <TextSlider />

      <ContactSection />
    </div>
  );
}
