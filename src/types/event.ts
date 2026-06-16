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

export interface EventTimelineItem {
  id: string;
  title: string;
  date: string;
}

export interface EventFaq {
  id: string;
  question: string;
  answer: string;
}

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

  // Event Details Page
  requirements?: string[];
  eligibility?: string[];
  rules?: string[];

  timeline?: EventTimelineItem[];

  faqs?: EventFaq[];
}


export interface EventTimelineItem {
  id: string;
  title: string;
  date: string;
}

export interface EventFaq {
  id: string;
  question: string;
  answer: string;
}

export interface EventDetails {
  requirements: string[];
  eligibility: string[];
  rules: string[];
  timeline: EventTimelineItem[];
  faqs: EventFaq[];
}