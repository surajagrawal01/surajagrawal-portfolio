"use client";

import { useEffect, useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiRedux,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiRender,
  SiSupabase,
  SiNginx,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { FiDatabase, FiZap, FiGitBranch } from "react-icons/fi";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    skills: [
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
      { name: "Redux", icon: SiRedux, color: "#764abc" },
    ],
  },
  {
    title: "Backend",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#68a063" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "REST APIs", icon: FiDatabase, color: "#6366f1" },
      { name: "WebSockets", icon: FiZap, color: "#f59e0b" },
      { name: "GraphQL", icon: FiDatabase, color: "#e535ab" },
      { name: "Node Streams", icon: FiZap, color: "#22d3ee" },
    ],
  },
  {
    title: "Databases",
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-500/30",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#4db33d" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Prisma", icon: FiDatabase, color: "#2d3748" },
    ],
  },
  {
    title: "Cloud & Deployment",
    color: "from-sky-500/20 to-indigo-500/20",
    borderColor: "border-sky-500/30",
    skills: [
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Render", icon: SiRender, color: "#46e3b7" },
      { name: "Supabase", icon: SiSupabase, color: "#3ecf8e" },
      { name: "AWS EC2/S3", icon: FaAws, color: "#ff9900" },
      { name: "NGINX", icon: SiNginx, color: "#009639" },
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    skills: [
      { name: "GitHub Actions", icon: SiGithub, color: "#ffffff" },
      { name: "CI/CD", icon: FiGitBranch, color: "#22c55e" },
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "Postman", icon: SiPostman, color: "#ef5b25" },
    ],
  },
];

export default function Skills() {
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

  return (
    <section
      id="skills"
      className="section-padding max-w-6xl mx-auto"
      ref={sectionRef}
    >
      <div className="flex items-center gap-3 mb-10 md:mb-16 reveal">
        <span className="font-mono text-accent text-sm shrink-0">02.</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-theme-text whitespace-nowrap">Technical Skills</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((cat, catIdx) => (
          <div
            key={cat.title}
            className={`reveal reveal-delay-${catIdx + 1} rounded-xl border ${cat.borderColor} bg-gradient-to-br ${cat.color} p-6 hover:scale-[1.01] transition-transform duration-300`}
          >
            <h3 className="font-mono text-sm text-muted uppercase tracking-widest mb-5">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map(({ name, icon: Icon, color }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 glass rounded-lg px-3 py-2 group hover:border-accent/30 transition-all duration-200 cursor-default"
                >
                  <Icon size={16} style={{ color }} />
                  <span className="text-sm text-text-soft group-hover:text-theme-text transition-colors">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft skills */}
      <div className="mt-8 reveal reveal-delay-5">
        <div className="glass rounded-xl p-6">
          <h3 className="font-mono text-sm text-muted uppercase tracking-widest mb-4">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {["Communication", "Teamwork", "Adaptability", "Critical Thinking", "Time Management", "Ownership Mindset"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 border border-accent/30 text-accent-light text-sm rounded-full font-mono hover:bg-accent-glow transition-colors"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}