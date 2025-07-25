"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-800 dark:bg-gray-950 text-gray-300 py-10 px-6 md:px-12 text-center"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-lg font-semibold">&copy; {new Date().getFullYear()} Rajeev</div>
        <div className="flex space-x-6">
          <Link href="#about" className="hover:text-primary transition-colors" prefetch={false}>
            About
          </Link>
          <Link href="#skills" className="hover:text-primary transition-colors" prefetch={false}>
            Skills
          </Link>
          <Link href="#projects" className="hover:text-primary transition-colors" prefetch={false}>
            Projects
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors" prefetch={false}>
            Contact
          </Link>
        </div>
        <div className="flex space-x-4">
        
          <Link
            href="mailto:your.email@example.com"
            aria-label="Email"
            className="hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" />
          </Link>
          <span>rp13261@gmail.com</span>
        </div>
      </div>
    </motion.footer>
  )
}
