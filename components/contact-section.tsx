"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="container py-20 md:py-28 px-4 md:px-6 bg-gray-50 dark:bg-gray-900 text-center"
    >
      <h2 className="text-5xl font-bold mb-8 text-gray-900 dark:text-gray-50">
        Get in Touch
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-12">
        Have a project in mind, a question, or just want to say hello? Feel free
        to reach out! I'm always open to new opportunities and collaborations.
      </p>
      <div className="flex justify-center gap-8 mb-12">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-16 w-16 rounded-full bg-card shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-primary hover:text-primary-foreground hover:bg-primary"
              >
                <a href="mailto:rp13261@gmail.com" aria-label="Email">
                  <Mail className="h-8 w-8" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>rp13261@gmail.com</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="h-16 w-16 rounded-full bg-card shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-primary hover:text-primary-foreground hover:bg-primary"
        >
          <Link
            href="https://github.com/rajerv-123"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-8 w-8" />
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="h-16 w-16 rounded-full bg-card shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-primary hover:text-primary-foreground hover:bg-primary"
        >
          <Link
            href="https://www.linkedin.com/in/rajeev-patel-1264161a0/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-8 w-8" />
          </Link>
        </Button>
      </div>
      <p className="text-md text-gray-600 dark:text-gray-400">
        You can also find me on social media or send me an email directly.
      </p>
    </motion.section>
  );
}
