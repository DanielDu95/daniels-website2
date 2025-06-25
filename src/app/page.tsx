// src/app/page.tsx
"use client";

import { Hero } from "@/components/sections/HeroSection";
import { About } from "@/components/sections/AboutSection";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { SkillsPreview } from "@/components/sections/SkillsPreview";
import { ScrollRevealSection } from "@/components/layout/ScrollRevealSection";
import { Background } from "@/components/layout/Background";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center space-y-6 px-2 py-6">
      <Background />
      <ScrollRevealSection delay={0.5}>
        <Hero />
      </ScrollRevealSection>
      <ScrollRevealSection delay={0.2}>
        <ProjectsPreview />
      </ScrollRevealSection>
      <ScrollRevealSection delay={0.2}>
        <SkillsPreview />
      </ScrollRevealSection>

      <About />
    </main>
  );
}
