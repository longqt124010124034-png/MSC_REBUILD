"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "../language-provider"
import { Button } from "@/components/ui/button"
import ProjectCard from "../ProjectCard"

const ProjectsSection = () => {
  const { t } = useLanguage()

  const projects = [
    {
      id: "1",
      title: "Chương trình Mentoring & Coaching cho Sinh viên",
      description:
        "Chương trình đào tạo và phát triển kỹ năng lãnh đạo, giao tiếp và tư duy phản biện cho sinh viên đại học.",
      image: "/placeholder.svg?height=250&width=400&text=Mentoring+Program",
      category: "Mentoring",
      mentors: [
        { name: "TS. Nguyễn Văn A", avatar: "/placeholder.svg?height=40&width=40&text=Mentor+1" },
        { name: "ThS. Trần Thị B", avatar: "/placeholder.svg?height=40&width=40&text=Mentor+2" },
      ],
    },
    {
      id: "2",
      title: "Dự án Phát triển Kỹ năng Mềm",
      description: "Khóa học tập trung vào phát triển kỹ năng giao tiếp, làm việc nhóm và quản lý thời gian hiệu quả.",
      image: "/placeholder.svg?height=250&width=400&text=Soft+Skills",
      category: "Kỹ năng mềm",
      mentors: [
        { name: "TS. Phạm Văn D", avatar: "/placeholder.svg?height=40&width=40&text=Mentor+4" },
        { name: "ThS. Hoàng Thị E", avatar: "/placeholder.svg?height=40&width=40&text=Mentor+5" },
      ],
    },
    {
      id: "3",
      title: "Chương trình Quản lý Dự án",
      description: "Đào tạo chuyên sâu về quản lý dự án, áp dụng các phương pháp Agile và Scrum trong thực tế.",
      image: "/placeholder.svg?height=250&width=400&text=Project+Management",
      category: "Quản lý dự án",
      mentors: [
        { name: "TS. Vũ Văn F", avatar: "/placeholder.svg?height=40&width=40&text=Mentor+6" },
        { name: "ThS. Đặng Thị G", avatar: "/placeholder.svg?height=40&width=40&text=Mentor+7" },
      ],
    },
    {
      id: "4",
      title: "Khóa học Leadership & Team Building",
      description: "Phát triển kỹ năng lãnh đạo và xây dựng đội nhóm hiệu quả cho các nhà quản lý trẻ.",
      image: "/placeholder.svg?height=250&width=400&text=Leadership",
      category: "Lãnh đạo",
      mentors: [
        { name: "TS. Cao Văn I", avatar: "/placeholder.svg?height=40&width=40&text=Mentor+9" },
        { name: "ThS. Lý Thị K", avatar: "/placeholder.svg?height=40&width=40&text=Mentor+10" },
      ],
    },
    {
      id: "5",
      title: "Chương trình Coaching cá nhân",
      description: "Dịch vụ coaching 1-1 giúp cá nhân phát triển bản thân và đạt được mục tiêu nghề nghiệp.",
      image: "/placeholder.svg?height=250&width=400&text=Personal+Coaching",
      category: "Coaching",
      mentors: [
        { name: "TS. Mai Văn L", avatar: "/placeholder.svg?height=40&width=40&text=Mentor+11" },
        { name: "ThS. Đinh Thị M", avatar: "/placeholder.svg?height=40&width=40&text=Mentor+12" },
      ],
    },
    {
      id: "6",
      title: "Workshop Tư duy Sáng tạo",
      description: "Các buổi workshop thực hành về tư duy sáng tạo, giải quyết vấn đề và đổi mới trong công việc.",
      image: "/placeholder.svg?height=250&width=400&text=Creative+Thinking",
      category: "Workshop",
      mentors: [
        { name: "TS. Tô Văn N", avatar: "/placeholder.svg?height=40&width=40&text=Mentor+13" },
        { name: "ThS. Dương Thị O", avatar: "/placeholder.svg?height=40&width=40&text=Mentor+14" },
      ],
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-serif">
            Dự án đã triển khai
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Khám phá các dự án đào tạo và phát triển kỹ năng chuyên nghiệp mà MSC Center đã triển khai thành công
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
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
          <Link href="/du-an">
            <Button size="lg" className="btn-primary">
              Xem tất cả dự án
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
