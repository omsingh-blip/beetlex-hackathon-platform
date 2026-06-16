import { useMemo, useState } from "react";
import EventFilters, {
  type EventModeFilter,
  type EventStatusFilter,
  type EventTrackFilter,
} from "@/components/events/EventFilters";
import EventSearch from "@/components/events/EventSearch";
import { events } from "@/mocks/data/events";
import EventGrid from "@/components/events/EventGrid";

export default function EventListingPage() {
  const [search, setSearch] = useState("");

  const [status, setStatus] =
    useState<EventStatusFilter>("all");

  const [mode, setMode] =
    useState<EventModeFilter>("all");

  const [track, setTrack] =
    useState<EventTrackFilter>("all");

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch =
        event.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        event.tagline
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "all" ||
        event.status === status;

      const matchesMode =
        mode === "all" ||
        event.mode === mode;

      const matchesTrack =
        track === "all" ||
        event.tracks.includes(track);

      return (
        matchesSearch &&
        matchesStatus &&
        matchesMode &&
        matchesTrack
      );
    });
  }, [search, status, mode, track]);

  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-32">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold md:text-5xl">
            Discover Hackathons
          </h1>

          <p className="mt-4 max-w-2xl text-white/60">
            Explore AI, Web3, FinTech, HealthTech,
            and innovation-focused hackathons from
            around the world.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <EventSearch
            value={search}
            onChange={setSearch}
          />
        </div>

        {/* Filters */}
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <EventFilters
            status={status}
            mode={mode}
            track={track}
            onStatusChange={setStatus}
            onModeChange={setMode}
            onTrackChange={setTrack}
          />
        </div>

        {/* Results */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-medium">
            {filteredEvents.length} Events Found
          </h2>
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 py-20 text-center backdrop-blur-xl">
            <h3 className="text-xl font-semibold">
              No events found
            </h3>

            <p className="mt-3 text-white/60">
              Try changing your filters or search
              query.
            </p>
          </div>
        ) : (
         <EventGrid events={filteredEvents} />  
        )}
      </section>
    </main>
  );
}