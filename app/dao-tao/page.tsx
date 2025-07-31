import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Clock, Users, Award, BookOpen, Target, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Đào tạo - MSC Center",
  description: "Khám phá các chương trình đào tạo chuyên nghiệp tại MSC Center",
}

export default function TrainingPage() {
  const programs = [
    {
      id: "leadership",
      title: "Leadership & Management Excellence",
      duration: "3 tháng",
      students: "25-30",
      level: "Nâng cao",
      price: "15,000,000 VNĐ",
      image: "/placeholder.svg?height=300&width=400&text=Leadership+Training",
      description: "Chương trình phát triển kỹ năng lãnh đạo toàn diện cho các nhà quản lý cấp trung và cao.",
      highlights: [
        "Strategic Leadership & Vision Setting",
        "Team Building & Motivation",
        "Change Management",
        "Decision Making Under Pressure",
        "Executive Communication",
      ],
      outcomes: [
        "Nâng cao khả năng lãnh đạo đội nhóm",
        "Phát triển tư duy chiến lược",
        "Cải thiện kỹ năng ra quyết định",
        "Xây dựng văn hóa doanh nghiệp tích cực",
      ],
    },
    {
      id: "project-management",
      title: "Project Management Professional (PMP)",
      duration: "4 tháng",
      students: "20-25",
      level: "Chuyên nghiệp",
      price: "18,000,000 VNĐ",
      image: "/placeholder.svg?height=300&width=400&text=Project+Management",
      description: "Khóa học chuẩn bị cho chứng chỉ PMP với phương pháp Agile và Scrum hiện đại.",
      highlights: [
        "PMP Exam Preparation",
        "Agile & Scrum Methodology",
        "Risk Management",
        "Stakeholder Management",
        "Project Portfolio Management",
      ],
      outcomes: [
        "Đạt chứng chỉ PMP quốc tế",
        "Thành thạo các công cụ quản lý dự án",
        "Nâng cao tỷ lệ thành công dự án",
        "Tăng cơ hội thăng tiến nghề nghiệp",
      ],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing Mastery",
      duration: "2.5 tháng",
      students: "30-35",
      level: "Cơ bản đến Nâng cao",
      price: "12,000,000 VNĐ",
      image: "/placeholder.svg?height=300&width=400&text=Digital+Marketing",
      description: "Làm chủ marketing số từ cơ bản đến nâng cao với các case study thực tế.",
      highlights: [
        "SEO & SEM Optimization",
        "Social Media Marketing",
        "Content Marketing Strategy",
        "Email Marketing Automation",
        "Analytics & Performance Tracking",
      ],
      outcomes: [
        "Xây dựng chiến lược marketing hiệu quả",
        "Tăng ROI từ các kênh digital",
        "Thành thạo các công cụ marketing",
        "Phát triển thương hiệu online",
      ],
    },
    {
      id: "hr-development",
      title: "HR Business Partner Excellence",
      duration: "3.5 tháng",
      students: "20-25",
      level: "Nâng cao",
      price: "16,000,000 VNĐ",
      image: "/placeholder.svg?height=300&width=400&text=HR+Development",
      description: "Phát triển toàn diện kỹ năng HR từ tuyển dụng đến phát triển nhân tài.",
      highlights: [
        "Strategic HR Planning",
        "Talent Acquisition & Retention",
        "Performance Management",
        "Employee Engagement",
        "HR Analytics & Metrics",
      ],
      outcomes: [
        "Trở thành HR Business Partner chuyên nghiệp",
        "Nâng cao hiệu quả tuyển dụng",
        "Xây dựng văn hóa doanh nghiệp",
        "Phát triển chương trình đào tạo nội bộ",
      ],
    },
    {
      id: "soft-skills",
      title: "Essential Soft Skills for Professionals",
      duration: "2 tháng",
      students: "35-40",
      level: "Cơ bản",
      price: "8,000,000 VNĐ",
      image: "/placeholder.svg?height=300&width=400&text=Soft+Skills",
      description: "Phát triển các kỹ năng mềm thiết yếu cho môi trường làm việc hiện đại.",
      highlights: [
        "Communication & Presentation",
        "Emotional Intelligence",
        "Time Management",
        "Conflict Resolution",
        "Networking & Relationship Building",
      ],
      outcomes: [
        "Cải thiện kỹ năng giao tiếp",
        "Nâng cao EQ và tự tin",
        "Quản lý thời gian hiệu quả",
        "Xây dựng mối quan hệ chuyên nghiệp",
      ],
    },
    {
      id: "coaching-mentoring",
      title: "Professional Coaching & Mentoring",
      duration: "4 tháng",
      students: "15-20",
      level: "Chuyên gia",
      price: "20,000,000 VNĐ",
      image: "/placeholder.svg?height=300&width=400&text=Coaching+Mentoring",
      description: "Trở thành coach và mentor chuyên nghiệp với chứng chỉ quốc tế ICF.",
      highlights: [
        "ICF Core Competencies",
        "Coaching Psychology",
        "Mentoring Best Practices",
        "Assessment & Feedback Tools",
        "Business Coaching Applications",
      ],
      outcomes: [
        "Đạt chứng chỉ coach ICF",
        "Phát triển kỹ năng coaching chuyên nghiệp",
        "Tạo tác động tích cực đến người khác",
        "Mở rộng cơ hội nghề nghiệp",
      ],
    },
  ]

  const benefits = [
    {
      icon: Award,
      title: "Chứng chỉ uy tín",
      description: "Nhận chứng chỉ được công nhận quốc tế và trong nước",
    },
    {
      icon: Users,
      title: "Học từ chuyên gia",
      description: "Đội ngũ giảng viên giàu kinh nghiệm thực tiễn",
    },
    {
      icon: Target,
      title: "Thực hành thực tế",
      description: "70% thời gian dành cho thực hành và case study",
    },
    {
      icon: BookOpen,
      title: "Tài liệu độc quyền",
      description: "Bộ tài liệu học tập được biên soạn riêng",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Chương trình Đào tạo</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Khám phá các chương trình đào tạo chuyên nghiệp được thiết kế để phát triển kỹ năng và nâng cao năng lực
              cạnh tranh trong thời đại số
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-300">50+</div>
                <div className="text-sm text-blue-200">Chương trình</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-300">5000+</div>
                <div className="text-sm text-blue-200">Học viên</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-300">95%</div>
                <div className="text-sm text-blue-200">Hài lòng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-300">85%</div>
                <div className="text-sm text-blue-200">Thăng tiến</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">Tại sao chọn MSC Center?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những lợi ích vượt trội khi học tập tại MSC Center
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 rounded-xl">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">Chương trình đào tạo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Các khóa học được thiết kế chuyên nghiệp, phù hợp với nhu cầu thực tế của doanh nghiệp
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <Card key={program.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {program.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {program.price}
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">{program.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{program.students} học viên</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-6">{program.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Nội dung chính:</h4>
                    <ul className="space-y-2">
                      {program.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-3">
                    <Link href={`/dao-tao/${program.id}`} className="flex-1">
                      <Button className="w-full btn-primary">Chi tiết khóa học</Button>
                    </Link>
                    <Link href="/lien-he">
                      <Button variant="outline" className="bg-transparent">
                        Đăng ký ngay
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Sẵn sàng bắt đầu hành trình học tập?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Đăng ký tư vấn miễn phí để tìm hiểu chương trình phù hợp với bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/lien-he">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
                Đăng ký tư vấn miễn phí
              </Button>
            </Link>
            <Link href="/chia-se">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 bg-transparent"
              >
                Tải brochure
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
