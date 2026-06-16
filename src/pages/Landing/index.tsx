import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Sponsors from "@/components/landing/Sponsors";
import Timeline from "@/components/landing/Timeline";
import PrizeTracks from "@/components/landing/PrizeTracks";
import FAQ from "@/components/landing/FAQ";
import LeaderboardPreview from "@/components/landing/LeaderboardPreview";

import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/landing/CTASection";

export default function LandingPage() {
  return (
    <>
      <Hero />

      <Reveal>
        <section id="about">
          <About />
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section id="timeline">
          <Timeline/>
        </section>
      </Reveal>

      <Reveal>
        <LeaderboardPreview />
      </Reveal>

      <Reveal delay={0.2}>
        <section id="tracks">
          <PrizeTracks />
        </section>
      </Reveal>

      <Reveal delay={0.3}>
        <Sponsors />
      </Reveal>

      <Reveal delay={0.4}>
        <section id="faq">
          <FAQ />
        </section>
      </Reveal>

      <Reveal>
  <CTASection />
</Reveal>
    </>
  );
}