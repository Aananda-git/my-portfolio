// components/footer.tsx
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center gap-6 text-xl mb-4">
          <Link 
            href="mailto:aanandabhusal@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaEnvelope />
          </Link>
          <Link 
            href="https://github.com/Aananda-git" 
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaGithub />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/aananda-bhusal-555354283/" 
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaLinkedin />
          </Link>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aananda Bhusal — Crafted with passion and modern technologies
        </p>
      </div>
    </footer>
  );
}