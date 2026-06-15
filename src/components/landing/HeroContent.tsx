import Button from "@/components/ui/Button";

export default function HeroContent() {
  return (
    <div>
      <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm text-lime-400">
        Developer First • Impact Forever
      </span>

      <h1 className="mt-6 text-6xl font-black leading-tight lg:text-8xl">
        BUILD.
        <br />
        <span className="text-lime-400">HACK.</span>
        <br />
        SHIP.
      </h1>

      <p className="mt-6 max-w-xl text-lg text-zinc-400">
        Join the next generation of builders. Participate in AI, Web3, and
        innovation-focused hackathons powered by BeetleX.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Button>Register Now</Button>
        <Button variant="secondary">Explore Events</Button>
      </div>

      <div className="mt-12 grid grid-cols-3 gap-4">
        <div className="rounded-xl border border-white/10 bg-zinc-900 p-4">
          <h3 className="text-2xl font-bold text-lime-400">2K+</h3>
          <p className="text-sm text-zinc-400">Developers</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-zinc-900 p-4">
          <h3 className="text-2xl font-bold text-lime-400">50+</h3>
          <p className="text-sm text-zinc-400">Mentors</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-zinc-900 p-4">
          <h3 className="text-2xl font-bold text-lime-400">$100K+</h3>
          <p className="text-sm text-zinc-400">Prize Pool</p>
        </div>
      </div> 

    </div> 
  );
}
