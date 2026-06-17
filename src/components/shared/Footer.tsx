import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="
        mt-24
        border-t
        border-border
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
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
            </div>

            <p className="mt-4 text-sm text-muted">
              A next-generation hackathon platform built
              for developers, innovators and builders.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="mb-4 font-semibold text-text">
              Platform
            </h3>

            <div className="flex flex-col gap-3 text-sm">
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
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 font-semibold text-text">
              Explore
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <a
                href="/#timeline"
                className="text-muted transition-colors hover:text-primary"
              >
                Timeline
              </a>

              <a
                href="/#prizes"
                className="text-muted transition-colors hover:text-primary"
              >
                Prizes
              </a>

              <a
                href="/#faq"
                className="text-muted transition-colors hover:text-primary"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Demo Dashboards */}
          <div>
            <h3 className="mb-4 font-semibold text-text">
              Demo Dashboards
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link
                to="/dashboard/team"
                className="text-muted transition-colors hover:text-primary"
              >
                Team Dashboard
              </Link>

              <Link
                to="/dashboard/judge"
                className="text-muted transition-colors hover:text-primary"
              >
                Judge Dashboard
              </Link>

              <Link
                to="/dashboard/organizer"
                className="text-muted transition-colors hover:text-primary"
              >
                Organizer Dashboard
              </Link>
            </div>
          </div>
        </div>

        <div
          className="
            mt-12
            border-t
            border-border
            pt-6
            text-center
            text-sm
            text-muted
          "
        >
          © 2026 BeetleX Hackathon Platform. Built with
          React, TypeScript & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}