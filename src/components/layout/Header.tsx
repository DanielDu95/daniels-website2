import Link from "next/link";
import { Button } from "../ui/button";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow bg-white dark:bg-gray-900 sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <img
          src="/images/hero.jpg"
          alt="Hero Icon"
          className="h-8 w-8 rounded-full mr-4"
        />
        <a href="#hero" className="text-xl font-bold text-primary-500">
          Daniel Du
        </a>

        {/* Social Icons */}
        <div className="flex items-center space-x-4 ml-4 text-2xl text-black dark:text-white">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-primary-500 transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:text-primary-500 transition-colors" />
          </a>
          <a href="mailto:danieldu1131@gmail.com" aria-label="Email">
            <MdEmail className="hover:text-primary-500 transition-colors" />
          </a>
          <a
            href="https://instagram.com/your-instagram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="hover:text-primary-500 transition-colors" />
          </a>
        </div>
      </div>

      <nav className="flex items-center space-x-4">
        <a href="/#about">
          <Button variant="ghost" className="px-6 py-3 text-lg">
            About
          </Button>
        </a>
        <a href="/#projects">
          <Button variant="ghost" className="px-6 py-3 text-lg">
            Projects
          </Button>
        </a>
        <a href="/#skills">
          <Button variant="ghost" className="px-6 py-3 text-lg">
            Skills
          </Button>
        </a>
        <Link href="/photos">
          <Button variant="ghost" className="px-6 py-3 text-lg">
            Photos
          </Button>
        </Link>
      </nav>
    </header>
  );
}
