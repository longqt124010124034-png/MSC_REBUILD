import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Users, Award, Target, TrendingUp, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Dự án - MSC Center",
  description: "Khám phá các dự án đào tạo và phát triển đã triển khai thành công tại MSC Center",
}

export default function ProjectsPage() {
  const projects = [
    {
      id: "leadership-program-2024",
      title: "Chương trình Leadership Excellence 2024",
      category: "Leadership Development",
      status: "Hoàn thành",
      duration: "6 tháng",
      participants: 150,
      completion: "95%",
      image: "/placeholder.svg?height=300&width=500&text=Leadership+Excellence+2024",
      description:
        "Chương trình phát triển lãnh đạo toàn diện cho 150 nhà quản lý cấp trung từ 25 doanh nghiệp hàng đầu Việt Nam.",
      objectives: [
        "Nâng cao kỹ năng lãnh đạo chiến lược",
        "Phát triển tư duy đổi mới sáng tạo",
        "Xây dựng văn hóa doanh nghiệp tích cực",
        "Cải thiện hiệu quả quản lý đội nhóm",
      ],
      outcomes: [
        "95% học viên hoàn thành chương trình",
        "85% được thăng tiến trong 6 tháng",
        "Tăng 40% hiệu suất làm việc của đội nhóm",
        "ROI đạt 320% cho doanh nghiệp tham gia",
      ],
      partners: ["Vingroup", "FPT Corporation", "Vietcombank", "Samsung Vietnam"],
    },
    {
      id: "digital-transformation-2023",
      title: "Dự án Chuyển đổi số cho SMEs",
      category: "Digital Transformation",
      status: "Hoàn thành",
      duration: "8 tháng",
      participants: 200,
      completion: "98%",
      image: "/placeholder.svg?height=300&width=500&text=Digital+Transformation",
      description: "Hỗ trợ 50 doanh nghiệp vừa và nhỏ thực hiện chuyển đổi số toàn diện, nâng cao năng lực cạnh tranh.",
      objectives: [
        "Đào tạo kỹ năng công nghệ số",
        "Triển khai giải pháp số hóa",
        "Xây dựng chiến lược marketing online",
        "Phát triển thương mại điện tử",
      ],
      outcomes: [
        "200 nhân viên được đào tạo",
        "50 doanh nghiệp hoàn thành chuyển đổi",
        "Tăng 60% doanh thu online",
        "Giảm 30% chi phí vận hành",
      ],
      partners: ["Google Vietnam", "Microsoft Vietnam", "Shopee", "Lazada"],
    },
    {
      id: "startup-incubation-2023",
      title: "Chương trình Ươm tạo Startup 2023",
      category: "Entrepreneurship",
      status: "Đang triển khai",
      duration: "12 tháng",
      participants: 80,
      completion: "70%",
      image: "/placeholder.svg?height=300&width=500&text=Startup+Incubation",
      description: "Ươm tạo và phát triển 20 startup công nghệ với tiềm năng cao, cung cấp mentoring và đầu tư seed.",
      objectives: [
        "Phát triển ý tưởng kinh doanh",
        "Xây dựng MVP và validation",
        "Kết nối với nhà đầu tư",
        "Mở rộng thị trường",
      ],
      outcomes: [
        "20 startup được ươm tạo",
        "15 startup nhận được đầu tư",
        "Tổng vốn huy động: 50 tỷ VNĐ",
        "Tạo 300+ việc làm mới",
      ],
      partners: ["Techcombank", "VinaCapital", "Dragon Capital", "500 Startups"],
    },
    {
      id: "women-leadership-2024",
      title: "Dự án Phát triển Lãnh đạo Nữ",
      category: "Women Empowerment",
      status: "Đang triển khai",
      duration: "4 tháng",
      participants: 120,
      completion: "60%",
      image: "/placeholder.svg?height=300&width=500&text=Women+Leadership",
      description:
        "Chương trình đặc biệt dành cho phụ nữ trong lĩnh vực kinh doanh, nâng cao kỹ năng lãnh đạo và networking.",
      objectives: [
        "Phát triển kỹ năng lãnh đạo",
        "Xây dựng mạng lưới chuyên nghiệp",
        "Cân bằng công việc và cuộc sống",
        "Tăng cường tự tin và assertiveness",
      ],
      outcomes: [
        "120 nữ lãnh đạo tham gia",
        "90% cải thiện kỹ năng lãnh đạo",
        "Thành lập Women Leaders Network",
        "50+ cơ hội hợp tác kinh doanh",
      ],
      partners: ["UN Women Vietnam", "British Council", "Unilever", "P&G Vietnam"],
    },
    {
      id: "sustainability-training-2024",
      title: "Chương trình Đào tạo Phát triển Bền vững",
      category: "Sustainability",
      status: "Mới khởi động",
      duration: "6 tháng",
      participants: 100,
      completion: "20%",
      image: "/placeholder.svg?height=300&width=500&text=Sustainability+Training",
      description: "Đào tạo chuyên sâu về phát triển bền vững và ESG cho các doanh nghiệp muốn chuyển đổi xanh.",
      objectives: [
        "Hiểu biết về ESG và sustainability",
        "Xây dựng chiến lược phát triển xanh",
        "Triển khai các sáng kiến môi trường",
        "Báo cáo sustainability theo chuẩn quốc tế",
      ],
      outcomes: [
        "100 chuyên gia ESG được đào tạo",
        "30 doanh nghiệp áp dụng ESG",
        "Giảm 25% carbon footprint",
        "Tăng 15% hiệu quả năng lượng",
      ],
      partners: ["WWF Vietnam", "GIZ", "UNDP Vietnam", "Schneider Electric"],
    },
    {
      id: "ai-transformation-2024",
      title: "Dự án AI Transformation cho Doanh nghiệp",
      category: "Artificial Intelligence",
      status: "Chuẩn bị",
      duration: "10 tháng",
      participants: 180,
      completion: "5%",
      image: "/placeholder.svg?height=300&width=500&text=AI+Transformation",
      description: "Hỗ trợ doanh nghiệp ứng dụng AI vào quy trình kinh doanh, nâng cao năng suất và tính cạnh tranh.",
      objectives: [
        "Đào tạo kỹ năng AI cơ bản",
        "Triển khai giải pháp AI thực tế",
        "Tối ưu hóa quy trình với AI",
        "Xây dựng chiến lược AI dài hạn",
      ],
      outcomes: [
        "180 chuyên gia AI được đào tạo",
        "40 doanh nghiệp triển khai AI",
        "Tăng 50% năng suất làm việc",
        "Giảm 35% chi phí vận hành",
      ],
      partners: ["Google Cloud", "Microsoft Azure", "NVIDIA", "FPT AI"],
    },
  ]

  const stats = [
    { label: "Dự án hoàn thành", value: "50+", icon: CheckCircle },
    { label: "Doanh nghiệp tham gia", value: "200+", icon: Target },
    { label: "Học viên được đào tạo", value: "10,000+", icon: Users },
    { label: "Tỷ lệ thành công", value: "95%", icon: TrendingUp },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Hoàn thành":
        return "bg-green-100 text-green-800"
      case "Đang triển khai":
        return "bg-blue-100 text-blue-800"
      case "Mới khởi động":
        return "bg-yellow-100 text-yellow-800"
      case "Chuẩn bị":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Dự án đã triển khai</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Khám phá những dự án đào tạo và phát triển thành công mà MSC Center đã thực hiện, tạo ra tác động tích cực
              cho hàng nghìn học viên và doanh nghiệp
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">Các dự án nổi bật</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Từ phát triển lãnh đạo đến chuyển đổi số, mỗi dự án đều mang lại giá trị thực tế cho khách hàng
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">{project.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{project.participants} người</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="h-4 w-4" />
                      <span>{project.completion}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-6">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Mục tiêu chính:</h4>
                    <ul className="space-y-2">
                      {project.objectives.slice(0, 3).map((objective, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <Target className="h-4 w-4 text-blue-500 flex-shrink-0" />
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Kết quả đạt được:</h4>
                    <ul className="space-y-2">
                      {project.outcomes.slice(0, 2).map((outcome, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <Award className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-3">
                    <Link href={`/du-an/${project.id}`} className="flex-1">
                      <Button className="w-full btn-primary">Chi tiết dự án</Button>
                    </Link>
                    <Link href="/lien-he">
                      <Button variant="outline" className="bg-transparent">
                        Liên hệ
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Bạn có dự án cần triển khai?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn và thiết kế chương trình đào tạo phù hợp với nhu cầu của tổ chức
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/lien-he">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
                Tư vấn dự án
              </Button>
            </Link>
            <Link href="/chia-se">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 bg-transparent"
              >
                Xem case study
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
