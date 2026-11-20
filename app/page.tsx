import Spotlight from "@/components/Spotlight";
import ThemeToggle from "@/components/ThemeToggle";
import { projects, site } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Spotlight />
      <div className="mx-auto max-w-3xl px-6">
        <header className="flex items-center justify-between py-8">
          <span className="font-medium">{site.name}</span>
          <ThemeToggle />
        </header>

        <main>
          <section className="hero-in py-24 sm:py-36">
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
              {site.tagline}
            </h1>
            <p className="mt-8 max-w-md text-lg text-muted">{site.about}</p>
            <a
              href={site.resume}
              download
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent"
            >
              <svg
                className="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16" />
              </svg>
              Download resume
            </a>
          </section>

          <section id="projects" className="pb-24">
            <h2 className="border-b border-line pb-4 text-sm text-muted">
              Projects
            </h2>
            <ul>
              {projects.map((p) => (
                <li key={p.title} className="border-b border-line">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group grid gap-1 py-6 sm:grid-cols-[4rem_1fr_auto] sm:gap-6"
                  >
                    <span>
                      <span className="block text-xl font-medium transition-colors group-hover:text-accent">
                        {p.title}
                      </span>
                      <span className="mt-1 block text-muted">
                        {p.description}
                      </span>
                    </span>
                    <span className="mt-2 text-sm text-muted sm:mt-1">
                      {p.tags.join(", ")}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <footer className="flex flex-wrap items-center justify-between gap-4 pb-12 text-sm text-muted">
          <nav className="flex gap-5">
            {site.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </footer>
      </div>
    </>
  );
}
