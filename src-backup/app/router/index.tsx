import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import LandingPage from "@/pages/Landing";

import EventListingPage from "@/pages/events/EventListingPage";

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
    ],
  },
]);