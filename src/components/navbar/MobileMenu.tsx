import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { NAV_LINKS } from "./nav-links";
import ThemeToggle  from "./ThemeToggle";

import  Button  from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  const handleNavigate = (href: string) => {
    const sectionId = href.replace("#", "");

    document
      .getElementById(sectionId)
      ?.scrollIntoView({
        behavior: "smooth",
      });

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
            }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.aside
            className="
              fixed
              right-0
              top-0
              z-[60]
              flex
              h-screen
              w-[85%]
              max-w-sm
              flex-col
              border-l
              border-border
              bg-surface
              px-6
              py-6
              lg:hidden
            "
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {/* Header */}
            <div className="mb-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="
                    h-10
                    w-10
                    rounded-xl
                    bg-primary
                    shadow-[0_0_25px_rgba(215,255,0,0.35)]
                  "
                />

                <span className="text-lg font-bold text-text">
                  BeetleX
                </span>
              </div>

              <button
                onClick={onClose}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-border
                  bg-background
                  text-text
                "
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link, index) => (
                <motion.button
                  key={link.label}
                  onClick={() =>
                    handleNavigate(link.href)
                  }
                  className="
                    flex
                    items-center
                    rounded-xl
                    px-4
                    py-3
                    text-left
                    text-lg
                    font-medium
                    text-text
                    transition-colors
                    hover:bg-white/5
                    hover:text-primary
                  "
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            {/* Bottom Actions */}
            <div className="mt-auto space-y-4">
              <div className="flex items-center justify-between rounded-xl border border-border p-3">
                <span className="text-sm text-muted">
                  Theme
                </span>

                <ThemeToggle />
              </div>

              <Button
                variant="ghost"
                className="w-full"
              >
                Login
              </Button>

              <Button
                className="
                  w-full
                  bg-primary
                  text-black
                  hover:bg-primary-dark
                "
              >
                Register
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}