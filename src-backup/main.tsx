import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import { router } from "./app/router";
import { ThemeProvider } from "./components/shared/ThemeProvider";

// Temporary default theme
document.documentElement.classList.add("dark");

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);