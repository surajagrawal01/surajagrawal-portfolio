"use client";

import { useEffect, useRef } from "react";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

const facts = [
  { label: "Years Experience", value: "3+" },
  { label: "Sensors Monitored", value: "5k+" },
  { label: "Onboarding Cut", value: "40%" },
  { label: "UI Perf Gain", value: "60%" },
];

export default function About() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding max-w-6xl mx-auto" ref={sectionRef}>
      {/* Section header */}
      <div className="flex items-center gap-3 mb-10 md:mb-16 reveal">
        <span className="font-mono text-accent text-sm shrink-0">01.</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-theme-text whitespace-nowrap">About Me</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
      </div>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Text content */}
        <div className="space-y-6">
          <p className="text-text-soft leading-relaxed reveal reveal-delay-1">
            I&apos;m a Full Stack Developer based in Bangalore with a passion for
            building scalable, performant web applications. My expertise spans
            the entire stack — from crafting pixel-perfect React interfaces to
            architecting robust Node.js backend systems.
          </p>
          <p className="text-text-soft leading-relaxed reveal reveal-delay-2">
            I drive scalable, enterprise-grade experiences through modern web
            applications and backend systems. My recent work includes leading the
            development of a <strong>
              <a href="#projects" className="text-accent-light hover:underline">
                ChunkStream Upload Engine
              </a>
            </strong> that accelerates large file uploads, improves reliability for
            high-throughput data flows, and reduces deployment time with robust
            WebSocket-driven orchestration. I also deliver real-time dashboards,
            automated ingestion workflows, and CI/CD-powered release pipelines
            that improve responsiveness and operational visibility for enterprise
            teams.
          </p>
          <p className="text-text-soft leading-relaxed reveal reveal-delay-3">
            When I&apos;m not building production features, I maintain open-source
            libraries and contribute to the developer community.
          </p>

          <div className="flex flex-col gap-3 pt-2 reveal reveal-delay-4">
            <div className="flex items-center gap-3 text-muted text-sm">
              <FiMapPin className="text-accent shrink-0" size={14} />
              <span>Bangalore, India</span>
            </div>
            <div className="flex items-center gap-3 text-muted text-sm">
              <FiMail className="text-accent shrink-0" size={14} />
              <a
                href="mailto:surajagrawal6398@gmail.com"
                className="hover:text-accent-light transition-colors"
              >
                surajagrawal6398@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-muted text-sm">
              <FiPhone className="text-accent shrink-0" size={14} />
              <a
                href="tel:+916398081768"
                className="hover:text-accent-light transition-colors"
              >
                +91 6398081768
              </a>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="reveal reveal-delay-2">
          <div className="grid grid-cols-2 gap-4">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="glass rounded-xl p-6 group hover:border-accent/40 hover:bg-accent-glow transition-all duration-300"
              >
                <div className="text-3xl font-bold text-gradient mb-2">
                  {fact.value}
                </div>
                <div className="text-muted text-sm font-mono">{fact.label}</div>
              </div>
            ))}
          </div>

          {/* Availability badge */}
          <div className="mt-6 glass rounded-xl p-4 flex items-center gap-3">
            <div className="relative flex items-center">
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="absolute w-3 h-3 rounded-full bg-emerald-400 animate-ping opacity-75" />
            </div>
            <span className="text-text-soft text-sm">
              Available for new opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
