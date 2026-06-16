export interface TeamStats {
  eventsJoined: number;
  teamMembers: number;
  projectsSubmitted: number;
  pendingDeadlines: number;
}

export interface EventRow {
  id: string;
  event: string;
  track: string;
  status: "Open" | "Active" | "Completed";
  deadline: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  skills: string[];
}

export interface Deadline {
  id: string;
  event: string;
  deadline: string;
  daysRemaining: number;
}

export interface SubmissionStatus {
  id: string;
  title: string;
  progress: number;
}