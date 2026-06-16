import type { EventStatus } from "@/types/event";

interface StatusConfig {
  label: string;
  className: string;
}

export const statusConfig: Record<EventStatus, StatusConfig> = {
  upcoming: {
    label: "Upcoming",
    className:
      "bg-secondary/20 text-secondary border border-secondary/30",
  },

  registration_open: {
    label: "Open",
    className:
      "bg-primary/20 text-primary border border-primary/30",
  },

  live: {
    label: "Live",
    className:
      "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  },

  judging: {
    label: "Judging",
    className:
      "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  },

  completed: {
    label: "Completed",
    className:
      "bg-white/10 text-muted-foreground border border-white/10",
  },
};