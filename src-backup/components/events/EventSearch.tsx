import { Search } from "lucide-react";

interface EventSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function EventSearch({
  value,
  onChange,
}: EventSearchProps) {
  return (
    <div className="relative">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search hackathons..."
        className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-white/5
          py-3
          pl-11
          pr-4
          text-sm
          text-white
          backdrop-blur-xl
          outline-none
          transition-all
          duration-300
          placeholder:text-white/40
          focus:border-primary/50
          focus:shadow-[0_0_20px_rgba(215,255,0,0.12)]
        "
      />
    </div>
  );
}