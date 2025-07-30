"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface BlogCardProps {
  id: string
  title: string
  excerpt: string
  image: string
  author: string
  publishDate: string
  category: string
  readTime: string
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, excerpt, image, author, publishDate, category, readTime }) => {
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
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">{category}</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{excerpt}</p>

          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{publishDate}</span>
              </div>
            </div>
            <span className="text-blue-700 font-medium">{readTime}</span>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <Link href={`/chia-se/${id}`} className="w-full">
            <Button
              variant="outline"
              className="w-full group-hover:bg-blue-700 group-hover:text-white group-hover:border-blue-700 transition-all duration-300 bg-transparent"
            >
              Đọc thêm
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default BlogCard
