"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  demoLink: string
  repoLink: string
}

export function ProjectCard({ title, description, imageUrl, demoLink, repoLink }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl border border-gray-200 dark:border-gray-800">
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl || "/placeholder.svg"} 
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-300 ease-in-out group-hover:opacity-80"
          />
        </div>
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-50">{title}</CardTitle>
          <CardDescription className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow p-4 pt-0"></CardContent>
        <CardFooter className="flex justify-end gap-2 p-4 border-t border-gray-200 dark:border-gray-800">
          <Button
            asChild
            variant="outline"
            className="transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 bg-transparent text-primary hover:text-primary-foreground border-primary"
          >
            <Link href={demoLink} target="_blank" rel="noopener noreferrer">
              View Demo
            </Link>
          </Button>
          <Button asChild className="transition-colors duration-200 hover:bg-primary/90">
            <Link href={repoLink} target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
