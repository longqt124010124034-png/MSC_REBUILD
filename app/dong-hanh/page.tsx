import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Building2, Users, Award, TrendingUp, Globe, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Đồng hành - MSC Center",
  description: "Các đối tác và đơn vị đồng hành cùng MSC Center trong hành trình phát triển giáo dục",
}

export default function PartnersPage() {
  const partnerCategories = [
    {
      title: "Đối tác Giáo dục",
      description: "Các trường đại học và tổ chức giáo dục hàng đầu",
      icon: Building2,
      color: "from-blue-500 to-blue-600",
      partners: [
        {
          name: "Đại học Kinh tế TP.HCM (UEH)",
          logo: "/placeholder.svg?height=80&width=160&text=UEH",
          description: "Đối tác chiến lược trong phát triển chương trình đào tạo",
          collaboration: "Hợp tác từ 2018",
          projects: ["Executive MBA", "Leadership Development", "Research Programs"],
        },
        {
          name: "RMIT University Vietnam",
          logo: "/placeholder.svg?height=80&width=160&text=RMIT",
          description: "Chương trình đào tạo quốc tế và chuyển giao công nghệ",
          collaboration: "Hợp tác từ 2019",
          projects: ["International Programs", "Faculty Exchange", "Joint Research"],
        },
        {
          name: "Singapore Management University",
          logo: "/placeholder.svg?height=80&width=160&text=SMU",
          description: "Chương trình Executive Education và nghiên cứu",
          collaboration: "Hợp tác từ 2020",
          projects: ["Executive Programs", "Case Study Development", "Best Practices"],
        },
        {
          name: "Harvard Business School Online",
          logo: "/placeholder.svg?height=80&width=160&text=HBS",
          description: "Chương trình học trực tuyến và chứng chỉ quốc tế",
          collaboration: "Hợp tác từ 2021",
          projects: ["Online Courses", "Certification Programs", "Global Network"],
        },
      ],
    },
    {
      title: "Đối tác Doanh nghiệp",
      description: "Các tập đoàn và doanh nghiệp hàng đầu Việt Nam",
      icon: Handshake,
      color: "from-green-500 to-green-600",
      partners: [
        {
          name: "Vingroup",
          logo: "/placeholder.svg?height=80&width=160&text=Vingroup",
          description: "Đào tạo và phát triển nhân tài cho hệ sinh thái Vingroup",
          collaboration: "Đối tác từ 2019",
          projects: ["Leadership Training", "Digital Transformation", "Innovation Programs"],
        },
        {
          name: "FPT Corporation",
          logo: "/placeholder.svg?height=80&width=160&text=FPT",
          description: "Chương trình đào tạo công nghệ và chuyển đổi số",
          collaboration: "Đối tác từ 2018",
          projects: ["Tech Leadership", "AI Training", "Digital Skills"],
        },
        {
          name: "Vietcombank",
          logo: "/placeholder.svg?height=80&width=160&text=VCB",
          description: "Phát triển năng lực lãnh đạo và quản lý rủi ro",
          collaboration: "Đối tác từ 2020",
          projects: ["Banking Leadership", "Risk Management", "Customer Service"],
        },
        {
          name: "Samsung Vietnam",
          logo: "/placeholder.svg?height=80&width=160&text=Samsung",
          description: "Chương trình phát triển nhân sự và đổi mới sáng tạo",
          collaboration: "Đối tác từ 2019",
          projects: ["Innovation Training", "Quality Management", "Leadership Development"],
        },
      ],
    },
    {
      title: "Đối tác Quốc tế",
      description: "Các tổ chức và chương trình hợp tác quốc tế",
      icon: Globe,
      color: "from-purple-500 to-purple-600",
      partners: [
        {
          name: "British Council Vietnam",
          logo: "/placeholder.svg?height=80&width=160&text=British+Council",
          description: "Chương trình phát triển kỹ năng và giáo dục Anh",
          collaboration: "Hợp tác từ 2020",
          projects: ["English Training", "Professional Skills", "Cultural Exchange"],
        },
        {
          name: "Goethe Institut",
          logo: "/placeholder.svg?height=80&width=160&text=Goethe",
          description: "Chương trình đào tạo và trao đổi văn hóa Đức",
          collaboration: "Hợp tác từ 2021",
          projects: ["German Language", "Professional Training", "Cultural Programs"],
        },
        {
          name: "UNDP Vietnam",
          logo: "/placeholder.svg?height=80&width=160&text=UNDP",
          description: "Chương trình phát triển bền vững và đổi mới",
          collaboration: "Hợp tác từ 2022",
          projects: ["Sustainability Training", "SDGs Programs", "Innovation Labs"],
        },
        {
          name: "World Bank Group",
          logo: "/placeholder.svg?height=80&width=160&text=World+Bank",
          description: "Chương trình phát triển kinh tế và tài chính",
          collaboration: "Hợp tác từ 2023",
          projects: ["Economic Development", "Financial Inclusion", "Capacity Building"],
        },
      ],
    },
    {
      title: "Đối tác Công nghệ",
      description: "Các công ty công nghệ và nền tảng học tập",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600",
      partners: [
        {
          name: "Microsoft Vietnam",
          logo: "/placeholder.svg?height=80&width=160&text=Microsoft",
          description: "Chương trình đào tạo công nghệ và chuyển đổi số",
          collaboration: "Đối tác từ 2020",
          projects: ["Azure Training", "AI/ML Programs", "Digital Transformation"],
        },
        {
          name: "Google Cloud Vietnam",
          logo: "/placeholder.svg?height=80&width=160&text=Google+Cloud",
          description: "Đào tạo cloud computing và data analytics",
          collaboration: "Đối tác từ 2021",
          projects: ["Cloud Training", "Data Analytics", "Machine Learning"],
        },
        {
          name: "Coursera for Business",
          logo: "/placeholder.svg?height=80&width=160&text=Coursera",
          description: "Nền tảng học trực tuyến và chứng chỉ quốc tế",
          collaboration: "Đối tác từ 2022",
          projects: ["Online Learning", "Professional Certificates", "Skill Assessments"],
        },
        {
          name: "LinkedIn Learning",
          logo: "/placeholder.svg?height=80&width=160&text=LinkedIn",
          description: "Chương trình phát triển kỹ năng chuyên nghiệp",
          collaboration: "Đối tác từ 2023",
          projects: ["Professional Skills", "Career Development", "Industry Insights"],
        },
      ],
    },
  ]

  const stats = [
    { label: "Đối tác chiến lược", value: "50+", icon: Handshake },
    { label: "Quốc gia hợp tác", value: "15+", icon: Globe },
    { label: "Dự án chung", value: "200+", icon: Award },
    { label: "Học viên được hỗ trợ", value: "10,000+", icon: Users },
  ]

  const benefits = [
    {
      title: "Mạng lưới toàn cầu",
      description: "Kết nối với các đối tác hàng đầu thế giới",
      icon: Globe,
    },
    {
      title: "Chương trình đa dạng",
      description: "Đa dạng hóa nội dung và phương pháp đào tạo",
      icon: Award,
    },
    {
      title: "Cơ hội nghề nghiệp",
      description: "Mở rộng cơ hội việc làm cho học viên",
      icon: TrendingUp,
    },
    {
      title: "Chất lượng quốc tế",
      description: "Đảm bảo chất lượng theo tiêu chuẩn quốc tế",
      icon: Building2,
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Đối tác & Đồng hành</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Cùng với mạng lưới đối tác uy tín trong và ngoài nước, MSC Center mang đến những chương trình đào tạo chất
              lượng cao và cơ hội phát triển toàn cầu
            </p>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-300">50+</div>
                <div className="text-sm text-blue-200">Đối tác</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-300">15+</div>
                <div className="text-sm text-blue-200">Quốc gia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-300">200+</div>
                <div className="text-sm text-blue-200">Dự án</div>
              </div>
            </div>
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">Lợi ích từ đối tác</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mạng lưới đối tác mạnh mẽ mang lại những giá trị vượt trội cho học viên MSC Center
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

      {/* Partners by Category */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">Đối tác theo lĩnh vực</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá mạng lưới đối tác đa dạng của MSC Center trên nhiều lĩnh vực khác nhau
            </p>
          </div>

          <div className="space-y-16">
            {partnerCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-12">
                  <div
                    className={`inline-flex items-center space-x-3 bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-full mb-4`}
                  >
                    <category.icon className="h-6 w-6" />
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.partners.map((partner, partnerIndex) => (
                    <Card key={partnerIndex} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                      <CardHeader className="text-center pb-4">
                        <div className="w-32 h-16 mx-auto mb-4 bg-gray-50 rounded-lg flex items-center justify-center">
                          <Image
                            src={partner.logo || "/placeholder.svg"}
                            alt={partner.name}
                            width={160}
                            height={80}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900">{partner.name}</CardTitle>
                        <p className="text-sm text-blue-600 font-medium">{partner.collaboration}</p>
                      </CardHeader>

                      <CardContent>
                        <p className="text-gray-600 mb-4">{partner.description}</p>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Dự án hợp tác:</h4>
                          <div className="flex flex-wrap gap-2">
                            {partner.projects.map((project, projectIndex) => (
                              <span
                                key={projectIndex}
                                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                              >
                                {project}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-3">
                          <Button className="flex-1 btn-primary">Tìm hiểu thêm</Button>
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
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Cơ hội hợp tác</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Bạn muốn trở thành đối tác của MSC Center? Hãy cùng chúng tôi xây dựng những chương trình đào tạo chất lượng
            cao và tạo ra tác động tích cực cho cộng đồng
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/lien-he">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
                Đăng ký hợp tác
              </Button>
            </Link>
            <Link href="/chia-se">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 bg-transparent"
              >
                Tải partnership deck
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
