import { NAV_LINKS } from "./nav-links";

export default function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {NAV_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="
            text-sm
            font-medium
            text-muted
            transition-colors
            hover:text-primary
          "
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}