"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin, Facebook, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface MentorCardProps {
  id: string
  name: string
  title: string
  degree: string
  avatar: string
  specialties: string[]
  social?: {
    linkedin?: string
    facebook?: string
    email?: string
  }
}

const MentorCard: React.FC<MentorCardProps> = ({ id, name, title, degree, avatar, specialties, social }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="h-full overflow-hidden card-hover bg-white dark:bg-gray-800 border-0 shadow-lg text-center">
        <CardContent className="p-6">
          <div className="relative mx-auto mb-6 w-32 h-32">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-orange-500 rounded-full p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <Image
                  src={avatar || "/placeholder.svg"}
                  alt={name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <motion.h3
            className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {name}
          </motion.h3>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{degree}</p>
          <p className="text-blue-700 font-medium mb-4">{title}</p>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {specialties.slice(0, 3).map((specialty, index) => (
              <span
                key={index}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs"
              >
                {specialty}
              </span>
            ))}
          </div>

          {social && (
            <div className="flex justify-center space-x-3 mb-4">
              {social.linkedin && (
                <Link href={social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-10 h-10 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </Link>
              )}
              {social.facebook && (
                <Link href={social.facebook} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-10 h-10 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                </Link>
              )}
              {social.email && (
                <Link href={`mailto:${social.email}`}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-10 h-10 rounded-full hover:bg-gray-100 hover:text-gray-600 transition-colors duration-300"
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          )}

          <Link href={`/mentors/${id}`}>
            <Button
              variant="outline"
              className="w-full group-hover:bg-blue-700 group-hover:text-white group-hover:border-blue-700 transition-all duration-300 bg-transparent"
            >
              Xem hồ sơ
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default MentorCard
