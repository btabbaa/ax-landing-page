import Navbar           from "@/components/ui/Navbar";
import ScrollProgress   from "@/components/ui/ScrollProgress";
import HeroSection      from "@/components/sections/HeroSection";
import ServicesSection  from "@/components/sections/ServicesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ReviewsSection   from "@/components/sections/ReviewsSection";
import PartnersSection  from "@/components/sections/PartnersSection";
import Footer           from "@/components/ui/Footer";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <ReviewsSection />
        <PartnersSection />
      </main>
      <Footer />
    </>
  );
}
