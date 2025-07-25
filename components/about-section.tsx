"use client"

import { motion } from "framer-motion"
// import Image from "next/image" // Removed Image import as per request

export function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="container py-20 md:py-28 px-4 md:px-6 bg-background dark:bg-gray-950"
    >
      <h2 className="text-5xl font-bold text-center mb-16 text-gray-900 dark:text-gray-50">About Me</h2>
      <div className="grid md:grid-cols-1 gap-12 items-center">
        {" "}
        {/* Changed to 1 column */}
        {/* Removed the image container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Adjusted animation for single column
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-lg text-gray-700 dark:text-gray-300 text-center md:text-left" // Centered text for single column
        >
          <p>
            Hello! I'm Rajeev Patel, a passionate and results-driven software developer with a knack for building beautiful
            and functional web applications. My journey in tech began with a fascination for how digital experiences are
            crafted, leading me to dive deep into the world of front-end and full-stack development.
          </p>
          <p>
            I specialize in React and Next.js, leveraging their power to create dynamic, responsive, and performant user
            interfaces. I'm also proficient in backend technologies like Node.js and various database systems, allowing
            me to build robust, end-to-end solutions.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            enjoying a good book. I'm always eager to learn and grow, and I thrive in collaborative environments where I
            can contribute to impactful projects.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
