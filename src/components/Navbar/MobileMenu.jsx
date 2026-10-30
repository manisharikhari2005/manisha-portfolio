import { Download } from "lucide-react";

const MobileMenu = ({ navLinks, menuOpen, setMenuOpen }) => {
  if (!menuOpen) return null;

  return (
    <div className="absolute right-3 top-full mt-3 w-48 border border-[var(--border)] bg-[var(--card)]/90 p-4 shadow-xl backdrop-blur-md lg:hidden">
      <div className="flex flex-col items-start gap-3">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-sm text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--primary)]"
          >
            {link.name}
          </a>
        ))}

        <div className="my-1 h-px w-full bg-[var(--border)]" />

        <a
          href="/Manisha-Rikhari-Resume.pdf"
          download="Manisha-Rikhari-Resume.pdf"
          className="flex w-fit items-center gap-2 whitespace-nowrap rounded-full bg-[var(--primary)] px-3 py-1.5 text-[11px] font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <Download size={13} />
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
