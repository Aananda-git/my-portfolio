import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 py-12 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="flex justify-center gap-8 text-2xl mb-6">
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aanandabhusal199@gmail.com"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <FaEnvelope />
          </Link>
          <Link
            href="https://github.com/Aananda-git"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/aananda-bhusal-555354283/"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </Link>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aananda Bhusal — Crafted with passion and
          modern technologies
        </p>

        <div className="mt-4 text-xs text-muted-foreground/70">
          Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
        </div>
      </div>
    </footer>
  );
}
