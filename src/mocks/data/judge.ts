import type { JudgeDashboardData } from "@/types/dashboard";

export const judgeDashboardData: JudgeDashboardData = {
  assignedProjects: 24,
  reviewedProjects: 14,
  pendingReviews: 10,
  averageScore: 88,
  completion: 58,

  projects: [
    {
      id: "1",
      project: "Alpha AI",
      team: "Code Ninjas",
      track: "AI",
      status: "Reviewed",
    },
    {
      id: "2",
      project: "ChainFlow",
      team: "Block Masters",
      track: "Web3",
      status: "Pending",
    },
    {
      id: "3",
      project: "EcoTrack",
      team: "Green Devs",
      track: "Sustainability",
      status: "Pending",
    },
  ],

  recentScores: [
    {
      id: "1",
      project: "Alpha AI",
      score: 92,
    },
    {
      id: "2",
      project: "ChainFlow",
      score: 85,
    },
    {
      id: "3",
      project: "EcoTrack",
      score: 88,
    },
  ],
};