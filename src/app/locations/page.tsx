import type { Metadata } from "next";
import Navbar         from "@/components/ui/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Footer          from "@/components/ui/Footer";
import PageHero        from "@/components/ui/PageHero";
import LocationsSection from "@/components/sections/LocationsSection";

export const metadata: Metadata = {
  title: "Locations & Coverage — Atlantic Xchange",
  description:
    "Find our sending locations in the United States and see the 150+ countries where your recipient can receive money — by cash pickup, bank transfer, or mobile wallet.",
};

export default function LocationsPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Locations & Coverage"
          title="Send From the USA, Receive "
          highlight="Around the World"
          subtitle="Every transfer starts in the United States and can be picked up or deposited in 150+ countries across the globe."
          accentColor="teal"
        />
        <LocationsSection />
      </main>
      <Footer />
    </>
  );
}
