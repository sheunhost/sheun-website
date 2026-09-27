import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface ThemeToggleProps {
  isDarkBackground?: boolean;
}

export function ThemeToggle({ isDarkBackground = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "p-2 rounded-full transition-colors duration-200",
        isDarkBackground
          ? "bg-white/10 text-white hover:bg-white/20"
          : "bg-navy/5 dark:bg-white/10 text-navy dark:text-white hover:bg-navy/10 dark:hover:bg-white/20"
      )}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
}
