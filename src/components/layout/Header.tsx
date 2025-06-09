// src/components/Header.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow bg-white dark:bg-gray-900 sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold text-primary-500">
        Daniel Du
      </Link>
      <nav className="flex items-center space-x-4">
        <Link href="/about">
          <Button variant="ghost">About</Button>
        </Link>
        <Link href="/projects">
          <Button variant="ghost">Projects</Button>
        </Link>
        <Link href="/skills">
          <Button variant="ghost">Skills</Button>
        </Link>
        <Link href="/contact">
          <Button variant="ghost">Contact</Button>
        </Link>
      </nav>
    </header>
  );
}
