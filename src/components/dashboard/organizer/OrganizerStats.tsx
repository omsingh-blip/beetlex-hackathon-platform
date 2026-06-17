import { StatCard } from "@/components/ui/StatCard";
import { organizerDashboardData } from "@/mocks/data/organizer";

export default function OrganizerStats() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        label="Total Events"
        value={organizerDashboardData.totalEvents}
      />

      <StatCard
        label="Participants"
        value={organizerDashboardData.totalParticipants}
      />

      <StatCard
        label="Submissions"
        value={organizerDashboardData.totalSubmissions}
      />

      <StatCard
        label="Active Hackathons"
        value={organizerDashboardData.activeHackathons}
      />
    </section>
  );
}