import CTASection from "./components/CTASection";
import FeaturedArtists from "./components/FeaturedArtists";
import HeroSection from "./components/HeroSection";
import ProjectRequestForm from "./components/ProjectRequestForm";
import FullProjectRequestForm from "./components/ProjectRequestForm1";
import ProjectRequestSection from "./components/ProjectRequestSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";


export default function HomePage() {

  return (
    <div className="relative overflow-scroll h-screen w-full flex flex-col backdrop:blur-[10px] items-center justify-start bg-[rgb(16,16,17)]">
      <HeroSection/>
      <FeaturedArtists/>
      <ServicesSection/>
      <TestimonialsSection/>
      <CTASection/>
    </div>
  );
}
