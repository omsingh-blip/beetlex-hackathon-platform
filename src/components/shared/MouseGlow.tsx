import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    damping: 30,
    stiffness: 200,
  });

  const y = useSpring(mouseY, {
    damping: 30,
    stiffness: 200,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-0
        h-[400px]
        w-[400px]
        rounded-full
        blur-[120px]
      "
    >
      <div
        className="
          h-full
          w-full
          rounded-full
          bg-primary/15
        "
      />
    </motion.div>
  );
}