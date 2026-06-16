
type Props = {
  value: number;
  suffix?: string;
  label: string;
};

export default function StatsCard({
  value,
  suffix = "",
  label,
}: Props) {
  return (
    <div
      className="
      rounded-2xl
      border
      border-white/10
      bg-white/[0.03]
      p-4
      backdrop-blur-xl
    "
    >
      <h3 className="text-3xl font-bold text-lime-400">
        {value}
        {suffix}
      </h3>

      <p className="mt-2 text-sm text-zinc-400">
        {label}
      </p>
    </div>
  );
}