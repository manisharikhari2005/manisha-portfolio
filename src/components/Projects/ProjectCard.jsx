
import { ArrowUpRight, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  const isPersonal = project.type === "Personal Full Stack Project";

  return (
    <article className="group border-t border-[var(--border)] py-8 transition-colors duration-300 last:border-b hover:border-[var(--primary-light)] sm:py-9">

      <div className="grid gap-5 sm:grid-cols-[55px_1fr] lg:grid-cols-[65px_1fr_125px]">

        {/* Number */}
        <div className="flex items-start gap-3">
          <span className="text-sm font-medium tabular-nums text-[var(--primary)]">
            {project.number}
          </span>

          <span className="mt-2 h-px w-5 bg-[var(--primary-light)] lg:hidden" />
        </div>

        {/* Main Content */}
        <div className="min-w-0">

          {/* Title and Labels */}
          <div className="flex flex-wrap items-center gap-2.5">

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/title inline-flex items-center gap-1.5"
            >
              <h3 className="text-xl font-semibold tracking-tight text-[var(--text-primary)] transition-colors duration-200 group-hover/title:text-[var(--primary)] sm:text-2xl">
                {project.title}
              </h3>

              <ArrowUpRight
                size={17}
                className="text-[var(--primary)] opacity-0 transition-all duration-200 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 group-hover/title:opacity-100"
              />
            </a>

            {isPersonal && (
              <span className="rounded-full bg-[var(--primary-soft)] px-2.5 py-1 text-[10px] font-semibold text-[var(--primary)]">
                Personal Project
              </span>
            )}

            {project.status && (
              <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-[var(--text-secondary)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                {project.status}
              </span>
            )}
          </div>

          {/* Category */}
          <p className="mt-1.5 text-xs font-medium text-[var(--primary)]">
            {project.category}
          </p>

          {/* Description */}
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--text-secondary)]">
            {project.description}
          </p>

          {/* Contribution */}
          <div className="mt-5">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--text-secondary)]">
              My contribution
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {project.contribution.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-xs text-[var(--text-primary)] transition-colors hover:text-[var(--primary)]"
                >
                  <span className="h-1 w-1 rounded-full bg-[var(--primary)]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2">
            <span className="mr-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              Stack
            </span>

            {project.technologies.map((tech, index) => (
              <span
                key={tech}
                className="text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)]"
              >
                {tech}
                {index !== project.technologies.length - 1 && (
                  <span className="ml-2 text-[var(--primary-light)]">
                    /
                  </span>
                )}
              </span>
            ))}
          </div>

          {/* Mobile Live Link */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--primary)] transition-all hover:gap-2.5 lg:hidden"
          >
            View live project
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Desktop Live Link */}
        <div className="hidden justify-end pt-1 lg:flex">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-fit items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] transition-all duration-200 hover:gap-2.5 hover:text-[var(--primary)]"
          >
            Live Preview
            <ArrowUpRight size={14} />
          </a>
        </div>

      </div>
    </article>
  );
};

export default ProjectCard;
