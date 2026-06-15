export default function Sponsors() {
  const sponsors = [
    "OpenAI",
    "Polygon",
    "AWS",
    "GitHub",
    "Vercel",
    "Google Cloud",
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-sm uppercase tracking-widest text-zinc-500">
          Trusted By Industry Leaders
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor}
              className="flex h-20 items-center justify-center rounded-xl border border-white/10 bg-zinc-900"
            >
              <span className="font-semibold text-zinc-400">
                {sponsor}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}