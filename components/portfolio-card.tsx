import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PortfolioCardProps {
  title: string
  description: string
  imageUrl: string
  demoLink: string
  repoLink: string
}

export function PortfolioCard({ title, description, imageUrl, demoLink, repoLink }: PortfolioCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 ease-in-out group-hover:opacity-80"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">{/* Additional content can go here if needed */}</CardContent>
      <CardFooter className="flex justify-end gap-2 p-4">
        <Button
          asChild
          variant="outline"
          className="transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 bg-transparent"
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
  )
}
