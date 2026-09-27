"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  size?: "sm" | "md";
}

export function ThemeToggle({ className, size = "md" }: ThemeToggleProps) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Chuyển sang Light mode" : "Chuyển sang Dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={cn(
        "relative flex items-center rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50",
        size === "md"
          ? "w-[52px] h-7 px-0.5 border-[var(--color-border)]"
          : "w-[40px] h-[22px] px-0.5 border-[var(--color-border)]",
        isDark
          ? "bg-charcoal-4 border-charcoal-5"
          : "bg-[#e8e0d0] border-[#c8bfaa]",
        className
      )}
    >
      {/* Track icons */}
      <span className={cn(
        "absolute flex items-center justify-center transition-opacity duration-200",
        size === "md" ? "left-1.5 w-4 h-4" : "left-1 w-3 h-3",
        isDark ? "opacity-50" : "opacity-100"
      )}>
        <Sun className={cn("text-[#b89a5e]", size === "md" ? "w-3 h-3" : "w-2.5 h-2.5")} />
      </span>
      <span className={cn(
        "absolute flex items-center justify-center transition-opacity duration-200",
        size === "md" ? "right-1.5 w-4 h-4" : "right-1 w-3 h-3",
        isDark ? "opacity-100" : "opacity-50"
      )}>
        <Moon className={cn("text-ivory-dim", size === "md" ? "w-3 h-3" : "w-2.5 h-2.5")} />
      </span>

      {/* Thumb */}
      <span
        className={cn(
          "rounded-full shadow-sm transition-all duration-300 ease-in-out flex-shrink-0",
          size === "md" ? "w-6 h-6" : "w-[18px] h-[18px]",
          isDark
            ? "bg-charcoal-2 border border-charcoal-5 translate-x-[calc(100%+1px)]"
            : "bg-white border border-[#c8bfaa] translate-x-0"
        )}
      />
    </button>
  );
}
