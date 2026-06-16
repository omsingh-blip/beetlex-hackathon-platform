const sponsors = [
  "OpenAI",
  "Polygon",
  "GitHub",
  "AWS",
  "Vercel",
  "Google Cloud",
];

export default function Sponsors() {
  return (
    <section className="overflow-hidden py-20">
      <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Trusted By Industry Leaders
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="marquee-track flex w-max">
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={index}
              className="
                mx-8
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                px-8
                py-4
                backdrop-blur-xl
              "
            >
              <span className="text-xl font-semibold text-zinc-400">
                {sponsor}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}