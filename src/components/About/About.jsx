
const About = () => {
  return (
    <section
      id="about"
      className="border-t border-[var(--border)] px-4 py-20 sm:px-6 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* LEFT */}
          <div>
            <p className="section-label">About me</p>

            <p className="mt-5 max-w-xs text-sm leading-7 text-[var(--text-secondary)]">
              A Frontend-focused Developer with 1+ year of professional
              experience building responsive, user-friendly and
              scalable web applications.
            </p>
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="max-w-3xl text-4xl leading-tight text-[var(--text-primary)] sm:text-5xl">
              Turning ideas into
              <span className="text-[var(--primary)]">
                {" "}meaningful digital experiences.
              </span>
            </h2>

            <div className="mt-8 grid gap-8 text-sm leading-7 text-[var(--text-secondary)] sm:grid-cols-2">
              <p>
                I have 1+ year of hands-on experience working with
                modern web technologies, primarily React.js and
                Next.js. I enjoy building clean interfaces,
                reusable components and responsive layouts that
                deliver a smooth user experience across devices.
              </p>

              <p>
                Through professional projects, I have worked on
                UI development, REST API integration, state
                management and application features. I also have
                experience with Node.js, Express.js and databases,
                allowing me to understand the complete web
                development workflow.
              </p>
            </div>

            {/* Details */}
            <div className="mt-12 grid border-y border-[var(--border)] sm:grid-cols-3">
              <div className="border-b border-[var(--border)] py-5 sm:border-b-0 sm:border-r sm:pr-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  Experience
                </p>
                <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">
                  1+ Year
                </p>
              </div>

              <div className="border-b border-[var(--border)] py-5 sm:border-b-0 sm:border-r sm:px-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  Specialization
                </p>
                <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">
                  Frontend Development
                </p>
              </div>

              <div className="py-5 sm:pl-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  Open to
                </p>
                <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">
                  New Opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
