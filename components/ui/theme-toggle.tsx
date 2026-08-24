"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      if (e.key === "d" || e.key === "D") {
        setTheme(isDark ? "light" : "dark");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDark, setTheme]);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled aria-label="Toggle theme">
        <Sun
          className="h-[1.15rem] w-[1.15rem] opacity-50"
          aria-hidden="true"
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            <Sun
              className={`h-[1.15rem] w-[1.15rem] transition-all duration-300 ease-in-out ${
                isDark
                  ? "rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
              aria-hidden="true"
            />
            <Moon
              className={`absolute h-[1.15rem] w-[1.15rem] transition-all duration-300 ease-in-out ${
                isDark
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-0 opacity-0"
              }`}
              aria-hidden="true"
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        }
      />
      <TooltipContent side="bottom" align="center">
        <p className="flex items-center gap-1.5 text-xs">
          Toggle theme{" "}
          <span className="py-0.5 px-1.5 rounded bg-muted-foreground/50 pointer-events-none select-none">
            D
          </span>
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
