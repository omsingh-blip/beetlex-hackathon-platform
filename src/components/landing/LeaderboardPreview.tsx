import { motion } from "framer-motion";
import { Trophy, ArrowRight } from "lucide-react";

import Button from "@/components/ui/Button";

const teams = [
  {
    rank: 1,
    name: "NeuralForge",
    track: "AI Track",
    score: 945,
  },
  {
    rank: 2,
    name: "ChainPulse",
    track: "Web3 Track",
    score: 912,
  },
  {
    rank: 3,
    name: "Quantum Builders",
    track: "Open Innovation",
    score: 887,
  },
];

const getRankColor = (rank: number) => {
  switch (rank) {
    case 1:
      return "text-primary";
    case 2:
      return "text-white";
    case 3:
      return "text-muted";
    default:
      return "text-text";
  }
};

export default function LeaderboardPreview() {
  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2">
            <Trophy size={16} className="text-primary" />
            <span className="text-sm font-medium text-muted">
              Live Competition
            </span>
          </div>

          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Top Builders This Week
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-muted">
            Follow the teams leading the innovation race across AI,
            Web3, and emerging technologies.
          </p>
        </div>

        {/* Leaderboard */}
        <div className="space-y-4">
          {teams.map((team, index) => (
            <motion.div
              key={team.name}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="
                glass
                flex
                items-center
                justify-between
                rounded-2xl
                p-5
                transition-all
                hover:scale-[1.01]
                hover:border-primary/30
              "
            >
              <div className="flex items-center gap-5">
                <div
                  className={`text-2xl font-bold ${getRankColor(
                    team.rank
                  )}`}
                >
                  #{team.rank}
                </div>

                <div>
                  <h3 className="font-semibold text-text">
                    {team.name}
                  </h3>

                  <p className="text-sm text-muted">
                    {team.track}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-2xl font-bold text-primary">
                  {team.score}
                </p>

                <p className="text-xs uppercase tracking-wider text-muted">
                  Points
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Button
            variant="outline"
            className="flex items-center gap-2"
          >
            View Full Rankings
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}