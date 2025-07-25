"use client"

import { motion } from "framer-motion"
import { Code, Database, GitBranch, LayoutDashboard, Zap, Github } from "lucide-react"

const skills = [
  { name: "JavaScript", icon: <Code className="h-8 w-8 text-primary" /> },
  { name: "React.js", icon: <Code className="h-8 w-8 text-primary" /> },
  { name: "Next.js", icon: <LayoutDashboard className="h-8 w-8 text-primary" /> },
  { name: "NextAuth", icon: <Code className="h-8 w-8 text-primary" /> },
  { name: "TypeScript", icon: <Code className="h-8 w-8 text-primary" /> },
  { name: "HTML", icon: <Code className="h-8 w-8 text-primary" /> },
  { name: "CSS", icon: <Code className="h-8 w-8 text-primary" /> },
  { name: "Tailwind CSS", icon: <Code className="h-8 w-8 text-primary" /> },
  { name: "Responsive Design", icon: <LayoutDashboard className="h-8 w-8 text-primary" /> },
  { name: "Material-UI", icon: <Code className="h-8 w-8 text-primary" /> },
  { name: "Ant Design", icon: <Code className="h-8 w-8 text-primary" /> },
  { name: "Redux", icon: <Code className="h-8 w-8 text-primary" /> },
  { name: "Node.js", icon: <Zap className="h-8 w-8 text-primary" /> },
  { name: "Express", icon: <Zap className="h-8 w-8 text-primary" /> },
  { name: "SQL", icon: <Database className="h-8 w-8 text-primary" /> },
  { name: "MongoDB", icon: <Database className="h-8 w-8 text-primary" /> },
  { name: "Git", icon: <GitBranch className="h-8 w-8 text-primary" /> },
  { name: "GitHub", icon: <Github className="h-8 w-8 text-primary" /> },
  { name: "Figma", icon: <LayoutDashboard className="h-8 w-8 text-primary" /> },
  { name: "NPM", icon: <Code className="h-8 w-8 text-primary" /> },
  { name: "NVM", icon: <Code className="h-8 w-8 text-primary" /> },
  { name: "Postman", icon: <Code className="h-8 w-8 text-primary" /> },
]

export function SkillsSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.1 }}
      className="container py-20 md:py-28 px-4 md:px-6 bg-gray-50 dark:bg-gray-900"
    >
      <h2 className="text-5xl font-bold text-center mb-16 text-gray-900 dark:text-gray-50">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            {skill.icon}
            <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-100">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
