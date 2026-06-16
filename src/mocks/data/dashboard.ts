import type {
  TeamStats,
  EventRow,
  TeamMember,
  Deadline,
  SubmissionStatus,
} from "@/types/dashboard";

export const teamStats: TeamStats = {
  eventsJoined: 4,
  teamMembers: 5,
  projectsSubmitted: 2,
  pendingDeadlines: 3,
};

export const myEvents: EventRow[] = [
  {
    id: "1",
    event: "HackAI Summit 2026",
    track: "AI & ML",
    status: "Active",
    deadline: "20 Jun 2026",
  },
  {
    id: "2",
    event: "Web3 Builders",
    track: "Blockchain",
    status: "Open",
    deadline: "25 Jun 2026",
  },
  {
    id: "3",
    event: "FinTech Sprint",
    track: "FinTech",
    status: "Completed",
    deadline: "30 May 2026",
  },
  {
    id: "4",
    event: "GreenTech Challenge",
    track: "Sustainability",
    status: "Active",
    deadline: "28 Jun 2026",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "OM Singh",
    role: "Frontend Lead",
    skills: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: "2",
    name: "Ananya Sharma",
    role: "UI/UX Designer",
    skills: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    id: "3",
    name: "Rahul Verma",
    role: "Backend Developer",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: "4",
    name: "Priya Patel",
    role: "AI Engineer",
    skills: ["Python", "FastAPI", "LLMs"],
  },
  {
    id: "5",
    name: "Arjun Mehta",
    role: "Product Manager",
    skills: ["Agile", "Research", "Strategy"],
  },
];

export const deadlines: Deadline[] = [
  {
    id: "1",
    event: "HackAI Summit 2026",
    deadline: "20 Jun 2026",
    daysRemaining: 3,
  },
  {
    id: "2",
    event: "Web3 Builders",
    deadline: "25 Jun 2026",
    daysRemaining: 8,
  },
  {
    id: "3",
    event: "GreenTech Challenge",
    deadline: "28 Jun 2026",
    daysRemaining: 11,
  },
];

export const submissionStatus: SubmissionStatus[] = [
  {
    id: "1",
    title: "Registration Complete",
    progress: 100,
  },
  {
    id: "2",
    title: "Project Submitted",
    progress: 80,
  },
  {
    id: "3",
    title: "Judging Progress",
    progress: 45,
  },
];