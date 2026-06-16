import FloatingCard from "./FloatingCard";

export default function HeroVideo() {
  return (
    <div className="relative flex items-center justify-center py-20">
      {/* Background Glows */}
      <div className="absolute h-[600px] w-[600px] rounded-full bg-lime-400/15 blur-[150px]" />

      <div className="absolute h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[120px]" />

      {/* Orbit Ring */}
      <div
        className="
          rotate-slow
          absolute
          h-[500px]
          w-[500px]
          rounded-full
          border
          border-dashed
          border-purple-500/30
        "
      />

      {/* Floating Cards */}

      <div className="absolute left-0 top-10">
        <FloatingCard
          icon="🏆"
          label="$100K Prize Pool"
        />
      </div>

      <div className="absolute right-0 top-20">
        <FloatingCard
          icon="🤖"
          label="AI Track"
        />
      </div>

      <div className="absolute bottom-10 left-10">
        <FloatingCard
          icon="👥"
          label="2000+ Builders"
        />
      </div>

      <div className="absolute bottom-16 right-10">
        <FloatingCard
          icon="⚡"
          label="Live Leaderboard"
        />
      </div>

      {/* Outer Ring Glow */}
      <div
        className="
          absolute
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-lime-400/20
        "
      />

      {/* Video Container */}
      <div
        className="
          breathe
          relative
          z-10
          h-[380px]
          w-[380px]
          overflow-hidden
          rounded-full
          border-4
          border-lime-400/40
          shadow-[0_0_60px_rgba(215,255,0,0.25)]
        "
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src="/videos/mascot.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}