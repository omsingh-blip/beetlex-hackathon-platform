import { motion } from "framer-motion";

type Props = {
  title: string;
  date: string;
};

export default function Timeline({
  title,
  date,
}: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
      }}
      className="group relative flex flex-col items-center"
    >
      <div
        className="
        h-5
        w-5
        rounded-full
        bg-lime-400
        shadow-[0_0_20px_rgba(215,255,0,0.7)]
      "
      />

      <div
        className="
        mt-6
        rounded-xl
        border
        border-white/10
        bg-white/[0.03]
        p-4
        backdrop-blur-xl
        transition-all
        group-hover:border-lime-400/50
      "
      >
        <p className="text-lime-400">{date}</p>
        <h3>{title}</h3>
      </div>
    </motion.div>
  );
}