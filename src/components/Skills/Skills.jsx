
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiPostman,
  SiTypescript,
  SiBootstrap,
  SiRedux,
  SiPostgresql,
  SiMysql,
  SiSequelize,

} from "react-icons/si";

import { Code2, Database, Layers3, Server } from "lucide-react";
import SkillCard from "./SkillCard";

const skillGroups = [
  {
    category: "Frontend",
    description: "Building responsive interfaces and modern web experiences.",
    technologies: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "var(--icon-dark)" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    category: "State Management",
    description: "Managing application state and asynchronous data.",
    technologies: [
      { name: "React Hooks", icon: SiReact, color: "#61DAFB" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "TanStack Query", icon: null, color: "var(--primary)" },
    ],
  },
  {
    category: "Backend & APIs",
    description: "Working with server-side functionality and API integration.",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "var(--icon-dark)" },
      { name: "REST APIs", icon: null, color: "var(--primary)" },
    ],
  },
  {
    category: "Database",
    description: "Working with relational databases and data management.",
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "SQL", icon: null, color: "var(--primary)" },
      { name: "Sequelize", icon: SiSequelize, color: "#52B0E7" },
    ],
  },
  {
    category: "Developer Tools",
    description: "Tools used throughout my development workflow.",
    technologies: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "var(--icon-github)" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      {
  name: "VS Code",
  icon: Code2,
  color: "#007ACC",
},
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="border-t border-[var(--border)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="section-label">My Toolkit</p>

          <div>
            <h2 className="text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-5xl">
              Technologies I work with.
            </h2>

            <p className="mt-4 max-w-xl text-xs leading-7 text-[var(--text-secondary)] sm:text-sm">
              Technologies and tools I use to build responsive
              interfaces, integrate APIs and develop web applications.
            </p>
          </div>
        </div>

        {/* Skill Groups */}
        <div className="mt-10 sm:mt-12">
          {skillGroups.map((group, index) => (
            <div
              key={group.category}
              className={`grid gap-4 py-6 sm:gap-6 sm:py-8 lg:grid-cols-[0.7fr_1.3fr] ${
                index !== 0 ? "border-t border-[var(--border)]" : ""
              }`}
            >
              {/* Category Information */}
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] sm:text-base">
                  {group.category}
                </h3>

                <p className="mt-1.5 max-w-xs text-xs leading-6 text-[var(--text-secondary)] sm:text-sm">
                  {group.description}
                </p>
              </div>

              {/* Technology Cards */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {group.technologies.map((technology) => (
                  <SkillCard
                    key={technology.name}
                    name={technology.name}
                    icon={technology.icon}
                    color={technology.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
