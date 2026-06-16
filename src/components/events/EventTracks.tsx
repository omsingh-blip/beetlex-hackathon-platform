import type { EventTrack } from "@/types/event";
import  Card  from "@/components/ui/Card";

type EventTracksProps = {
  tracks: EventTrack[];
};

export function EventTracks({
  tracks,
}: EventTracksProps) {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold">
        Tracks
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track) => (
          <Card
            key={track}
            className="p-6 text-center"
          >
            <h3 className="text-lg font-semibold">
              {track}
            </h3>
          </Card>
        ))}
      </div>
    </section>
  );
}