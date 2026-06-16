import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        "font-medium transition-all duration-300 rounded-xl",

        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-5 py-3",
        size === "lg" && "px-6 py-4 text-base",

        variant === "primary" &&
          "bg-primary text-black hover:opacity-90",

        variant === "secondary" &&
          "bg-secondary text-white hover:opacity-90",

        variant === "ghost" &&
          "bg-transparent text-text hover:bg-white/5",

        variant === "outline" &&
          "border border-border bg-transparent text-text hover:bg-white/5",

        className
      )}
      {...props}
    />
  );
}