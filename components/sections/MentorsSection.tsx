"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "../language-provider"
import { Button } from "@/components/ui/button"
import MentorCard from "../MentorCard"

const MentorsSection = () => {
  const { t } = useLanguage()

  const mentors = [
    {
      id: "1",
      name: "TS. Nguyễn Văn Minh",
      title: "Giám đốc Học thuật",
      degree: "Tiến sĩ Quản trị Kinh doanh",
      avatar: "/placeholder.svg?height=128&width=128&text=Mentor+1",
      specialties: ["Leadership", "Strategic Management", "Business Coaching"],
      social: {
        linkedin: "https://linkedin.com/in/mentor1",
        facebook: "https://facebook.com/mentor1",
        email: "mentor1@msc.edu.vn",
      },
    },
    {
      id: "2",
      name: "ThS. Trần Thị Hương",
      title: "Chuyên gia Phát triển Nhân sự",
      degree: "Thạc sĩ Tâm lý Tổ chức",
      avatar: "/placeholder.svg?height=128&width=128&text=Mentor+2",
      specialties: ["HR Development", "Team Building", "Communication Skills"],
      social: {
        linkedin: "https://linkedin.com/in/mentor2",
        email: "mentor2@msc.edu.vn",
      },
    },
    {
      id: "3",
      name: "TS. Lê Hoàng Nam",
      title: "Chuyên gia Quản lý Dự án",
      degree: "Tiến sĩ Công nghệ Thông tin",
      avatar: "/placeholder.svg?height=128&width=128&text=Mentor+3",
      specialties: ["Project Management", "Agile", "Digital Transformation"],
      social: {
        linkedin: "https://linkedin.com/in/mentor3",
        facebook: "https://facebook.com/mentor3",
        email: "mentor3@msc.edu.vn",
      },
    },
    {
      id: "4",
      name: "ThS. Phạm Thị Lan",
      title: "Chuyên gia Coaching",
      degree: "Thạc sĩ Tâm lý Ứng dụng",
      avatar: "/placeholder.svg?height=128&width=128&text=Mentor+4",
      specialties: ["Personal Coaching", "Career Development", "Mindfulness"],
      social: {
        linkedin: "https://linkedin.com/in/mentor4",
        email: "mentor4@msc.edu.vn",
      },
    },
    {
      id: "5",
      name: "TS. Vũ Đình Khoa",
      title: "Chuyên gia Đổi mới Sáng tạo",
      degree: "Tiến sĩ Kinh tế",
      avatar: "/placeholder.svg?height=128&width=128&text=Mentor+5",
      specialties: ["Innovation", "Entrepreneurship", "Design Thinking"],
      social: {
        linkedin: "https://linkedin.com/in/mentor5",
        facebook: "https://facebook.com/mentor5",
        email: "mentor5@msc.edu.vn",
      },
    },
    {
      id: "6",
      name: "ThS. Hoàng Thị Mai",
      title: "Chuyên gia Kỹ năng Mềm",
      degree: "Thạc sĩ Giáo dục",
      avatar: "/placeholder.svg?height=128&width=128&text=Mentor+6",
      specialties: ["Soft Skills", "Public Speaking", "Emotional Intelligence"],
      social: {
        linkedin: "https://linkedin.com/in/mentor6",
        email: "mentor6@msc.edu.vn",
      },
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-serif">
            Ban giảng huấn
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Đội ngũ giảng viên và chuyên gia hàng đầu với nhiều năm kinh nghiệm trong lĩnh vực đào tạo và phát triển
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MentorCard {...mentor} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/mentors">
            <Button size="lg" className="btn-primary">
              Xem tất cả mentors
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default MentorsSection
