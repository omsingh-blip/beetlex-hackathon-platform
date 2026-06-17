import TimelineItem from "./TimelineItem";

const timeline = [
  {
    title: "Registrations Open",
    date: "July 01",
  },
  {
    title: "Team Formation",
    date: "July 15",
  },
  {
    title: "Hackathon Kickoff",
    date: "August 01",
  },
  {
    title: "Project Submission",
    date: "August 20",
  },
  {
    title: "Final Judging",
    date: "August 25",
  },
  {
    title: "Winners Announced",
    date: "August 30",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-lime-400">
            TIMELINE
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Your Journey Starts Here
          </h2>

          <p className="mt-4 text-zinc-400">
            Follow the complete hackathon timeline from
            registration to the final announcement.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Line */}
          <div
            className="
              absolute
              left-0
              right-0
              top-2.5
              hidden
              h-[2px]
              bg-white/10
              lg:block
            "
          />

          {/* Timeline Items */}
          <div
            className="
              grid
              gap-10
              lg:grid-cols-6
            "
          >
            {timeline.map((item) => (
              <TimelineItem
                key={item.title}
                title={item.title}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}