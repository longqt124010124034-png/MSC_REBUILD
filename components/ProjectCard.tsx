"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  mentors: Array<{
    name: string
    avatar: string
  }>
  category: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, image, mentors, category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="h-full overflow-hidden card-hover bg-white dark:bg-gray-800 border-0 shadow-lg">
        <div className="relative overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={250}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">{category}</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-700 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{description}</p>

          <div className="flex items-center space-x-2 mb-4">
            <Users className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400">Ban giảng huấn:</span>
            <div className="flex -space-x-2">
              {mentors.slice(0, 3).map((mentor, index) => (
                <div
                  key={index}
                  className="relative w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden"
                  title={mentor.name}
                >
                  <Image src={mentor.avatar || "/placeholder.svg"} alt={mentor.name} fill className="object-cover" />
                </div>
              ))}
              {mentors.length > 3 && (
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center">
                  <span className="text-xs text-gray-600 dark:text-gray-300">+{mentors.length - 3}</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <Link href={`/du-an/${id}`} className="w-full">
            <Button
              variant="outline"
              className="w-full group-hover:bg-blue-700 group-hover:text-white group-hover:border-blue-700 transition-all duration-300 bg-transparent"
            >
              Chi tiết
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default ProjectCard
