"use client";

import { useEffect, useRef } from "react";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";

const projects = [
  {
    title: "ChunkStream Upload Engine",
    subtitle: "Resumable uploads with Node.js streams",
    description:
      "Full-stack chunk-based upload system with 1 MB client-side splitting, sliding-window concurrency (3 in-flight), exponential backoff retries, and localStorage session recovery. Server merges chunks via ReadStream/WriteStream with backpressure, then serves media over HTTP range requests (206 Partial Content) for native video scrubbing.",
    impact: ["3× concurrent uploads", "Resumable sessions", "HTTP range streaming"],
    tech: [
      "TypeScript",
      "React 19",
      "Node.js Streams",
      "Express 5",
      "MongoDB",
      "Zustand",
      "Vite",
      "Multer",
    ],
    github: "https://github.com/surajagrawal01/chunkstream-upload-engine",
    live: null,
    featured: true,
    tag: "Systems",
    tagColor: "text-orange-400 border-orange-400/30 bg-orange-400/10",
  },
  {
    title: "API Rate Limiter Dashboard",
    subtitle: "GraphQL usage monitoring & admin controls",
    description:
      "End-to-end API rate limiting platform with per-user quotas, request logging, usage analytics dashboard, and admin controls. Tracks API consumption in real time and enforces limits before overload — built for production-grade API governance.",
    impact: ["Per-user rate limits", "Analytics dashboard", "Request audit logs"],
    tech: ["TypeScript", "GraphQL", "PostgreSQL", "Prisma", "React", "Node.js"],
    github: "https://github.com/surajagrawal01/api-rate-limiter-with-dashboard",
    live: null,
    featured: true,
    tag: "Backend",
    tagColor: "text-violet-400 border-violet-400/30 bg-violet-400/10",
  },
  {
    title: "Typed-Form-Manager",
    subtitle: "Type-safe React form library (npm-ready)",
    description:
      "Minimal, extensible form engine with typed values, errors, touched state, validation lifecycles, blur/change/submit triggers, and server-side error mapping — built with advanced TypeScript generics to mirror how Formik/RHF work under the hood.",
    impact: ["Fully type-safe API", "Schema validation", "Reusable hooks"],
    tech: ["TypeScript", "React", "Generics", "Custom Hooks"],
    github: "https://github.com/surajagrawal01/typed-form-manager",
    live: null,
    featured: true,
    tag: "Open Source",
    tagColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  },
  {
    title: "Resortify",
    subtitle: "Full-stack resort booking platform",
    description:
      "End-to-end resort booking with JWT auth, Stripe payments, Multer image uploads, admin approval workflow, and Leaflet maps. Multi-step registration forms with Redux state and react-datatable dashboards.",
    impact: ["Stripe payments", "Admin workflow", "Live on Vercel"],
    tech: ["React", "Redux", "Node.js", "Stripe", "MongoDB", "Leaflet", "Multer"],
    github: "https://github.com/surajagrawal01/ResortifyFrontend",
    githubSecondary: "https://github.com/surajagrawal01/ResortifyBackend",
    live: "https://resortify-frontend.vercel.app",
    featured: false,
    tag: "Live",
    tagColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
  },
  {
    title: "TaskHive",
    subtitle: "Entity-level audit logging utility",
    description:
      "Lightweight TypeScript logging utility for task/project platforms. Tracks create, update (with diff), delete, and comment actions across projects, epics, tasks, and subtasks with structured audit trails.",
    impact: ["Diff tracking", "Entity-level logs", "TypeScript SDK"],
    tech: ["TypeScript", "Node.js", "Audit Logging"],
    github: "https://github.com/surajagrawal01/taskhive",
    live: null,
    featured: false,
    tag: "Open Source",
    tagColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  },
  {
    title: "Task Management",
    subtitle: "Multi-user full-stack app",
    description:
      "Secure multi-user task tracker with JWT auth, bcrypt encryption, email verification, and role-based access. Express/Node.js API with MongoDB and a React + Bootstrap frontend.",
    impact: ["JWT + bcrypt auth", "Email verification", "RBAC"],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/surajagrawal01/TaskManagement-Backend",
    githubSecondary: "https://github.com/surajagrawal01/TaskManagement-FrontEnd",
    live: null,
    featured: false,
    tag: "Full Stack",
    tagColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="section-padding max-w-6xl mx-auto"
      ref={sectionRef}
    >
      <div className="flex items-center gap-3 mb-10 md:mb-16 reveal">
        <span className="font-mono text-accent text-sm shrink-0">04.</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-theme-text whitespace-nowrap">Projects</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
      </div>

      <div className="space-y-6 md:space-y-10 mb-12 md:mb-16">
        {featured.map((project, idx) => (
          <div
            key={project.title}
            className={`reveal reveal-delay-${idx + 1} glass rounded-xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-300 lg:grid lg:grid-cols-12`}
          >
            <div
              className={`lg:col-span-5 bg-gradient-to-br from-surface to-subtle relative flex items-center justify-center p-8 min-h-[160px] lg:min-h-[220px] ${idx % 2 === 1 ? "lg:order-last" : ""}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple-600/5" />
              <div className="text-center z-10 w-full px-4">
                <div className="font-mono text-5xl text-accent/20 font-bold mb-3 select-none">
                  {project.title.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex flex-wrap justify-center gap-2 mb-3">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-accent/10 text-accent-light border border-accent/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {project.impact.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 p-5 sm:p-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-xs font-mono px-2 py-0.5 rounded border ${project.tagColor}`}
                >
                  {project.tag}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-theme-text mb-1">
                {project.title}
              </h3>
              <p className="text-xs text-muted font-mono mb-3">{project.subtitle}</p>
              <p className="text-text-soft text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-muted hover:text-accent-light transition-colors text-sm font-mono"
                    aria-label="GitHub"
                  >
                    <FiGithub size={16} /> <span>Code</span>
                  </a>
                )}
                {"githubSecondary" in project && project.githubSecondary && (
                  <a
                    href={project.githubSecondary}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-muted hover:text-accent-light transition-colors text-sm font-mono"
                    aria-label="Backend GitHub"
                  >
                    <FiGithub size={16} /> <span>Backend</span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-muted hover:text-accent-light transition-colors text-sm font-mono"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink size={16} /> <span>Live</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-center font-mono text-muted text-sm mb-8 reveal">
        Other Noteworthy Projects
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {others.map((project, idx) => (
          <div
            key={project.title}
            className={`reveal reveal-delay-${idx + 1} glass rounded-xl p-6 group hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 flex flex-col`}
          >
            <div className="flex items-start justify-between mb-4">
              <FiStar className="text-accent" size={20} />
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent-light transition-colors"
                  >
                    <FiGithub size={16} />
                  </a>
                )}
                {"githubSecondary" in project && project.githubSecondary && (
                  <a
                    href={project.githubSecondary}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent-light transition-colors"
                    title="Backend repo"
                  >
                    <FiGithub size={16} className="opacity-60" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent-light transition-colors"
                  >
                    <FiExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <div className="mb-1">
              <span
                className={`text-xs font-mono px-2 py-0.5 rounded border ${project.tagColor}`}
              >
                {project.tag}
              </span>
            </div>
            <h4 className="text-theme-text font-semibold mt-2 mb-1">{project.title}</h4>
            <p className="text-muted text-xs font-mono mb-3">{project.subtitle}</p>
            <p className="text-text-soft text-sm leading-relaxed flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.impact.map((item) => (
                <span
                  key={item}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-mono text-muted">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 reveal reveal-delay-3">
        <a
          href="https://github.com/surajagrawal01"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-accent-light transition-colors group"
        >
          <FiGithub size={16} />
          <span>View 25+ repos on GitHub</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  );
}
