import Hero from "@/components/landing/Hero";
import Sponsors from "@/components/landing/Sponsors";
import About from "@/components/landing/About";
import Timeline from "@/components/landing/Timeline";

export default function LandingPage() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Sponsors />
      <About />
      <Timeline />
    </main>
  );
}