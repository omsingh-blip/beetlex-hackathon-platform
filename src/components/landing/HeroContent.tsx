import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import StatsCard from "./StatsCard";

export default function HeroContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm text-lime-400">
        Developer First • Impact Forever
      </span>

      <h1 className="mt-6 text-6xl font-black leading-tight lg:text-8xl">
        BUILD
        <br />
        <span className="bg-gradient-to-r from-lime-400 to-purple-500 bg-clip-text text-transparent">
          HACK
        </span>
        <br />
        SHIP
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
        <StatsCard value={2000} suffix="+" label="Developers" />

        <StatsCard value={50} suffix="+" label="Mentors" />

        <StatsCard value={100} suffix="K+" label="Prize Pool" />
      </div>
    </motion.div>
  );
}