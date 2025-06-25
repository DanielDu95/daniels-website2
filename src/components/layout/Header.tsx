import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow bg-white dark:bg-gray-900 sticky top-0 z-50">
      <a href="#hero" className="text-xl font-bold text-primary-500">
        Daniel Du
      </a>
      <nav className="flex items-center space-x-4">
        <a href="#about">
          <Button variant="ghost">About</Button>
        </a>
        <a href="#projects">
          <Button variant="ghost">Projects</Button>
        </a>
        <a href="#skills">
          <Button variant="ghost">Skills</Button>
        </a>
        <a href="#contact">
          <Button variant="ghost">Contact</Button>
        </a>
      </nav>
    </header>
  );
}
