import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-lime-400">
          BeetleX
        </Link>

        <nav className="flex gap-6">
          <Link to="/events">Events</Link>
          <Link to="/dashboard/team">Dashboard</Link>
        </nav>
      </div>
    </header>
  );
}