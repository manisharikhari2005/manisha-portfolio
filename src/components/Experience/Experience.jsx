
"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Layers3,
  Monitor,
  Sparkles,
} from "lucide-react";

const contributions = [
  {
    icon: Monitor,
    number: "01",
    title: "Frontend Development",
    description:
      "Developed responsive interfaces and reusable UI components using React.js, Next.js, JavaScript and TypeScript. Worked on layouts, React Hooks and consistent user experiences.",
    tags: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    icon: Layers3,
    number: "02",
    title: "API Integration & State Management",
    description:
      "Integrated REST APIs, handled asynchronous data fetching, loading and error states, and managed application data using Redux Toolkit and TanStack Query.",
    tags: [
      "REST APIs",
      "Axios / Fetch",
      "Redux Toolkit",
      "TanStack Query",
      "Async/Await",
    ],
  },
  {
    icon: Database,
    number: "03",
    title: "Backend Development",
    description:
      "Contributed to backend functionality using Node.js and Express.js, including API handling, CRUD operations and working with relational databases.",
    tags: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MySQL",
      "SQL",
      "Sequelize",
    ],
  },
];

const techCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "State Management",
    icon: Layers3,
    skills: [
      "React Hooks",
      "Redux Toolkit",
      "TanStack Query",
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
      "SQL",
      "Sequelize",
    ],
  },
  {
    title: "Developer Tools",
    icon: Code2,
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[var(--border)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">Experience</p>

            <h2 className="mt-4 text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-5xl">
              My professional
              <br />
              <span className="text-[var(--primary)]">
                journey so far.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-6 text-[var(--text-secondary)] sm:text-sm">
            A look at my professional experience, development
            contributions and the technologies I've worked with.
          </p>
        </div>

        {/* Top Row: Company Details + Overview */}
        <div className="grid gap-4 lg:grid-cols-[0.85fr_1.5fr]">

          {/* Company Details */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--background-secondary)] p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary-soft)] text-[var(--primary)]">
                <BriefcaseBusiness size={19} />
              </div>

              <span className="rounded-full bg-[var(--primary-soft)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--primary)]">
                Professional Experience
              </span>
            </div>

            <p className="mt-6 text-[11px] font-medium uppercase tracking-wider text-[var(--text-secondary)]">
              October 2025 — Present
            </p>

            <h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)]">
              Full Stack Developer
            </h3>

            <p className="mt-1 text-sm font-medium text-[var(--primary)]">
              Callsmaster Services LLP
            </p>

            <div className="my-5 border-t border-[var(--border)]" />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[11px] text-[var(--text-secondary)]">
                  Location
                </p>
                <p className="mt-1 text-xs font-medium text-[var(--text-primary)]">
                  New Delhi, India
                </p>
              </div>

              <div>
                <p className="text-[11px] text-[var(--text-secondary)]">
                  Primary Focus
                </p>
                <p className="mt-1 text-xs font-medium text-[var(--text-primary)]">
                  Frontend Development
                </p>
              </div>
            </div>
          </div>

          {/* Main Overview Box */}
          <div className="flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-7">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-[var(--primary)]" />
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--primary)]">
                  My Role & Contributions
                </p>
              </div>

              <h3 className="mt-4 max-w-xl text-xl font-medium leading-snug text-[var(--text-primary)] sm:text-2xl">
                Building responsive web experiences and contributing
                to real-world applications.
              </h3>

              <p className="mt-3 max-w-2xl text-xs leading-7 text-[var(--text-secondary)] sm:text-sm">
                Worked across multiple business applications,
                contributing to frontend development, reusable
                components, REST API integration, CRM functionality
                and backend features in collaboration with the team.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["UI Development", "API Integration", "CRM Features", "Team Collaboration"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--background-secondary)] px-3 py-1.5 text-[10px] font-medium text-[var(--text-secondary)]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Contribution Cards */}
        <div className="mt-8">
          <div className="mb-4 flex items-center gap-2">
            <Code2 size={16} className="text-[var(--primary)]" />
            <h3 className="text-sm font-semibold text-[var(--text-primary)]">
              Areas of Contribution
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {contributions.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-light)] sm:p-5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--primary-soft)] text-[var(--primary)]">
                      <Icon size={18} />
                    </div>

                    <span className="text-xs text-[var(--text-secondary)]">
                      {item.number}
                    </span>
                  </div>

                  <h4 className="mt-4 text-sm font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-xs leading-6 text-[var(--text-secondary)]">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-[var(--background-secondary)] px-2 py-1 text-[10px] font-medium text-[var(--text-secondary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

       {/* Technologies & Tools */}
<div className="mt-8">
  <div className="mb-4 flex items-end justify-between gap-3">
    <div>
      <p className="section-label">My Toolkit</p>
      <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
        Technologies & Tools
      </h3>
    </div>

    <span className="text-xs text-[var(--text-secondary)]">
      {techCategories.reduce(
        (total, category) => total + category.skills.length,
        0
      )} skills
    </span>
  </div>

  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
    {techCategories.map((category) => {
      const Icon = category.icon;

      return (
        <div
          key={category.title}
          className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 transition-colors duration-300 hover:border-[var(--primary-light)] sm:p-5"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary-soft)] text-[var(--primary)]">
              <Icon size={16} />
            </div>

            <h4 className="text-sm font-semibold text-[var(--text-primary)]">
              {category.title}
            </h4>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-[var(--border)] bg-[var(--background-secondary)] px-2.5 py-1.5 text-[10px] font-medium text-[var(--text-secondary)] sm:text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      );
    })}
  </div>
</div>

        {/* Bottom Link */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-5">
          <p className="text-xs text-[var(--text-secondary)]">
            Always learning. Always building. Always improving.
          </p>

          <a
            href="#projects"
            className="group inline-flex items-center gap-2 text-xs font-medium text-[var(--primary)] transition-opacity hover:opacity-75 sm:text-sm"
          >
            Explore my projects
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

      </div>
    </section>
  );
}
