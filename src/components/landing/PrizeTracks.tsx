const tracks = [
  {
    title: "AI & Machine Learning",
    prize: "$25,000",
    description:
      "Build intelligent systems and AI-powered products.",
  },
  {
    title: "Web3 & Blockchain",
    prize: "$25,000",
    description:
      "Create decentralized applications and blockchain solutions.",
  },
  {
    title: "Cloud & DevTools",
    prize: "$20,000",
    description:
      "Improve developer productivity and cloud infrastructure.",
  },
  {
    title: "Open Innovation",
    prize: "$30,000",
    description:
      "Solve real-world problems using any technology stack.",
  },
];

export default function PrizeTracks() {
  return (
    <section id="prizes" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="text-lime-400">
            PRIZES & TRACKS
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Compete. Build. Win.
          </h2>

          <p className="mt-4 text-zinc-400">
            Over $100,000 in prizes across multiple categories.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {tracks.map((track) => (
            <div
              key={track.title}
              className="group rounded-2xl border border-white/10 bg-zinc-900 p-8 transition hover:border-lime-400/40"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  {track.title}
                </h3>

                <span className="text-lime-400 font-bold">
                  {track.prize}
                </span>
              </div>

              <p className="mt-4 text-zinc-400">
                {track.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}