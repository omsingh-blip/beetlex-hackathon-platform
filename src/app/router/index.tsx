import { createBrowserRouter } from "react-router-dom";

import LandingPage from "@/pages/Landing";
import EventListingPage from "@/pages/Events";
import EventDetailsPage from "@/pages/EventDetails";
import RegistrationPage from "@/pages/Registration";
import TeamDashboard from "@/pages/TeamDashboard";
import SubmissionPage from "@/pages/Submission";
import JudgeDashboard from "@/pages/JudgeDashboard";
import OrganizerDashboard from "@/pages/OrganizerDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/events",
    element: <EventListingPage />,
  },
  {
    path: "/events/:id",
    element: <EventDetailsPage />,
  },
  {
    path: "/register/:id",
    element: <RegistrationPage />,
  },
  {
    path: "/dashboard/team",
    element: <TeamDashboard />,
  },
  {
    path: "/submission",
    element: <SubmissionPage />,
  },
  {
    path: "/dashboard/judge",
    element: <JudgeDashboard />,
  },
  {
    path: "/dashboard/organizer",
    element: <OrganizerDashboard />,
  },
]);