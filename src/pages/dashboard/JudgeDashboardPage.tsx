import { DashboardShell } from "@/components/ui/DashboardShell";

import JudgeStats from "@/components/dashboard/judge/JudgeStats";
import JudgeProgress from "@/components/dashboard/judge/JudgeProgress";
import AssignedProjects from "@/components/dashboard/judge/AssignedProjects";
import EvaluationQueue from "@/components/dashboard/judge/EvaluationQueue";
import RecentScores from "@/components/dashboard/judge/RecentScores";

export default function JudgeDashboardPage() {
  return (
    <DashboardShell
      title="Judge Dashboard"
      description="Review assigned projects and track evaluation progress."
    >
      <JudgeStats />

      <JudgeProgress />

      <AssignedProjects />

      <div className="grid gap-6 lg:grid-cols-2">
        <EvaluationQueue />
        <RecentScores />
      </div>
    </DashboardShell>
  );
}