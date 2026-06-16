import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen pt-28">
      <HeroBackground />

      <div className="absolute left-20 top-20 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <HeroContent />
          <HeroVideo />
        </div>
      </div>
    </section>
  );
}