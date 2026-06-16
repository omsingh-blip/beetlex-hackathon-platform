import type { Event } from "@/types/event";

import {EventCard} from "./EventCard";

interface EventGridProps {
  events: Event[];
}

export default function EventGrid({
  events,
}: EventGridProps) {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
        />
      ))}
    </div>
  );
}