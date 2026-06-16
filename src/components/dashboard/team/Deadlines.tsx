import { deadlines } from "@/mocks/data/dashboard";

export default function Deadlines() {
  const getColor = (days: number) => {
    if (days <= 3) return "text-red-400";
    if (days <= 7) return "text-yellow-400";
    return "text-green-400";
  };

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Upcoming Deadlines
      </h2>

      <div className="space-y-4">
        {deadlines.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-white/10 bg-black/30 p-4"
          >
            <h3 className="font-medium text-white">
              {item.event}
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              Deadline: {item.deadline}
            </p>

            <p
              className={`mt-2 text-sm font-semibold ${getColor(
                item.daysRemaining
              )}`}
            >
              {item.daysRemaining} Days Remaining
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}