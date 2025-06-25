import Image from "next/image";
import Link from "next/link";

export function ProjectsPreview() {
  return (
    <section
      id="projects"
      className="w-[80%] max-w-6xl mx-auto py-20 space-y-20"
    >
      <h3 className="text-4xl font-bold text-left">Featured Projects</h3>

      {/* Project 1: Todo List */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 group">
        <div className="overflow-hidden rounded-xl shadow-xl">
          <Image
            src="/images/todo-list.png"
            alt="Todo List"
            width={600}
            height={400}
            className="rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-3">Todo List</h4>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            A simple and elegant todo list app built with React and Zustand for
            state management. Features task filtering, completion tracking, and
            local persistence.
          </p>
          <Link
            className="text-primary underline font-medium"
            href="https://your-todo-app.vercel.app/"
            target="_blank"
          >
            View Project →
          </Link>
        </div>
      </div>

      {/* Project 2: E-commerce App */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 group">
        <div className="md:order-2 overflow-hidden rounded-xl shadow-xl">
          <Image
            src="/images/ecommerce-app.png"
            alt="E-commerce App"
            width={600}
            height={400}
            className="rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="md:order-1">
          <h4 className="text-2xl font-bold mb-3">E-commerce App</h4>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            A full-stack e-commerce platform with Next.js, Tailwind, Prisma,
            PostgreSQL, and NextAuth. Includes cart, checkout, authentication,
            and admin tools.
          </p>
          <Link
            className="text-primary underline font-medium"
            href="https://your-ecommerce-app.vercel.app/"
            target="_blank"
          >
            View Project →
          </Link>
        </div>
      </div>

      {/* Project 3: Balance Book */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 group">
        <div className="overflow-hidden rounded-xl shadow-xl">
          <Image
            src="/images/balance-book.png"
            alt="Balance Book"
            width={600}
            height={400}
            className="rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-3">Balance Book</h4>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            A personal finance tracker that helps users manage income and
            expenses. Built with React, TypeScript, and Chart.js for insightful
            visualizations and charts.
          </p>
          <Link
            className="text-primary underline font-medium"
            href="https://your-balance-book.vercel.app/"
            target="_blank"
          >
            View Project →
          </Link>
        </div>
      </div>
    </section>
  );
}
