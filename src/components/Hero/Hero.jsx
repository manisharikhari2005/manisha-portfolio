import Image from "next/image";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--primary-soft)]/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT */}
          <div className="fade-up">
            <p className="section-label">Full Stack Developer</p>

            <h1 className="editorial-heading mt-6 text-5xl leading-[0.95] text-[var(--text-primary)] sm:text-6xl lg:text-8xl">
              Building
              <br />
              <span className="text-[var(--primary)]">thoughtful</span>
              <br />
              digital experiences.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              I'm Manisha Rikhari, a developer focused on creating clean,
              responsive and user-friendly web applications while growing into
              full-stack development.
            </p>

{/* Buttons */}
<div className="mt-9 flex flex-row flex-wrap gap-2.5">
  <a
    href="#projects"
    className="inline-flex flex-1 items-center justify-center whitespace-nowrap bg-[var(--primary)] px-3 py-3 text-xs font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-none sm:px-6 sm:text-sm rounded-lg"
  >
    View my work →
  </a>

  <a
    href="#contact"
    className="inline-flex flex-1 items-center justify-center whitespace-nowrap border border-[var(--border)] px-3 py-3 text-xs font-medium text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)] sm:flex-none sm:px-6 sm:text-sm rounded-lg "
  >
    Let's connect
  </a>
</div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative hidden min-h-[430px] lg:block fade-up-delay-1">
            {/* Back glass panel */}
            <div
              className="
                absolute
                right-10
                top-16
                h-72
                w-60
                rotate-6
                border
                border-[var(--primary-light)]
                bg-[var(--primary-soft)]/40
                backdrop-blur-sm
              "
            />

            {/* Main glass panel */}
            <div
              className="
                absolute
                right-20
                top-10
                h-72
                w-60
                -rotate-3
                overflow-hidden
                border
                border-[var(--border)]
                bg-[var(--card)]/50
                shadow-lg
                backdrop-blur-md
                float-soft
              "
            >
              {/* Girl working image */}
              <Image
                src="/working.jpeg"
                alt="Girl working on a laptop"
                className="h-full w-full object-cover"
                width={440}
                height={360}
              />

              {/* Very light glass overlay */}
              <div className="absolute inset-0 bg-[var(--primary-soft)]/10" />
            </div>

            {/* Small information card */}
            <div
              className="
                absolute
                right-0
                top-0
                border
                border-[var(--border)]
                bg-[var(--card)]/80
                p-5
                shadow-lg
                backdrop-blur-md
              "
            >
              <p className="editorial-heading text-3xl text-[var(--text-primary)]">
                2+
              </p>

              <p className="mt-1 text-xs text-[var(--text-secondary)]">
                Projects built
              </p>
            </div>

            {/* Bottom information card */}
            <div
              className="
                absolute
                bottom-8
                left-0
                max-w-[220px]
                border
                border-[var(--border)]
                bg-[var(--card)]/75
                p-5
                backdrop-blur-md
              "
            >
              <p className="section-label">Currently</p>

              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                Learning full-stack development and building projects that solve
                real problems.
              </p>
            </div>
          </div>
        </div>

        {/* ================= TECH LINE ================= */}
        <div className="mt-20 border-y border-[var(--border)] py-5">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Currently working with
            </span>

            <span className="text-sm text-[var(--text-secondary)]">
              JavaScript
            </span>

            <span className="text-sm text-[var(--text-secondary)]">React</span>

            <span className="text-sm text-[var(--text-secondary)]">
              Next.js
            </span>

            <span className="text-sm text-[var(--text-secondary)]">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
