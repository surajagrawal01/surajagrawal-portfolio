"use client";

import { useEffect, useRef } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const socials = [
  {
    icon: FiGithub,
    href: "https://github.com/surajagrawal01",
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/surajagrawal2000/",
    label: "LinkedIn",
  },
  {
    icon: SiLeetcode,
    href: "https://leetcode.com/surajagrawal01",
    label: "LeetCode",
  },
  {
    icon: FiMail,
    href: "mailto:surajagrawal6398@gmail.com",
    label: "Email",
  },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${p.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 pt-20 sm:pt-16">
        <p className="font-mono text-accent text-xs sm:text-sm mb-4 sm:mb-6 tracking-widest uppercase">
          Hi there, I&apos;m
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
          <span className="text-gradient">Suraj</span>
          <br />
          <span className="text-theme-text">Agrawal</span>
        </h1>

        <div className="flex items-center justify-center gap-3 mb-5 sm:mb-6">
          <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-accent/60" />
          <p className="font-mono text-accent-light text-base sm:text-lg md:text-xl">
            Full Stack Developer
          </p>
          <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-accent/60" />
        </div>

        <p className="text-muted text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
          Full Stack Developer building scalable applications with{" "}
          <span className="text-accent-light">React</span>,{" "}
          <span className="text-accent-light">Next.js</span>,{" "}
          <span className="text-accent-light">Node.js</span>, and{" "}
          <span className="text-accent-light">TypeScript</span>. I deliver performant
          real-time experiences, streamlined onboarding workflows, and reliable
          CI/CD pipelines with GitHub Actions &amp; Docker.
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted hover:text-accent-light hover:border-accent/50 hover:bg-accent-glow transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-mono text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 text-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 border border-border hover:border-accent/50 text-text-soft hover:text-theme-text rounded-lg font-mono text-sm font-medium transition-all duration-200 hover:bg-accent-glow hover:-translate-y-0.5 text-center"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-muted text-xs">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted/50 to-transparent" />
      </div>

      {/* Side decorations */}
      <div className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center gap-6 z-20">
        {socials.slice(0, 3).map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-muted hover:text-accent-light hover:-translate-y-1 transition-all duration-200"
          >
            <Icon size={18} />
          </a>
        ))}
        <div className="w-px h-24 bg-gradient-to-b from-muted/30 to-transparent" />
      </div>

      <div className="hidden lg:flex fixed right-8 bottom-0 flex-col items-center gap-4 z-20">
        <a
          href="mailto:surajagrawal6398@gmail.com"
          className="font-mono text-muted text-xs tracking-widest hover:text-accent-light transition-colors duration-200 [writing-mode:vertical-rl] hover:-translate-y-1"
        >
          surajagrawal6398@gmail.com
        </a>
        <div className="w-px h-24 bg-gradient-to-b from-muted/30 to-transparent" />
      </div>
    </section>
  );
}
