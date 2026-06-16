import type { EventTimelineItem } from "@/types/event";

type EventTimelineProps = {
  timeline: EventTimelineItem[];
};

export function EventTimeline({
  timeline,
}: EventTimelineProps) {
  return (
    <section>
      <h2 className="mb-8 text-3xl font-bold">
        Timeline
      </h2>

      <div className="space-y-6">
        {timeline.map((item) => (
          <div
            key={item.id}
            className="flex gap-4"
          >
            <div className="mt-2 h-3 w-3 rounded-full bg-primary" />

            <div>
              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}