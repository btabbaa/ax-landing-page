import Navbar           from "@/components/ui/Navbar";
import ScrollProgress   from "@/components/ui/ScrollProgress";
import HeroSection      from "@/components/sections/HeroSection";
import SendOptionsSection from "@/components/sections/SendOptionsSection";
import ServicesSection  from "@/components/sections/ServicesSection";
import CurrencyExchangeSection from "@/components/sections/CurrencyExchangeSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import AppDownloadSection from "@/components/sections/AppDownloadSection";
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
        <SendOptionsSection />
        <ServicesSection />
        <CurrencyExchangeSection />
        <HowItWorksSection />
        <AppDownloadSection />
        <ReviewsSection />
        <PartnersSection />
      </main>
      <Footer />
    </>
  );
}
