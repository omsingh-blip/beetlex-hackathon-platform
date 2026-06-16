import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  once?: boolean;
  y?: number;
  duration?: number;
}

export default function Reveal({
  children,
  delay = 0,
  once = true,
  y = 40,
  duration = 0.6,
}: RevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}