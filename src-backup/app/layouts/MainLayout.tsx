import MouseGlow from "@/components/shared/MouseGlow";
import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-text">
      <MouseGlow />

      <Navbar />

      <Outlet />
    </div>
  );
}