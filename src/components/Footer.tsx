import { Mail } from "lucide-react";
import { Github, Linkedin } from "./Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 bg-background relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex flex-col md:flex-row items-center justify-between text-sm text-foreground/50 z-10 relative">
        <div className="mb-4 md:mb-0">
          <p>&copy; {currentYear} D M Abdul Razzaq. All rights reserved.</p>
        </div>

        <div className="flex items-center space-x-6">
          <a href="https://github.com/DMAbdulRazzaq" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <span className="sr-only">GitHub</span>
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/dmabdulrazzaq" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={18} />
          </a>
          <a href="mailto:dmdabdulrazzaq@gmail.com" className="hover:text-primary transition-colors">
            <span className="sr-only">Email</span>
            <Mail size={18} />
          </a>
        </div>
        
        <div className="mt-4 md:mt-0">
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
