"use client"
import { motion } from "framer-motion"
import { useLanguage } from "../language-provider"
import MentorCard from "../MentorCard"

const DirectorsSection = () => {
  const { t } = useLanguage()

  const directors = [
    {
      id: "dir-1",
      name: "TS. Nguyễn Thành Đạt",
      title: "Chủ nhiệm MSC Center",
      degree: "Tiến sĩ Quản trị Kinh doanh",
      avatar: "/placeholder.svg?height=128&width=128&text=Director+1",
      specialties: ["Strategic Leadership", "Business Development", "Educational Management"],
      social: {
        linkedin: "https://linkedin.com/in/director1",
        facebook: "https://facebook.com/director1",
        email: "director1@msc.edu.vn",
      },
    },
    {
      id: "dir-2",
      name: "ThS. Lê Thị Minh Châu",
      title: "Phó Chủ nhiệm Học thuật",
      degree: "Thạc sĩ Giáo dục",
      avatar: "/placeholder.svg?height=128&width=128&text=Director+2",
      specialties: ["Academic Affairs", "Curriculum Development", "Quality Assurance"],
      social: {
        linkedin: "https://linkedin.com/in/director2",
        email: "director2@msc.edu.vn",
      },
    },
    {
      id: "dir-3",
      name: "TS. Trần Văn Hùng",
      title: "Phó Chủ nhiệm Đối ngoại",
      degree: "Tiến sĩ Quan hệ Quốc tế",
      avatar: "/placeholder.svg?height=128&width=128&text=Director+3",
      specialties: ["International Relations", "Partnership Development", "External Affairs"],
      social: {
        linkedin: "https://linkedin.com/in/director3",
        facebook: "https://facebook.com/director3",
        email: "director3@msc.edu.vn",
      },
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-serif">
            Ban chủ nhiệm
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Đội ngũ lãnh đạo giàu kinh nghiệm, định hướng chiến lược và phát triển MSC Center
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {directors.map((director, index) => (
            <motion.div
              key={director.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MentorCard {...director} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DirectorsSection
