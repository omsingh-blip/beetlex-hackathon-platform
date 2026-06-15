const timeline = [
  {
    title: "Registration Opens",
    date: "June 1",
  },
  {
    title: "Team Formation",
    date: "July 1",
  },
  {
    title: "Submission Deadline",
    date: "July 15",
  },
  {
    title: "Judging",
    date: "July 17",
  },
  {
    title: "Results",
    date: "July 18",
  },
];

export default function Timeline() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Event Timeline
        </h2>

        <div className="grid gap-6 md:grid-cols-5">
          {timeline.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-zinc-900 p-6"
            >
              <p className="text-lime-400">{item.date}</p>
              <h3 className="mt-2 font-semibold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}