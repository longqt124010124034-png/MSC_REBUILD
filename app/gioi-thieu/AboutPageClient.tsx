"use client"

import Image from "next/image"
import { Target, Eye, Heart } from "lucide-react"

export default function AboutPageClient() {
  const values = [
    {
      icon: Target,
      title: "Sứ mệnh",
      description: "Phát triển nguồn nhân lực chất lượng cao, góp phần xây dựng một xã hội học tập suốt đời.",
    },
    {
      icon: Eye,
      title: "Tầm nhìn",
      description: "Trở thành trung tâm đào tạo hàng đầu Việt Nam về phát triển kỹ năng và năng lực lãnh đạo.",
    },
    {
      icon: Heart,
      title: "Giá trị cốt lõi",
      description: "Chất lượng - Tận tâm - Sáng tạo - Phát triển bền vững cùng cộng đồng.",
    },
  ]

  const milestones = [
    { year: "2018", event: "Thành lập MSC Center", description: "Khởi đầu với tầm nhìn đào tạo chuyên nghiệp" },
    { year: "2019", event: "Mở rộng chương trình", description: "Ra mắt 10+ khóa học chuyên sâu" },
    { year: "2020", event: "Chuyển đổi số", description: "Triển khai nền tảng học trực tuyến" },
    { year: "2021", event: "Hợp tác quốc tế", description: "Ký kết với các đối tác nước ngoài" },
    { year: "2022", event: "Mở rộng quy mô", description: "Đạt 5000+ học viên tốt nghiệp" },
    { year: "2023", event: "Công nhận chất lượng", description: "Nhận chứng nhận ISO 9001:2015" },
    { year: "2024", event: "Phát triển AI", description: "Tích hợp AI vào giảng dạy" },
    { year: "2025", event: "Tương lai", description: "Mục tiêu 10,000+ học viên" },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Về MSC Center</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Chúng tôi là trung tâm đào tạo và phát triển kỹ năng chuyên nghiệp hàng đầu, cam kết mang đến những
                chương trình học chất lượng cao và cơ hội phát triển nghề nghiệp tốt nhất cho học viên.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-300">7+</div>
                  <div className="text-sm text-blue-200">Năm kinh nghiệm</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-300">5000+</div>
                  <div className="text-sm text-blue-200">Học viên</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-300">50+</div>
                  <div className="text-sm text-blue-200">Chuyên gia</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=MSC+Center+Building"
                alt="MSC Center"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">Sứ mệnh & Tầm nhìn</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những giá trị cốt lõi định hướng mọi hoạt động của MSC Center
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">Hành trình phát triển</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những cột mốc quan trọng trong quá trình xây dựng và phát triển MSC Center
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
