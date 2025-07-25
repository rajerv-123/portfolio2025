"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar" 
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  const professions = ["Software Developer", "Full-stack Engineer", "React Enthusiast", "Web Innovator"]
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const handleTyping = () => {
      const current = professions[currentProfessionIndex]
      if (isDeleting) {
        setDisplayedText(current.substring(0, displayedText.length - 1))
        setTypingSpeed(75)
      } else {
        setDisplayedText(current.substring(0, displayedText.length + 1))
        setTypingSpeed(150)
      }

      if (!isDeleting && displayedText === current) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false)
        setCurrentProfessionIndex((prev) => (prev + 1) % professions.length)
        setTypingSpeed(200)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, typingSpeed, currentProfessionIndex, professions])

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen pt-24 pb-12 text-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 flex flex-col items-center gap-6 px-4 md:px-6"
      >
        <Avatar className="h-40 w-40 border-4 border-primary shadow-xl animate-scale-in">
          <AvatarImage src="/images/my.jpg" alt="Rajeev" /> 
          <AvatarFallback className="text-6xl font-semibold bg-primary text-primary-foreground">YN</AvatarFallback>
        </Avatar>
        <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-7xl lg:text-8xl leading-tight">
          Hi, I'm <span className="text-primary">Rajeev Patel</span>
        </h1>
        <p className="max-w-3xl text-2xl text-gray-700 dark:text-gray-300 md:text-3xl font-medium">
          A <span className="typewriter-text inline-block min-w-[200px] md:min-w-[300px]">{displayedText}</span>
        </p>
        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400 md:text-xl mt-4">
          Passionate about crafting engaging and high-performance web experiences.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <Button
            asChild
            size="lg"
            className="px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Link href="#projects">Explore My Work</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link href="#contact">Let's Connect</Link>
          </Button>
        </motion.div>
      </motion.div>
      {/* Subtle background animation */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      </div>
    </section>
  )
}
