import  Button  from "@/components/ui/Button";
import type { Event } from "@/types/event";

type EventHeroProps = {
  event: Event;
};

export function EventHero({ event }: EventHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10">
      <img
        src={event.bannerImage}
        alt={event.title}
        className="h-[400px] w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />

      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
        <p className="text-primary font-medium">
          {event.organizer}
        </p>

        <h1 className="mt-2 text-4xl font-bold md:text-6xl">
          {event.title}
        </h1>

        <p className="mt-4 max-w-3xl text-muted-foreground">
          {event.tagline}
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span>Prize Pool: ${event.prizePool.toLocaleString()}</span>
          <span>{event.participantsCount} Participants</span>
          <span>{event.teamCount} Teams</span>
        </div>

        <Button className="mt-6">
          Register Now
        </Button>
      </div>
    </section>
  );
}