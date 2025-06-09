// src/components/Footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-12 py-6 border-t text-center text-sm text-gray-500 dark:text-gray-400">
      <p>© {new Date().getFullYear()} Daniel Du. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <Link
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        <Link
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
}
