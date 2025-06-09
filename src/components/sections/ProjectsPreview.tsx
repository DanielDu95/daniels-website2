import Link from "next/link";
import { Button } from "../ui/button";

export function ProjectsPreview() {
  // You could map this from a data array later
  return (
    <section className="max-w-5xl mx-auto space-y-6">
      <h3 className="text-3xl font-semibold text-center">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
          <h4 className="text-xl font-bold">The Wild Oasis</h4>
          <p className="text-gray-600 mb-2">
            A hotel booking dashboard built with React, React Query, and
            Supabase.
          </p>
          <Link
            className="text-primary-500 underline"
            href="https://the-wild-oasis-ochre-omega.vercel.app/"
            target="_blank"
          >
            View Project
          </Link>
        </div>
        {/* Add more ProjectCards here */}
      </div>
      <div className="text-center mt-4">
        <Button asChild>
          <Link href="/#hero">hero</Link>
        </Button>
      </div>
    </section>
  );
}
