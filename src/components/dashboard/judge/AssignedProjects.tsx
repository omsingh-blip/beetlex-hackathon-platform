import Badge from "@/components/ui/Badge";
import { DataTable } from "@/components/ui/DataTable";

import { judgeDashboardData } from "@/mocks/data/judge";

export default function AssignedProjects() {
  const columns = [
    {
      key: "project",
      header: "Project",
    },
    {
      key: "team",
      header: "Team",
    },
    {
      key: "track",
      header: "Track",
    },
    {
      key: "status",
      header: "Status",
      render: (
        row: (typeof judgeDashboardData.projects)[number]
      ) => (
        <Badge
          variant={
            row.status === "Reviewed"
              ? "default"
              : "secondary"
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
        Assigned Projects
      </h2>

      <DataTable
        columns={columns}
        data={judgeDashboardData.projects}
      />
    </section>
  );
}