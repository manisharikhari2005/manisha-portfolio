"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  //saved theme when the page loads
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  // Apply and save theme whenever darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
<nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <DesktopNav navLinks={navLinks} />

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Desktop Resume */}
          <a
            href="/manisha_resume.pdf"
            download="manisha_resume.pdf"
            className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-[var(--primary)] px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg lg:flex"
          >
            <Download size={14} />
            Download Resume
          </a>

          {/* Theme Toggle */}
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-8 w-8 items-center justify-center text-[var(--text-primary)] lg:hidden
            "
          >
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          navLinks={navLinks}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      </div>
    </nav>
  );
};

export default Navbar;
