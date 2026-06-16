import { useEffect } from "react";
import { useThemeStore } from "@/store/themeStore";

interface Props {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );
  }, [theme]);

  return <>{children}</>;
}