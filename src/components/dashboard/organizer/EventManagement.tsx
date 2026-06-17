import Badge from "@/components/ui/Badge";
import { DataTable } from "@/components/ui/DataTable";
import { organizerDashboardData } from "@/mocks/data/organizer";

export default function EventManagement() {
  const columns = [
    { key: "event", header: "Event" },
    { key: "registrations", header: "Registrations" },
    { key: "submissions", header: "Submissions" },
    {
      key: "status",
      header: "Status",
      render: (
        row: (typeof organizerDashboardData.events)[number]
      ) => (
        <Badge
          variant={
            row.status === "Active"
              ? "default"
              : row.status === "Completed"
              ? "secondary"
              : "outline"
          }
        >
          {row.status}
        </Badge>
      ),
    },
  ];

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Event Management
      </h2>

      <DataTable
        columns={columns}
        data={organizerDashboardData.events}
      />
    </section>
  );
}