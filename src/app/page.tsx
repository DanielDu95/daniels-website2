// src/app/page.tsx
"use client";

import { Hero } from "@/components/sections/HeroSection";
import { About } from "@/components/sections/AboutSection";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { SkillsPreview } from "@/components/sections/SkillsPreview";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center space-y-6 px-2 py-6">
      <Hero />
      <About />
      <ProjectsPreview />
      <SkillsPreview />
    </main>
  );
}
