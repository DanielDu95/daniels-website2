import Link from "next/link";
import { Button } from "../ui/button";

export function SkillsPreview() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Prisma",
  ];

  return (
    <section className="max-w-3xl mx-auto space-y-6 text-center">
      <h3 className="text-3xl font-semibold">Skills</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gray-100 rounded-full text-gray-800 font-medium shadow"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <Button asChild variant="outline">
          <Link href="/skills">View Full Skills</Link>
        </Button>
      </div>
    </section>
  );
}
