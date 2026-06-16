export default function HeroBackground() {
  return (
    <div
      className="
      absolute
      inset-0
      -z-10
      opacity-20
      "
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
    />
  );
}