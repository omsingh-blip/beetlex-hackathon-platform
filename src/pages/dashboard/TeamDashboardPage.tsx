import { DashboardShell } from "@/components/ui/DashboardShell";

import TeamStats from "@/components/dashboard/team/TeamStats";
import MyEvents from "@/components/dashboard/team/MyEvents";
import TeamMembers from "@/components/dashboard/team/TeamMembers";
import Deadlines from "@/components/dashboard/team/Deadlines";
import SubmissionStatus from "@/components/dashboard/team/SubmissionStatus";

export default function TeamDashboardPage() {
  return (
    <DashboardShell
      title="Team Dashboard"
      description="Track your hackathons, submissions, deadlines and team progress."
    >
      <TeamStats />

      <MyEvents />

      <div className="grid gap-6 lg:grid-cols-2">
        <TeamMembers />
        <Deadlines />
      </div>

      <SubmissionStatus />
    </DashboardShell>
  );
}