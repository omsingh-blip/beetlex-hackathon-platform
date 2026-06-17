import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "@/components/ui/Button";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl"
      >
        <h1 className="text-7xl font-bold text-primary md:text-8xl">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-muted-foreground">
          The page you're looking for doesn't exist or may have
          been moved.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/">
            <Button>
              Return Home
            </Button>
          </Link>

          <Link to="/events">
            <Button variant="outline">
              Browse Events
            </Button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}