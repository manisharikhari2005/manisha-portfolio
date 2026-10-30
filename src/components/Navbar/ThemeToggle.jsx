import { Moon, Sun } from "lucide-react";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle theme"
      className="flex h-8 w-8 items-center justify-center text-[var(--text-secondary)] transition-all duration-300 hover:text-[var(--primary)]"
    >
      {darkMode ? (
        <Sun size={16} strokeWidth={1.7} />
      ) : (
        <Moon size={16} strokeWidth={1.7} />
      )}
    </button>
  );
};

export default ThemeToggle;
