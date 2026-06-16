import Badge from "@/components/ui/Badge";
import { DataTable } from "@/components/ui/DataTable";
import { myEvents } from "@/mocks/data/dashboard";

export default function MyEvents() {
  const columns = [
  {
    key: "event",
    header: "Event",
  },
  {
    key: "track",
    header: "Track",
  },
  {
    key: "status",
    header: "Status",
    render: (row: (typeof myEvents)[number]) => (
      <Badge
        variant={
          row.status === "Completed"
            ? "secondary"
            : row.status === "Active"
            ? "default"
            : "outline"
        }
      >
        {row.status}
      </Badge>
    ),
  },
  {
    key: "deadline",
    header: "Deadline",
  },
];

    return (
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="mb-6 text-xl font-semibold text-white">
                My Events
            </h2>

            <DataTable columns={columns} data={myEvents} />
        </section>
    );
}