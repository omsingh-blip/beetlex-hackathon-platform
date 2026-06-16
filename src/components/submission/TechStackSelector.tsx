import { useState } from "react";
import Badge from "@/components/ui/Badge";

const stacks = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "FastAPI",
  "Solidity",
  "AI/ML",
];

export default function TechStackSelector() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleStack = (stack: string) => {
    setSelected((prev) =>
      prev.includes(stack)
        ? prev.filter((s) => s !== stack)
        : [...prev, stack]
    );
  };

  return (
    <div>
      <h3 className="mb-3 text-sm font-medium">
        Tech Stack
      </h3>

      <div className="flex flex-wrap gap-2">
        {stacks.map((stack) => (
          <button
            key={stack}
            type="button"
            onClick={() => toggleStack(stack)}
          >
            <Badge
              variant={
                selected.includes(stack)
                  ? "default"
                  : "outline"
              }
            >
              {stack}
            </Badge>
          </button>
        ))}
      </div>
    </div>
  );
}