const DesktopNav = ({ navLinks }) => {
  return (
    <div className="hidden items-center gap-7 lg:flex xl:gap-9">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="group relative text-[13px] font-medium text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--text-primary)]"
        >
          {link.name}

          <span className="absolute -bottom-2 left-0 h-px w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />
        </a>
      ))}
    </div>
  );
};

export default DesktopNav;
