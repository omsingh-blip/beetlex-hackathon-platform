import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/store/themeStore";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="
      glass
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      transition-all
      hover:scale-105
      "
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}