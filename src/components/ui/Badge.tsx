import type { HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

type BadgeVariant =
  | "default"
  | "secondary"
  | "outline";

interface BadgeProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

const variants = {
  default:
    "bg-primary/15 text-primary border border-primary/20",

  secondary:
    "bg-secondary/15 text-secondary border border-secondary/20",

  outline:
    "border border-border bg-transparent text-foreground",
};

export default function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}