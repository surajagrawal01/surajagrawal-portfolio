"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { clsx } from "clsx";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" />;

  const isDark = theme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted hover:text-accent-light hover:border-accent/50 hover:bg-accent-glow transition-all duration-200 shrink-0"
    >
      {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop =
          section.getBoundingClientRect().top;

        if (sectionTop <= 120) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "glass shadow-lg shadow-black/10 py-3"
            : "bg-bg/70 backdrop-blur-sm border-b border-transparent py-4"
        )}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="font-mono text-accent-light text-lg font-bold tracking-tight hover:text-accent transition-colors shrink-0"
          >
            SA<span className="text-accent">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={clsx(
                    "font-mono text-sm transition-colors duration-200 relative group",
                    activeSection === link.href.slice(1)
                      ? "text-accent-light"
                      : "text-muted hover:text-theme-text"
                  )}
                >
                  {link.label}
                  <span
                    className={clsx(
                      "absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300",
                      activeSection === link.href.slice(1)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/resume.pdf"
              download="Suraj_Agrawal_Resume.pdf"
              className="inline-flex items-center gap-1.5 border border-accent/50 text-accent-light text-sm font-mono px-4 py-2 rounded-lg hover:bg-accent-glow hover:border-accent transition-all duration-200"
            >
              Resume ↓
            </a>
          </div>

          {/* Mobile right */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted hover:text-theme-text hover:border-accent/50 transition-all duration-200 shrink-0"
            >
              {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu — full-screen overlay */}
      <div
        className={clsx(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-bg/95 backdrop-blur-md"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu content */}
        <div
          className={clsx(
            "absolute top-0 right-0 h-full w-72 max-w-[85vw] glass border-l border-border flex flex-col pt-20 pb-8 px-6 transition-transform duration-300",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col gap-1 flex-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={clsx(
                  "font-mono text-base px-4 py-3 rounded-lg transition-all duration-200",
                  "flex items-center gap-3",
                  activeSection === link.href.slice(1)
                    ? "text-accent-light bg-accent-glow border border-accent/20"
                    : "text-muted hover:text-theme-text hover:bg-surface"
                )}
              >
                <span className="text-accent text-xs font-mono">0{i + 1}.</span>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-border">
            <a
              href="/resume.pdf"
              download="Suraj_Agrawal_Resume.pdf"
              onClick={() => setMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 border border-accent/50 text-accent-light text-sm font-mono px-4 py-3 rounded-lg hover:bg-accent-glow transition-all duration-200"
            >
              Download Resume ↓
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
