
import ProjectCard from "./ProjectCard";

const projects = [
  {
    number: "01",
    title: "The Thai Tourism",
    category: "Travel & Tourism Platform",
    type: "Professional Experience",
    status: "Ongoing",
    description:
      "An all-in-one travel platform for discovering holiday packages, tours and experiences, and other travel services. Contributed to responsive frontend pages, API integration and feature implementation.",
    contribution: [
      "Holiday Packages",
      "Tours & Experiences",
      "API Integration",
      "Responsive UI",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
    ],
    link: "https://travel-user.accessdashboard.live/",
  },

  {
    number: "02",
    title: "RishteyNCR",
    category: "Matrimonial & Matchmaking Platform",
    type: "Professional Experience",
    description:
      "A matrimonial platform that helps users discover compatible matches, manage profiles and interact with members. Contributed to frontend development, CRM functionality and feature implementation.",
    contribution: [
      "Frontend Development",
      "CRM Functionality",
      "UI Implementation",
      "Feature Development",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "MySQL",
      "Sequelize",
    ],
    link: "https://rishteyncr.com/",
  },

  {
    number: "03",
    title: "Terra Alert",
    category: "Earthquake Monitoring Dashboard",
    type: "Personal Full Stack Project",
    status: "Live",
    description:
      "A full-stack earthquake monitoring dashboard using live USGS earthquake data. Features severity-based alerts, interactive maps, location filtering, saved locations and automated data updates.",
    contribution: [
      "Full Stack Development",
      "REST API Development",
      "Database Integration",
      "Interactive Maps",
      "Automated Data Updates",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Leaflet",
    ],
    link: "https://terra-alert-sigma.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="border-t border-[var(--border)] px-4 py-20 sm:px-6 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="section-label">Selected Work</p>
            <p className="mt-3 text-xs text-[var(--text-secondary)]">
              03 projects · Personal & Professional
            </p>
          </div>

          <div>
           <h2 className="text-4xl font-medium tracking-tight text-[var(--text-primary)] sm:text-5xl">
  Projects I&apos;ve
  <br />
  <span className="text-[var(--text-secondary)]">
    worked on.
  </span>
</h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">
              A mix of real-world applications and personal
              projects, built through hands-on development
              and continuous learning.
            </p>
          </div>
        </div>

        {/* Compact Project List */}
        <div className="mt-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
