import { ProgressCard } from "@/components/ui/ProgressCard";
import { judgeDashboardData } from "@/mocks/data/judge";

export default function JudgeProgress() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Review Progress
      </h2>

      <ProgressCard
        title="Review Completion"
        progress={judgeDashboardData.completion}
      />
    </section>
  );
}