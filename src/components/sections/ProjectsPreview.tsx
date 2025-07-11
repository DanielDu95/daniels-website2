import Image from "next/image";
import Link from "next/link";

export function ProjectsPreview() {
  return (
    <section
      id="projects"
      className="w-[80%] max-w-6xl mx-auto py-20 space-y-20"
    >
      <h3 className="text-4xl font-bold text-left">Featured Projects</h3>

      {/* Project 1: My Todo App */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 group">
        <div className="overflow-hidden rounded-xl shadow-xl">
          <Image
            src="/images/task-master-1.png"
            alt="Task Master"
            width={600}
            height={400}
            className="rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-3">Task Master</h4>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            A full-stack task management app that allows users to register, log
            in, and manage personal to-dos. Built with a modern Vite + React
            frontend and a secure Express + MongoDB backend. Includes form
            validation, JWT-based auth, protected routes, and testing with Jest
            and Supertest.
          </p>
          <span className="text-muted italic">Deployment in progress</span>
        </div>
      </div>

      {/* Project 2: E-commerce App */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 group">
        <div className="md:order-2 overflow-hidden rounded-xl shadow-xl">
          <Image
            src="/images/ecommerce-app-1.png"
            alt="E-commerce App"
            width={600}
            height={400}
            className="rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="md:order-1">
          <h4 className="text-2xl font-bold mb-3">E-commerce App</h4>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            A full-stack e-commerce platform built with Next.js and Prisma.
            Features include product listing, filtering, NextAuth
            authentication, and admin tools. Backend uses PostgreSQL and
            supports optimized queries with Accelerate. State is managed with
            Zustand.
          </p>
          <Link
            className="text-primary underline font-medium"
            href="https://daniels-ecommerce-app.vercel.app"
            target="_blank"
          >
            View Project →
          </Link>
        </div>
      </div>

      {/* Project 3: Balance Book with centered cropped images */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 group">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-hidden rounded-xl shadow-xl">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/images/balance-book-1.png"
              alt="Balance Book Screenshot 1"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/images/balance-book-2.png"
              alt="Balance Book Screenshot 2"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-3">Balance Book</h4>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            A personal finance tracker that helps users manage income and
            expenses. Built with React, Supabase, and Recharts. Includes
            animated UI, form validation, real-time syncing, and modular
            architecture. Visualize financial trends effortlessly.
          </p>
          <Link
            className="text-primary underline font-medium"
            href="https://balance-book-rouge.vercel.app"
            target="_blank"
          >
            View Project →
          </Link>
        </div>
      </div>
    </section>
  );
}
