import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiPrisma,
} from "react-icons/si";

export function SkillsPreview() {
  const skills = [
    { name: "React", progress: 90, icon: SiReact },
    { name: "Next.js", progress: 85, icon: SiNextdotjs },
    { name: "TypeScript", progress: 88, icon: SiTypescript },
    { name: "Node.js", progress: 80, icon: SiNodedotjs },
    { name: "PostgreSQL", progress: 75, icon: SiPostgresql },
    { name: "Tailwind CSS", progress: 92, icon: SiTailwindcss },
    { name: "Prisma", progress: 70, icon: SiPrisma },
  ];

  return (
    <section id="skills" className="w-full px-6 py-16">
      <h3 className="text-4xl font-bold mb-10 text-center">Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {skills.map(({ name, progress, icon: Icon }) => (
          <div
            key={name}
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
                {progress}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
