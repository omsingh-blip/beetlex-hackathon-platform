import Hero from "@/components/landing/Hero";
import Sponsors from "@/components/landing/Sponsors";
import About from "@/components/landing/About";
import Timeline from "@/components/landing/Timeline";
import PrizeTracks from "@/components/landing/PrizeTracks";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/shared/Footer";

export default function LandingPage() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Sponsors />
      <About />
      <Timeline />
      <PrizeTracks />
      <FAQ />
      <Footer />
    </main>
  );
}