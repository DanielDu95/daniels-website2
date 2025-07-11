"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
export function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow bg-white dark:bg-gray-900 sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        {/* Avatar */}
        <Link href="#hero">
          <Image
            src="/images/hero.jpg"
            alt="Daniel Du"
            width={40}
            height={40}
            className="rounded-full border-2 border-primary-500 object-cover"
          />
        </Link>

        {/* Name + Social Icons */}
        <div className="flex items-center space-x-6">
          <Link href="#hero" className="text-xl font-bold text-primary-500">
            Daniel Du
          </Link>
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <Link
              href="https://github.com/danieldu1131"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <SiGithub className="w-6 h-6 hover:text-primary-500 transition-colors" />
            </Link>
            <Link href="mailto:danieldu1131@gmail.com" aria-label="Email">
              <Mail className="w-6 h-6 hover:text-primary-500 transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/du-daniel-b6219a30b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="w-6 h-6 hover:text-primary-500 transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex items-center space-x-4 text-lg">
        <Link href="/#about">
          <Button variant="ghost" className="px-6 py-3 text-lg">
            About
          </Button>
        </Link>
        <Link href="/#projects">
          <Button variant="ghost" className="px-6 py-3 text-lg">
            Projects
          </Button>
        </Link>
        <Link href="/#skills">
          <Button variant="ghost" className="px-6 py-3 text-lg">
            Skills
          </Button>
        </Link>
        <Link href="/photos">
          <Button variant="ghost" className="px-6 py-3 text-lg">
            Photos
          </Button>
        </Link>
      </nav>
    </header>
  );
}
