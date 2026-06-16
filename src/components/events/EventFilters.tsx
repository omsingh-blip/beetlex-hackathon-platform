import Button from "@/components/ui/Button";

export type EventStatusFilter =
  | "all"
  | "registration_open"
  | "upcoming"
  | "live"
  | "judging"
  | "completed";

export type EventModeFilter =
  | "all"
  | "online"
  | "offline"
  | "hybrid";

export type EventTrackFilter =
  | "all"
  | "AI"
  | "Web3"
  | "FinTech"
  | "HealthTech"
  | "Open Innovation";

interface EventFiltersProps {
  status: EventStatusFilter;
  mode: EventModeFilter;
  track: EventTrackFilter;

  onStatusChange: (value: EventStatusFilter) => void;
  onModeChange: (value: EventModeFilter) => void;
  onTrackChange: (value: EventTrackFilter) => void;
}

const statusOptions: EventStatusFilter[] = [
  "all",
  "registration_open",
  "upcoming",
  "live",
  "judging",
  "completed",
];

const modeOptions: EventModeFilter[] = [
  "all",
  "online",
  "offline",
  "hybrid",
];

const trackOptions: EventTrackFilter[] = [
  "all",
  "AI",
  "Web3",
  "FinTech",
  "HealthTech",
  "Open Innovation",
];

function formatLabel(value: string) {
  return value
    .replaceAll("_", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function EventFilters({
  status,
  mode,
  track,
  onStatusChange,
  onModeChange,
  onTrackChange,
}: EventFiltersProps) {
  return (
    <div className="space-y-6">
      {/* Status */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-white/70">
          Status
        </h3>

        <div className="flex flex-wrap gap-2">
          {statusOptions.map((option) => (
            <Button
              key={option}
              variant={
                status === option ? "primary" : "outline"
              }
              className="px-4 py-2 text-sm"
              onClick={() => onStatusChange(option)}
            >
              {formatLabel(option)}
            </Button>
          ))}
        </div>
      </div>

      {/* Mode */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-white/70">
          Mode
        </h3>

        <div className="flex flex-wrap gap-2">
          {modeOptions.map((option) => (
            <Button
              key={option}
              variant={
                mode === option ? "primary" : "outline"
              }
              className="px-4 py-2 text-sm"
              onClick={() => onModeChange(option)}
            >
              {formatLabel(option)}
            </Button>
          ))}
        </div>
      </div>

      {/* Track */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-white/70">
          Track
        </h3>

        <div className="flex flex-wrap gap-2">
          {trackOptions.map((option) => (
            <Button
              key={option}
              variant={
                track === option ? "primary" : "outline"
              }
              className="px-4 py-2 text-sm"
              onClick={() => onTrackChange(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}