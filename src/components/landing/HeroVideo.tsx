export default function HeroVideo() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-lime-400/20 blur-[120px]" />

      {/* Rotating Ring */}
      <div className="rotate-slow absolute h-[450px] w-[450px] rounded-full border border-dashed border-purple-500/40" />

      {/* Main Circle */}
      <div className="breathe relative h-[380px] w-[380px] overflow-hidden rounded-full border-4 border-lime-400/40">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/mascot.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}