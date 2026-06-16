import { motion } from "framer-motion";

type Props = {
  icon: string;
  label: string;
};

export default function FloatingCard({
  icon,
  label,
}: Props) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
      className="
      rounded-xl
      border
      border-white/10
      bg-white/[0.05]
      px-4
      py-3
      backdrop-blur-xl
      "
    >
      <div className="text-xl">{icon}</div>
      <div className="text-sm">{label}</div>
    </motion.div>
  );
}