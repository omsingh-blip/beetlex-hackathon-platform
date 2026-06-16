export type EventStatus =
  | "upcoming"
  | "registration_open"
  | "live"
  | "judging"
  | "completed";

export type EventTrack =
  | "AI"
  | "Web3"
  | "FinTech"
  | "HealthTech"
  | "Open Innovation";

export interface Event {
  id: string;
  slug: string;

  title: string;
  tagline: string;
  description: string;

  bannerImage: string;

  startDate: string;
  endDate: string;

  registrationDeadline: string;

  location: string;
  mode: "online" | "offline" | "hybrid";

  status: EventStatus;

  prizePool: number;

  tracks: EventTrack[];

  participantsCount: number;
  teamCount: number;

  organizer: string;
}