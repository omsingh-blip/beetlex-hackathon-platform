import { ProgressCard } from "@/components/ui/ProgressCard";
import { organizerDashboardData } from "@/mocks/data/organizer";

export default function OrganizerProgress() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Platform Progress
      </h2>

      <ProgressCard
        title="Event Completion"
        progress={organizerDashboardData.completion}
      />
    </section>
  );
}