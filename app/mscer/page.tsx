import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Star, Award, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "MSCer - MSC Center",
  description: "Cộng đồng MSCer - Những học viên xuất sắc và thành công từ MSC Center",
}

export default function MSCerPage() {
  const mscers = [
    {
      id: "duong-the-khai",
      name: "Dương Thế Khải",
      position: "Senior Business Analyst",
      company: "FPT Software",
      avatar: "/placeholder.svg?height=200&width=200&text=Khai",
      graduationYear: "2023",
      course: "Leadership Excellence Program",
      achievement: "Tốt nghiệp xuất sắc khóa Leadership 2023",
      currentSalary: "45M+ VNĐ/tháng",
      promotion: "Thăng tiến 2 cấp trong 8 tháng",
      testimonial:
        "MSC Center đã giúp tôi phát triển kỹ năng lãnh đạo và tư duy chiến lược một cách toàn diện. Những kiến thức học được đã giúp tôi thăng tiến nhanh chóng trong sự nghiệp.",
      skills: ["Strategic Leadership", "Business Analysis", "Team Management", "Data Analytics"],
      socialImpact: "Mentor cho 20+ junior developers",
    },
    {
      id: "quach-thanh-long",
      name: "Quách Thành Long",
      position: "Product Manager",
      company: "Shopee Vietnam",
      avatar: "/placeholder.svg?height=200&width=200&text=Long",
      graduationYear: "2023",
      course: "Project Management Professional",
      achievement: "Học viên xuất sắc khóa Project Management 2023",
      currentSalary: "50M+ VNĐ/tháng",
      promotion: "Từ Developer lên Product Manager",
      testimonial:
        "Những kiến thức về quản lý dự án tại MSC đã giúp tôi thành công trong vai trò Product Manager. Tôi có thể áp dụng ngay các phương pháp Agile và Scrum vào công việc thực tế.",
      skills: ["Product Management", "Agile/Scrum", "User Experience", "Market Research"],
      socialImpact: "Dẫn dắt team 15 người phát triển sản phẩm",
    },
    {
      id: "la-phuong-uyen",
      name: "Lã Phương Uyên",
      position: "Marketing Director",
      company: "Unilever Vietnam",
      avatar: "/placeholder.svg?height=200&width=200&text=Uyen",
      graduationYear: "2022",
      course: "Digital Marketing Mastery",
      achievement: "Cựu học viên khóa Digital Marketing 2022",
      currentSalary: "60M+ VNĐ/tháng",
      promotion: "Thăng tiến từ Manager lên Director",
      testimonial:
        "MSC Center không chỉ dạy kiến thức mà còn giúp tôi xây dựng network chuyên nghiệp. Tôi đã kết nối được với nhiều chuyên gia trong ngành và tìm được cơ hội nghề nghiệp tuyệt vời.",
      skills: ["Digital Marketing", "Brand Management", "Strategic Planning", "Team Leadership"],
      socialImpact: "Quản lý ngân sách marketing 50+ tỷ VNĐ",
    },
    {
      id: "nguyen-thien-huong",
      name: "Nguyễn N. Thiên Hương",
      position: "HR Business Partner",
      company: "Samsung Vietnam",
      avatar: "/placeholder.svg?height=200&width=200&text=Huong",
      graduationYear: "2023",
      course: "HR Business Partner Excellence",
      achievement: "Học viên tiêu biểu khóa HR Development 2023",
      currentSalary: "42M+ VNĐ/tháng",
      promotion: "Từ HR Specialist lên Business Partner",
      testimonial:
        "Chương trình đào tạo tại MSC rất thực tế và ứng dụng được ngay vào công việc. Tôi đã học được cách xây dựng chiến lược HR và phát triển nhân tài một cách hiệu quả.",
      skills: ["HR Strategy", "Talent Development", "Performance Management", "Change Management"],
      socialImpact: "Phát triển 200+ nhân viên trong tổ chức",
    },
    {
      id: "pham-thuy-trang",
      name: "Phạm Ngọc Thuỳ Trang",
      position: "Financial Analyst",
      company: "KPMG Vietnam",
      avatar: "/placeholder.svg?height=200&width=200&text=Trang",
      graduationYear: "2022",
      course: "Financial Management & Analysis",
      achievement: "Tốt nghiệp khóa Financial Management 2022",
      currentSalary: "38M+ VNĐ/tháng",
      promotion: "Thăng tiến Senior Analyst sau 1 năm",
      testimonial:
        "MSC đã trang bị cho tôi nền tảng vững chắc để phát triển sự nghiệp trong lĩnh vực tài chính. Các case study thực tế giúp tôi hiểu sâu về phân tích tài chính và đầu tư.",
      skills: ["Financial Analysis", "Investment Valuation", "Risk Management", "Financial Modeling"],
      socialImpact: "Tư vấn tài chính cho 30+ doanh nghiệp SME",
    },
    {
      id: "tran-minh-thu",
      name: "Trần Hoàng Minh Thư",
      position: "UX/UI Designer",
      company: "Grab Vietnam",
      avatar: "/placeholder.svg?height=200&width=200&text=Thu",
      graduationYear: "2023",
      course: "Design Thinking & Innovation",
      achievement: "Học viên xuất sắc khóa Design Thinking 2023",
      currentSalary: "40M+ VNĐ/tháng",
      promotion: "Từ Junior lên Senior Designer",
      testimonial:
        "Khóa học Design Thinking tại MSC đã mở ra góc nhìn mới về thiết kế và trải nghiệm người dùng. Tôi học được cách tư duy sáng tạo và giải quyết vấn đề một cách có hệ thống.",
      skills: ["UX/UI Design", "Design Thinking", "User Research", "Prototyping"],
      socialImpact: "Thiết kế sản phẩm phục vụ 10M+ người dùng",
    },
    {
      id: "huynh-nguyen-quan",
      name: "Huỳnh Nguyên Quân",
      position: "Software Engineer",
      company: "Google Vietnam",
      avatar: "/placeholder.svg?height=200&width=200&text=Quan",
      graduationYear: "2022",
      course: "Tech Leadership Program",
      achievement: "Cựu học viên khóa Tech Leadership 2022",
      currentSalary: "80M+ VNĐ/tháng",
      promotion: "Từ Developer lên Tech Lead",
      testimonial:
        "MSC Center đã giúp tôi phát triển từ một developer thành tech leader tự tin. Tôi học được cách quản lý team kỹ thuật và dẫn dắt các dự án công nghệ phức tạp.",
      skills: ["Software Engineering", "Tech Leadership", "System Architecture", "Team Management"],
      socialImpact: "Lead team phát triển sản phẩm cho 1B+ users",
    },
    {
      id: "vo-minh-duc",
      name: "Võ Minh Đức",
      position: "Startup Founder & CEO",
      company: "EduTech Solutions",
      avatar: "/placeholder.svg?height=200&width=200&text=Duc",
      graduationYear: "2021",
      course: "Entrepreneurship & Innovation",
      achievement: "Founder xuất sắc nhất 2023",
      currentSalary: "100M+ VNĐ/tháng",
      promotion: "Từ Employee thành Entrepreneur",
      testimonial:
        "MSC đã cho tôi những kiến thức và kỹ năng cần thiết để khởi nghiệp thành công. Từ ý tưởng ban đầu, tôi đã xây dựng được một startup với định giá 50 tỷ VNĐ.",
      skills: ["Entrepreneurship", "Business Development", "Fundraising", "Strategic Planning"],
      socialImpact: "Tạo việc làm cho 100+ nhân viên",
    },
  ]

  const successStats = [
    { label: "MSCers thành công", value: "1000+", icon: Users },
    { label: "Mức lương trung bình", value: "50M+ VNĐ", icon: TrendingUp },
    { label: "Tỷ lệ thăng tiến", value: "85%", icon: Award },
    { label: "Hài lòng với nghề nghiệp", value: "95%", icon: Star },
  ]

  const industries = [
    { name: "Technology", count: 35, color: "bg-blue-500" },
    { name: "Finance & Banking", count: 25, color: "bg-green-500" },
    { name: "Consulting", count: 20, color: "bg-purple-500" },
    { name: "Marketing & Advertising", count: 15, color: "bg-orange-500" },
    { name: "Healthcare", count: 10, color: "bg-red-500" },
    { name: "Education", count: 8, color: "bg-yellow-500" },
    { name: "Others", count: 12, color: "bg-gray-500" },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Award className="h-12 w-12 text-yellow-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold font-serif">MSCer Community</h1>
            </div>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Cộng đồng những học viên xuất sắc và thành công từ MSC Center - Những câu chuyện truyền cảm hứng về sự
              phát triển và thăng tiến trong sự nghiệp
            </p>
            <div className="flex items-center justify-center space-x-2 text-yellow-400">
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Distribution */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">Phân bố ngành nghề</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MSCers đang làm việc tại các ngành nghề đa dạng với vị trí cao trong các công ty hàng đầu
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className={`w-4 h-4 rounded-full ${industry.color}`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{industry.name}</span>
                      <span className="text-sm text-gray-600">{industry.count}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${industry.color}`}
                        style={{ width: `${industry.count * 2}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MSCers Profiles */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">Câu chuyện thành công</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những MSCers tiêu biểu với hành trình phát triển sự nghiệp ấn tượng sau khi tốt nghiệp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mscers.map((mscer) => (
              <Card key={mscer.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-0">
                  {/* Header with Avatar */}
                  <div className="relative bg-gradient-to-br from-blue-100 to-teal-100 p-6 text-center">
                    <div className="relative mx-auto mb-4 w-24 h-24">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full p-1">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white">
                          <Image
                            src={mscer.avatar || "/placeholder.svg"}
                            alt={mscer.name}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Star className="h-4 w-4 text-yellow-600 fill-current" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-1">{mscer.name}</h3>
                    <p className="text-blue-600 font-medium text-sm mb-1">{mscer.position}</p>
                    <p className="text-gray-600 text-sm mb-2">{mscer.company}</p>
                    <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium inline-block">
                      {mscer.achievement}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-sm font-bold text-green-700">{mscer.currentSalary}</div>
                        <div className="text-xs text-green-600">Mức lương hiện tại</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-sm font-bold text-blue-700">{mscer.graduationYear}</div>
                        <div className="text-xs text-blue-600">Tốt nghiệp</div>
                      </div>
                    </div>

                    {/* Promotion */}
                    <div className="mb-4 p-3 bg-orange-50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-1">
                        <TrendingUp className="h-4 w-4 text-orange-600" />
                        <span className="text-sm font-medium text-orange-800">Thăng tiến</span>
                      </div>
                      <p className="text-xs text-orange-700">{mscer.promotion}</p>
                    </div>

                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2 text-sm">Kỹ năng chính:</h4>
                      <div className="flex flex-wrap gap-1">
                        {mscer.skills.slice(0, 3).map((skill, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Social Impact */}
                    <div className="mb-4 p-3 bg-purple-50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-1">
                        <Users className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-medium text-purple-800">Tác động xã hội</span>
                      </div>
                      <p className="text-xs text-purple-700">{mscer.socialImpact}</p>
                    </div>

                    {/* Testimonial */}
                    <blockquote className="text-xs text-gray-600 italic leading-relaxed mb-4 border-l-2 border-blue-200 pl-3">
                      "{mscer.testimonial}"
                    </blockquote>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <Link href={`/mscer/${mscer.id}`} className="flex-1">
                        <Button className="w-full btn-primary text-xs">Xem chi tiết</Button>
                      </Link>
                      <Link href="/lien-he">
                        <Button variant="outline" className="bg-transparent text-xs">
                          Kết nối
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join MSCer Community */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Gia nhập cộng đồng MSCer</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Bắt đầu hành trình phát triển sự nghiệp của bạn cùng MSC Center và trở thành một phần của cộng đồng MSCer
            thành công
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dao-tao">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
                Khám phá khóa học
              </Button>
            </Link>
            <Link href="/lien-he">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 bg-transparent"
              >
                Tư vấn miễn phí
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
