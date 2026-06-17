import { StatCard } from "@/components/ui/StatCard";
import { judgeDashboardData } from "@/mocks/data/judge";

export default function JudgeStats() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        label="Projects Assigned"
        value={judgeDashboardData.assignedProjects}
      />

      <StatCard
        label="Reviewed Projects"
        value={judgeDashboardData.reviewedProjects}
      />

      <StatCard
        label="Pending Reviews"
        value={judgeDashboardData.pendingReviews}
      />

      <StatCard
        label="Average Score"
        value={`${judgeDashboardData.averageScore}%`}
      />
    </section>
  );
}