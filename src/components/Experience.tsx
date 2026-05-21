"use client";

import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    company: "Nhance Digital BuildTech Pvt Ltd.",
    role: "Software Engineer",
    period: "June 2024 – Present",
    current: true,
    url: "#",
    highlights: [
      { metric: "5000+", label: "Live sensor points" },
      { metric: "40%", label: "Onboarding time cut" },
      { metric: "60%", label: "UI responsiveness" },
    ],
    description: [
      "Developed real-time 2D IoT dashboards in React for monitoring 5000+ live sensor data points and workspace systems, improving operational visibility for enterprise facility teams.",
      "Built scalable client onboarding and deployment workflows with WebSockets, multi-stage provisioning, rollback support, and basic CI/CD (GitHub Actions, Docker) — reducing onboarding time by 40% and improving deployment reliability.",
      "Integrated OpenAI ToolCall APIs and Building Management System (BMS) workflows to automate operational insights and centralized infrastructure monitoring across multiple enterprise environments.",
      "Optimized high-frequency data rendering pipelines and frontend state management, improving UI responsiveness by 60% for large real-time datasets.",
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "WebSockets",
      "OpenAI API",
      "BMS",
      "Express.js",
      "MongoDB",
      "Vercel",
      "Render",
      "Supabase",
      "AWS EC2",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "NGINX",
      "Git",
    ],
  },
  {
    company: "LegalYatra Technology",
    role: "Associate Software Developer",
    period: "Apr 2023 – May 2024",
    current: false,
    url: "#",
    highlights: [
      { metric: "20+", label: "Reusable components" },
      { metric: "Multi-step", label: "Agreement workflows" },
    ],
    description: [
      "Developed multi-step rental agreement workflows and dynamic React interfaces used for document-driven onboarding and verification processes.",
      "Built reusable frontend components and integrated REST APIs, streamlining frontend delivery across rental agreement and document-generation flows.",
      "Contributed to Node.js backend modules for form validation, business logic, and MongoDB CRUD operations supporting legal document workflows.",
      "Reduced frontend code duplication by 40% through systematic component extraction and a shared design system.",
    ],
    tech: ["React", "Redux", "Tailwind CSS", "Node.js", "MongoDB", "REST APIs", "JavaScript"],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

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

  const active = experiences[activeIdx];

  return (
    <section
      id="experience"
      className="section-padding max-w-6xl mx-auto"
      ref={sectionRef}
    >
      <div className="flex items-center gap-3 mb-10 md:mb-16 reveal">
        <span className="font-mono text-accent text-sm shrink-0">03.</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-theme-text whitespace-nowrap">Experience</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="flex md:flex-col gap-0 border-b md:border-b-0 md:border-l border-border overflow-x-auto md:overflow-visible shrink-0 -mx-4 sm:-mx-6 md:mx-0 px-4 sm:px-6 md:px-0">
          {experiences.map((exp, idx) => (
            <button
              key={exp.company}
              onClick={() => setActiveIdx(idx)}
              className={`text-left font-mono text-sm px-4 py-3 border-b-2 md:border-b-0 md:border-l-2 transition-all duration-200 whitespace-nowrap ${activeIdx === idx
                ? "border-accent text-accent-light bg-accent-glow"
                : "border-transparent text-muted hover:text-theme-text hover:bg-subtle"
                }`}
            >
              {exp.company.split(" ").slice(0, 2).join(" ")}
            </button>
          ))}
        </div>

        <div className="flex-1 reveal reveal-delay-2 min-h-[280px] md:min-h-[320px]">
          <div className="flex flex-wrap items-start gap-3 mb-4">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-theme-text leading-snug">
                {active.role}{" "}
                <span className="text-accent">
                  @{" "}
                  <a
                    href={active.url}
                    className="hover:underline underline-offset-2"
                  >
                    {active.company}
                  </a>
                </span>
              </h3>
              <div className="flex items-center gap-3 mt-1">
                <span className="font-mono text-muted text-sm">
                  {active.period}
                </span>
                {active.current && (
                  <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Current
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {active.highlights.map((h) => (
              <div
                key={h.label}
                className="glass rounded-lg p-3 text-center border border-accent/20"
              >
                <div className="text-xl font-bold text-gradient">{h.metric}</div>
                <div className="text-xs font-mono text-muted mt-1 leading-tight">
                  {h.label}
                </div>
              </div>
            ))}
          </div>

          <ul className="space-y-3 mb-6">
            {active.description.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-text-soft text-sm leading-relaxed"
              >
                <span className="text-accent mt-1 shrink-0">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {active.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 bg-accent/10 border border-accent/20 text-accent-light text-xs font-mono rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 glass rounded-xl p-6 reveal reveal-delay-3">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-lg font-semibold text-theme-text">
              Bachelor of Technology
            </h3>
            <p className="text-accent-light font-mono text-sm mt-1">
              Anand Engineering College, Agra
            </p>
            <p className="text-muted text-sm mt-1">August 2017 – August 2021</p>
          </div>
          <div className="text-right">
            <p className="text-theme-text font-medium text-sm">
              Post Graduate Certification
            </p>
            <p className="text-muted text-sm mt-1">
              Full Stack Development — DCT Academy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}