import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import LandingPage from "@/pages/Landing";

import EventListingPage from "@/pages/events/EventListingPage";
import EventDetailsPage from "@/pages/events/EventDetailsPage";
import RegistrationPage from "@/pages/register/RegistrationPage";
import TeamDashboardPage from "@/pages/dashboard/TeamDashboardPage";
import ProjectSubmissionPage from "@/pages/submission/ProjectSubmissionPage";
import JudgeDashboardPage from "@/pages/dashboard/JudgeDashboardPage";
import OrganizerDashboardPage from "@/pages/dashboard/OrganizerDashboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "events",
        element: <EventListingPage />,
      },
      {
        path: "events/:slug",
        element: <EventDetailsPage />,
      },
      {
        path: "register/:eventId",
        element: <RegistrationPage />,
      },
      {
        path: "/dashboard/team",
        element: <TeamDashboardPage />,
      },

      {
        path: "submit/:eventId",
        element: <ProjectSubmissionPage />,
      },

      {
        path: "/dashboard/judge",
        element: <JudgeDashboardPage />,
      },
      {
  path: "/dashboard/organizer",
  element: <OrganizerDashboardPage />,
}
    ],
  },
]);