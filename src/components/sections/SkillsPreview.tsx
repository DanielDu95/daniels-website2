"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiPrisma,
} from "react-icons/si";
import * as Tooltip from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";

const skills = [
  { name: "React", progress: 90, icon: SiReact },
  { name: "Next.js", progress: 85, icon: SiNextdotjs },
  { name: "TypeScript", progress: 88, icon: SiTypescript },
  { name: "Node.js", progress: 80, icon: SiNodedotjs },
  { name: "PostgreSQL", progress: 75, icon: SiPostgresql },
  { name: "Tailwind CSS", progress: 92, icon: SiTailwindcss },
  { name: "Prisma", progress: 70, icon: SiPrisma },
];

function getLevel(percent: number) {
  if (percent >= 90) return "Expert";
  if (percent >= 75) return "Advanced";
  if (percent >= 60) return "Intermediate";
  return "Beginner";
}

export function SkillsPreview() {
  return (
    <section id="skills" className="w-full px-6 py-16">
      <h3 className="text-4xl font-bold mb-12 text-center">Skills</h3>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <Tooltip.Provider delayDuration={200}>
          {skills.map(({ name, progress, icon: Icon }, i) => (
            <Tooltip.Root key={name}>
              <Tooltip.Trigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-2xl shadow p-6 flex flex-col justify-between items-center transition hover:scale-105"
                >
                  <div className="flex flex-col items-center gap-2">
                    <Icon className="text-4xl text-primary-500" />
                    <div className="text-lg font-semibold text-primary-500">
                      {name}
                    </div>
                  </div>
                  <div className="w-full mt-4">
                    <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-700"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <p className="text-sm text-center mt-2 text-gray-600 dark:text-gray-300">
                      {progress}% – {getLevel(progress)}
                    </p>
                  </div>
                </motion.div>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="px-3 py-2 bg-black text-white text-xs rounded shadow max-w-[220px]"
                  sideOffset={5}
                >
                  {`Proficient with ${name} – used in ${
                    name === "React"
                      ? "Balance Book, Task Master"
                      : name === "Next.js"
                      ? "Ecommerce App"
                      : "multiple components"
                  }.`}
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          ))}
        </Tooltip.Provider>
      </div>
    </section>
  );
}
