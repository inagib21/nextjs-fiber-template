'use client';

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // To handle the 'system' theme properly for the icon and toggle logic,
  // we can resolve the effective theme. However, for a simple toggle,
  // we can just check if the current resolved theme is dark.
  // The useTheme hook provides the resolved theme if system is chosen.
  const [mounted, setMounted] = React.useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder or null to avoid hydration mismatch
    return <Button variant="outline" size="icon" disabled><Sun className="h-[1.2rem] w-[1.2rem]" /></Button>;
  }

  const isCurrentlyDark = theme === "dark";
  // If theme is 'system', it could be light or dark. 
  // For a simple toggle, we can decide the first toggle action.
  // Let's say, if it's 'system' (and not dark), first toggle goes to dark.
  // If it's 'system' (and resolved to dark), first toggle goes to light.

  const toggleTheme = () => {
    // If current theme is dark, switch to light. Otherwise (light or system), switch to dark.
    setTheme(isCurrentlyDark ? "light" : "dark");
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      {isCurrentlyDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
} 