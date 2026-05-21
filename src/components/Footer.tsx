export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-muted text-xs">
          Designed &amp; Built by{" "}
          <span className="text-accent-light">Suraj Agrawal</span>
        </p>
        <p className="font-mono text-muted text-xs">
          © {new Date().getFullYear()} · All rights reserved
        </p>
      </div>
    </footer>
  );
}
