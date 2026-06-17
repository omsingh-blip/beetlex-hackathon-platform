import { useState } from "react";
import { Link } from "react-router-dom";

import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import DesktopNav from "./DesktopNav";
import ThemeToggle from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

import useScrolled from "@/hooks/useScrolled";
import Button from "@/components/ui/Button";

export function Navbar() {
  const scrolled = useScrolled(20);

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className={`
          fixed top-0 z-50 w-full
          transition-all duration-300
          ${
            scrolled
              ? "border-b border-navbar-border bg-navbar-bg/80 backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-20
            max-w-7xl
            items-center
            justify-between
            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* Logo */}
          <Link
            to="/"
            className="
              flex items-center gap-3
              transition-transform duration-300
              hover:scale-[1.02]
            "
          >
            <div
              className="
                h-10 w-10
                rounded-xl
                bg-primary
                shadow-[0_0_25px_rgba(215,255,0,0.4)]
              "
            />

            <span
              className="
                text-lg
                font-bold
                tracking-tight
                text-text
              "
            >
              BeetleX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Link
              to="/events"
              className="hidden lg:block"
            >
              <Button
                className="
                  bg-primary
                  text-black
                  shadow-[0_0_25px_rgba(215,255,0,0.25)]
                "
              >
                me
              </Button>
            </Link>

            {/* Mobile Trigger */}
            <button
              onClick={() =>
                setIsMenuOpen(true)
              }
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl border border-border
                bg-surface text-text
                transition-colors
                hover:bg-white/5
                lg:hidden
              "
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() =>
          setIsMenuOpen(false)
        }
      />
    </>
  );
}