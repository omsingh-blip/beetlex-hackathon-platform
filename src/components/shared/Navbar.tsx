import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed left-0 right-0 top-4 z-50">
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
    flex items-center justify-center
    h-10 w-10
    rounded-xl
    bg-primary
    shadow-[0_0_25px_rgba(215,255,0,0.5)]
  "
>
  <img
    src="/favicon1.png"
    alt="BeetleX Logo"
    className="h-12 w-12 object-contain"
  />
</div>

          <span className="text-xl font-bold text-text">
            BeetleX
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            to="/"
            className="text-muted transition-colors hover:text-primary"
          >
            Home
          </Link>

          <Link
            to="/events"
            className="text-muted transition-colors hover:text-primary"
          >
            Events
          </Link>

          <Link
            to="/#timeline"
            className="bg-transparent text-muted transition-colors hover:text-primary"
          >
            Timeline
          </Link>

          <Link to="/#prizes"
            className="bg-transparent text-muted transition-colors hover:text-primary">
            Prizes</Link>

          <Link to="/#faq"
            className="bg-transparent text-muted transition-colors hover:text-primary">
            FAQ
          </Link>

        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            to="/events"
            className="hidden lg:block"
          >
            <Button>
              Register Now
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() =>
              setIsMenuOpen(!isMenuOpen)
            }
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
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="
            mx-auto
            mt-3
            max-w-7xl
            rounded-2xl
            border
            border-border
            bg-navbar-bg
            p-4
            backdrop-blur-xl
            lg:hidden
          "
        >
          <div className="flex flex-col gap-4">
            <a
              href="/"
              onClick={() =>
                setIsMenuOpen(false)
              }
              className="text-muted hover:text-primary"
            >
              Home
            </a>

            <Link
              to="/events"
              onClick={() =>
                setIsMenuOpen(false)
              }
              className="text-muted hover:text-primary"
            >
              Events
            </Link>

            <a
              href="/#timeline"
              onClick={() =>
                setIsMenuOpen(false)
              }
              className="text-muted hover:text-primary"
            >
              Timeline
            </a>

            <a
              href="/#prizes"
              onClick={() =>
                setIsMenuOpen(false)
              }
              className="text-muted hover:text-primary"
            >
              Prizes
            </a>

            <a
              href="/#faq"
              onClick={() =>
                setIsMenuOpen(false)
              }
              className="text-muted hover:text-primary"
            >
              FAQ
            </a>

            <Link
              to="/events"
              onClick={() =>
                setIsMenuOpen(false)
              }
            >
              <Button className="w-full">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}