import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  variant = "primary",
  className,
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        "rounded-xl px-5 py-3 font-medium transition",
        variant === "primary" &&
          "bg-lime-400 text-black hover:opacity-90",
        variant === "secondary" &&
          "bg-purple-600 text-white",
        className
      )}
      {...props}
    />
  );
}