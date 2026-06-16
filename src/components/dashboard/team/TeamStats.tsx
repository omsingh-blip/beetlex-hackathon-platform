import { StatCard } from "@/components/ui/StatCard";
import { teamStats } from "@/mocks/data/dashboard";

export default function TeamStats() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        label="Events Joined"
        value={teamStats.eventsJoined}
      />

      <StatCard
        label="Team Members"
        value={teamStats.teamMembers}
      />

      <StatCard
        label="Projects Submitted"
        value={teamStats.projectsSubmitted}
      />

      <StatCard
        label="Pending Deadlines"
        value={teamStats.pendingDeadlines}
      />
    </section>
  );
}