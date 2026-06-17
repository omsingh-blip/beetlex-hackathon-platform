import Card from "@/components/ui/Card";

import { judgeDashboardData } from "@/mocks/data/judge";

export default function RecentScores() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Recent Scores
      </h2>

      <div className="space-y-4">
        {judgeDashboardData.recentScores.map((score) => (
          <Card
            key={score.id}
            className="p-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white">
                {score.project}
              </h3>

              <span className="text-2xl font-bold text-primary">
                {score.score}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}