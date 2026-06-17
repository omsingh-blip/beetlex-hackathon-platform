import MouseGlow from "@/components/shared/MouseGlow";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ScrollToHash from "@/components/shared/ScrollToHash";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-text">
      <MouseGlow />
<>
  <ScrollToHash />

  <Navbar />

  <main>
    <Outlet />
  </main>

  <Footer />
</>
      <Footer />
    </div>
  );
}