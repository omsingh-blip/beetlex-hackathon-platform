import { DashboardShell } from "@/components/ui/DashboardShell";

import OrganizerStats from "@/components/dashboard/organizer/OrganizerStats";
import OrganizerProgress from "@/components/dashboard/organizer/OrganizerProgress";
import EventManagement from "@/components/dashboard/organizer/EventManagement";
import RegistrationOverview from "@/components/dashboard/organizer/RegistrationOverview";
import SubmissionOverview from "@/components/dashboard/organizer/SubmissionOverview";
import RecentActivity from "@/components/dashboard/organizer/RecentActivity";

export default function OrganizerDashboardPage() {
  return (
    <DashboardShell
      title="Organizer Dashboard"
      description="Manage events, registrations, submissions and platform activity."
    >
      <OrganizerStats />

      <OrganizerProgress />

      <EventManagement />

      <div className="grid gap-6 lg:grid-cols-2">
        <RegistrationOverview />
        <SubmissionOverview />
      </div>

      <RecentActivity />
    </DashboardShell>
  );
}