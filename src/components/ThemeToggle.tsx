"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  return (
    <Button variant="outline" size="icon">
      <Moon className="h-4 w-4" />
    </Button>
  );
}
