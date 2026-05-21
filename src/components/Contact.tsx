"use client";

import { useEffect, useRef, useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiPhone, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";


const contactLinks = [
  {
    icon: FiMail,
    label: "Email",
    value: "surajagrawal6398@gmail.com",
    href: "mailto:surajagrawal6398@gmail.com",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/surajagrawal2000",
    href: "https://www.linkedin.com/in/surajagrawal2000/",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/surajagrawal01",
    href: "https://github.com/surajagrawal01",
  },
  {
    icon: SiLeetcode,
    label: "LeetCode",
    value: "leetcode.com/surajagrawal01",
    href: "https://leetcode.com/surajagrawal01",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) throw new Error("Web3Forms access key is not configured.");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="section-padding"
      ref={sectionRef}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6 reveal">
          <span className="font-mono text-accent text-sm shrink-0">05.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-theme-text whitespace-nowrap">Get In Touch</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        </div>

        <p className="text-muted text-sm sm:text-base max-w-xl mb-10 md:mb-14 reveal reveal-delay-1">
          I&apos;m currently open to new opportunities. Whether it&apos;s a full-time role,
          freelance project, or just a tech chat — my inbox is always open.
        </p>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Contact links */}
          <div className="space-y-3 reveal reveal-delay-2">
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 glass rounded-xl p-3 sm:p-4 group hover:border-accent/40 hover:bg-accent-glow transition-all duration-200 min-w-0"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Icon className="text-accent-light" size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-mono text-muted uppercase tracking-widest">
                    {label}
                  </p>
                  <p className="text-text-soft text-sm group-hover:text-theme-text transition-colors truncate">
                    {value}
                  </p>
                </div>
                <div className="text-muted group-hover:text-accent-light group-hover:translate-x-1 transition-all shrink-0 ml-1">
                  →
                </div>
              </a>
            ))}

            <div className="glass rounded-xl p-3 sm:p-4 flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <FiPhone className="text-accent-light" size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-mono text-muted uppercase tracking-widest">Phone</p>
                <a
                  href="tel:+916398081768"
                  className="text-text-soft text-sm hover:text-theme-text transition-colors"
                >
                  +91 6398081768
                </a>
              </div>
            </div>
          </div>

          {/* Message form */}
          <form onSubmit={handleSubmit} className="space-y-4 reveal reveal-delay-3">
            <div>
              <label className="block font-mono text-muted text-xs uppercase tracking-widest mb-2">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-theme-text placeholder-muted/50 focus:outline-none focus:border-accent/60 focus:bg-accent-glow transition-all duration-200"
              />
            </div>
            <div>
              <label className="block font-mono text-muted text-xs uppercase tracking-widest mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-theme-text placeholder-muted/50 focus:outline-none focus:border-accent/60 focus:bg-accent-glow transition-all duration-200"
              />
            </div>
            <div>
              <label className="block font-mono text-muted text-xs uppercase tracking-widest mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project or opportunity..."
                className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-theme-text placeholder-muted/50 focus:outline-none focus:border-accent/60 focus:bg-accent-glow transition-all duration-200 resize-none"
              />
            </div>
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                <FiAlertCircle size={15} className="shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-mono text-sm py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
            >
              {status === "sending" ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  <span>Sending...</span>
                </>
              ) : status === "sent" ? (
                <>
                  <FiCheckCircle size={15} />
                  <span>Message Sent!</span>
                </>
              ) : (
                <>
                  <FiSend size={15} />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {status === "sent" && (
              <p className="text-center text-emerald-400 text-sm font-mono">
                Thanks! I&apos;ll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
