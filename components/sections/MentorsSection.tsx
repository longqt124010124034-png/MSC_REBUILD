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
      name: "TS. Phan Huỳnh Anh",
      title: "Tiến Sĩ Kinh tế",
      degree: "Chủ tịch HĐQT Công ty Smentor",
      avatar: "/Mentors/PHA.webp",
      specialties: ["Leadership", "Strategic Management", "Business Coaching"],
      
    },
    {
      id: "2",
      name: "Hoàng Cửu Long",
      title: "Phó Giáo Sư - Tiến Sĩ",
      degree: "Giảng viên Đại học Kinh tế TP. Hồ Chí Minh",
      avatar: "/Mentors/HCL.webp",
      specialties: ["HR Development", "Team Building", "Communication Skills"],
      
    },
    {
      id: "3",
      name: "Đoàn Đức Minh",
      title: "Thạc Sĩ - Nghiên cứu sinh",
      degree: "Giảng viên Đại học Western Sydney",
      avatar: "/Mentors/DDM.webp",
      specialties: ["Project Management", "Agile", "Digital Transformation"],
      
    },
    {
      id: "4",
      name: "Nguyễn Chí Thành",
      title: "CEO",
      degree: "TLàng Kết nối Kinh doanh VABIX",
      avatar: "/Mentors/NCT.webp",
      specialties: ["Personal Coaching", "Career Development", "Mindfulness"],
      
    },
    {
      id: "5",
      name: "Lê Nhật Trường Chinh",
      title: "CEO & Founder",
      degree: "SUCCESS Partner Co.Ltd",
      avatar: "/Mentors/LNTC.webp",
      specialties: ["Innovation", "Entrepreneurship", "Design Thinking"],
      
    },
    {
      id: "6",
      name: "Phan Phát Huy",
      title: "CEO & Founder",
      degree: "HILTOW LANDMARK",
      avatar: "/Mentors/PPH.webp",
      specialties: ["Soft Skills", "Public Speaking", "Emotional Intelligence"],
      
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
          {mentors.map((mentor: any, index) => (
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
