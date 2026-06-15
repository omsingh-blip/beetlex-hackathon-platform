type Status = "upcoming" | "active" | "closed";

export default function Badge({ status }: { status: Status }) {
  const colors = {
    upcoming: "bg-blue-500",
    active: "bg-green-500",
    closed: "bg-red-500",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs text-white ${colors[status]}`}
    >
      {status}
    </span>
  );
}