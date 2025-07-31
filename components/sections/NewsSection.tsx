"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "../language-provider"
import { Button } from "@/components/ui/button"
import BlogCard from "../BlogCard"

const NewsSection = () => {
  const { t } = useLanguage()

  const blogPosts = [
    {
      id: "1",
      title: "5 Kỹ năng mềm quan trọng nhất trong thời đại số",
      excerpt:
        "Khám phá những kỹ năng mềm thiết yếu giúp bạn thành công trong môi trường làm việc hiện đại và cách phát triển chúng một cách hiệu quả.",
      image: "/placeholder.svg?height=250&width=400&text=Soft+Skills+Article",
      author: "TS. Nguyễn Văn Minh",
      publishDate: "15/01/2025",
      category: "Kỹ năng mềm",
      readTime: "5 phút đọc",
    },
    {
      id: "2",
      title: "Coaching vs Mentoring: Sự khác biệt và ứng dụng",
      excerpt:
        "Tìm hiểu sự khác biệt giữa coaching và mentoring, cũng như cách áp dụng từng phương pháp để đạt được hiệu quả tối ưu trong phát triển bản thân.",
      image: "/placeholder.svg?height=250&width=400&text=Coaching+vs+Mentoring",
      author: "ThS. Trần Thị Hương",
      publishDate: "12/01/2025",
      category: "Coaching",
      readTime: "7 phút đọc",
    },
    {
      id: "3",
      title: "Xu hướng đào tạo và phát triển nhân sự 2025",
      excerpt:
        "Cập nhật những xu hướng mới nhất trong lĩnh vực đào tạo và phát triển nhân sự, từ công nghệ AI đến phương pháp học tập cá nhân hóa.",
      image: "/placeholder.svg?height=250&width=400&text=HR+Trends+2025",
      author: "TS. Lê Hoàng Nam",
      publishDate: "10/01/2025",
      category: "Xu hướng",
      readTime: "6 phút đọc",
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
            Tin tức & Chia sẻ
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cập nhật những thông tin mới nhất về đào tạo, phát triển kỹ năng và chia sẻ kinh nghiệm từ các chuyên gia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BlogCard {...post} />
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
          <Link href="/chia-se">
            <Button size="lg" className="btn-primary">
              Xem tất cả tin tức
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsSection
