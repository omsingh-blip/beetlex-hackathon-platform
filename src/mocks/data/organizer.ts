import type { OrganizerDashboardData } from "@/types/dashboard";

export const organizerDashboardData: OrganizerDashboardData = {
  totalEvents: 8,
  totalParticipants: 1260,
  totalSubmissions: 342,
  activeHackathons: 3,
  completion: 76,

  events: [
    {
      id: "1",
      event: "BeetleX Hackathon",
      registrations: 420,
      submissions: 110,
      status: "Active",
    },
    {
      id: "2",
      event: "AI Sprint",
      registrations: 280,
      submissions: 95,
      status: "Active",
    },
    {
      id: "3",
      event: "Web3 Challenge",
      registrations: 190,
      submissions: 67,
      status: "Completed",
    },
  ],

  activities: [
    {
      id: "1",
      message: "24 new registrations received",
      time: "10 mins ago",
    },
    {
      id: "2",
      message: "12 project submissions uploaded",
      time: "30 mins ago",
    },
    {
      id: "3",
      message: "Judge scores updated",
      time: "1 hour ago",
    },
  ],
};