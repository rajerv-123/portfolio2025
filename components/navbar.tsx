"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm py-4 px-6 md:px-12 flex items-center justify-between"
    >
      <Link
        href="#"
        className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
        prefetch={false}
      >
        Rajeev
      </Link>
      <div className="hidden md:flex items-center space-x-6">
        <Link
          href="#about"
          className="text-foreground hover:text-primary transition-colors"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#skills"
          className="text-foreground hover:text-primary transition-colors"
          prefetch={false}
        >
          Skills
        </Link>
        <Link
          href="#projects"
          className="text-foreground hover:text-primary transition-colors"
          prefetch={false}
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="text-foreground hover:text-primary transition-colors"
          prefetch={false}
        >
          Contact
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="text-foreground hover:text-primary"
        >
          <Link
            href="https://github.com/rajerv-123"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="text-foreground hover:text-primary"
        >
          <Link
            href="https://www.linkedin.com/in/rajeev-patel-1264161a0/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </Button>
        <div className="relative group inline-block">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="text-foreground hover:text-primary"
          >
            <a href="mailto:rp13261@example.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <span
            className="
    absolute 
    left-1/2 
    -translate-x-1/2 
    top-full 
    mt-2 
    px-3 
    py-1 
    bg-gray-900 
    text-sm 
    text-white 
    rounded 
    shadow-lg 
    opacity-0 
    group-hover:opacity-100 
    pointer-events-none 
    transition 
    whitespace-nowrap 
    z-50
  "
          >
            rp13261@example.com
          </span>
        </div>
      </div>
    </motion.nav>
  );
}
