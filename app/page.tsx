import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Storefront",
    description: "A modern e-commerce platform built with Next.js and Stripe for seamless online shopping.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    demoLink: "#",
    repoLink: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A full-stack task management application with user authentication and real-time updates.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    demoLink: "#",
    repoLink: "#",
  },
  {
    id: 3,
    title: "Personal Blog Platform",
    description: "A responsive blog platform with markdown support and a custom CMS for content creation.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    demoLink: "#",
    repoLink: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "An interactive weather dashboard displaying current conditions and forecasts using a public API.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    demoLink: "#",
    repoLink: "#",
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background dark:bg-gray-950 text-foreground">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection /> 
        <ProjectsSection portfolioItems={portfolioItems} /> 
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
