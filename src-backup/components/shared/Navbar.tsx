import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          rounded-2xl
          border
          border-border
          bg-navbar-bg
          px-6
          py-4
          backdrop-blur-xl
        "
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div
            className="
              h-10
              w-10
              rounded-xl
              bg-primary
              shadow-[0_0_25px_rgba(215,255,0,0.4)]
            "
          />

          <span className="text-xl font-bold text-text">
            BeetleX
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            to="/events"
            className="
              text-muted
              transition-colors
              hover:text-primary
            "
          >
            Events
          </Link>

          <Link
            to="/leaderboard"
            className="
              text-muted
              transition-colors
              hover:text-primary
            "
          >
            Leaderboard
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Add ThemeToggle here later */}

          <Button
            variant="ghost"
            className="hidden lg:flex"
          >
            Login
          </Button>

          <Button className="hidden lg:flex">
            Register
          </Button>

          <button
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-border
              lg:hidden
            "
            onClick={() =>
              setIsMenuOpen(!isMenuOpen)
            }
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}