import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Facebook, Mail, Award, BookOpen, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Mentors - MSC Center",
  description: "Gặp gỡ đội ngũ mentors và chuyên gia hàng đầu tại MSC Center",
}

export default function MentorsPage() {
  const mentors = [
    {
      id: "nguyen-van-minh",
      name: "TS. Nguyễn Văn Minh",
      title: "Giám đốc Học thuật",
      degree: "Tiến sĩ Quản trị Kinh doanh - Harvard Business School",
      avatar: "/placeholder.svg?height=200&width=200&text=Dr.+Minh",
      experience: "15+ năm",
      students: "2000+",
      rating: 4.9,
      specialties: ["Strategic Leadership", "Business Strategy", "Executive Coaching", "Change Management"],
      bio: "TS. Minh có hơn 15 năm kinh nghiệm trong lĩnh vực quản trị doanh nghiệp và đào tạo lãnh đạo. Ông từng giữ các vị trí C-level tại nhiều tập đoàn đa quốc gia trước khi gia nhập MSC Center.",
      achievements: [
        "Tác giả 5 cuốn sách về lãnh đạo",
        "Top 100 CEO xuất sắc Việt Nam 2020",
        "Chứng chỉ Executive Coach từ ICF",
        "MBA Harvard Business School",
      ],
      courses: ["Leadership Excellence", "Strategic Management", "Executive Coaching"],
      social: {
        linkedin: "https://linkedin.com/in/nguyen-van-minh",
        facebook: "https://facebook.com/nguyen.van.minh",
        email: "minh.nguyen@msc.edu.vn",
      },
    },
    {
      id: "tran-thi-huong",
      name: "ThS. Trần Thị Hương",
      title: "Chuyên gia Phát triển Nhân sự",
      degree: "Thạc sĩ Tâm lý Tổ chức - RMIT University",
      avatar: "/placeholder.svg?height=200&width=200&text=Ms.+Huong",
      experience: "12+ năm",
      students: "1500+",
      rating: 4.8,
      specialties: ["HR Development", "Organizational Psychology", "Team Building", "Performance Management"],
      bio: "ThS. Hương là chuyên gia hàng đầu về phát triển nhân sự với kinh nghiệm làm việc tại các tập đoàn Fortune 500. Cô có khả năng đặc biệt trong việc xây dựng văn hóa doanh nghiệp và phát triển đội nhóm.",
      achievements: [
        "SHRM-SCP Certified Professional",
        "Top 50 HR Leaders Asia 2021",
        "Chứng chỉ Organizational Psychology",
        "15+ năm kinh nghiệm HR tại MNCs",
      ],
      courses: ["HR Business Partner", "Team Building", "Performance Management"],
      social: {
        linkedin: "https://linkedin.com/in/tran-thi-huong",
        email: "huong.tran@msc.edu.vn",
      },
    },
    {
      id: "le-hoang-nam",
      name: "TS. Lê Hoàng Nam",
      title: "Chuyên gia Quản lý Dự án",
      degree: "Tiến sĩ Công nghệ Thông tin - Stanford University",
      avatar: "/placeholder.svg?height=200&width=200&text=Dr.+Nam",
      experience: "18+ năm",
      students: "2500+",
      rating: 4.9,
      specialties: ["Project Management", "Agile Methodology", "Digital Transformation", "Innovation Management"],
      bio: "TS. Nam là chuyên gia hàng đầu về quản lý dự án và chuyển đổi số. Ông có kinh nghiệm triển khai thành công hàng trăm dự án công nghệ lớn tại các tập đoàn quốc tế.",
      achievements: [
        "PMP & PMI-ACP Certified",
        "Agile Coach Certification",
        "20+ dự án triệu USD thành công",
        "Tác giả 3 cuốn sách về Agile",
      ],
      courses: ["Project Management Professional", "Agile & Scrum", "Digital Transformation"],
      social: {
        linkedin: "https://linkedin.com/in/le-hoang-nam",
        facebook: "https://facebook.com/le.hoang.nam",
        email: "nam.le@msc.edu.vn",
      },
    },
    {
      id: "pham-thi-lan",
      name: "ThS. Phạm Thị Lan",
      title: "Chuyên gia Coaching & Mentoring",
      degree: "Thạc sĩ Tâm lý Ứng dụng - University of Melbourne",
      avatar: "/placeholder.svg?height=200&width=200&text=Ms.+Lan",
      experience: "10+ năm",
      students: "1200+",
      rating: 4.9,
      specialties: ["Executive Coaching", "Career Development", "Emotional Intelligence", "Mindfulness"],
      bio: "ThS. Lan là coach chuyên nghiệp được chứng nhận bởi ICF với chuyên môn sâu về phát triển cá nhân và nghề nghiệp. Cô đã hỗ trợ hàng nghìn chuyên gia đạt được mục tiêu nghề nghiệp.",
      achievements: [
        "ICF Professional Certified Coach",
        "Certified Emotional Intelligence Coach",
        "Mindfulness-Based Coaching Certificate",
        "1000+ giờ coaching thành công",
      ],
      courses: ["Professional Coaching", "Emotional Intelligence", "Career Development"],
      social: {
        linkedin: "https://linkedin.com/in/pham-thi-lan",
        email: "lan.pham@msc.edu.vn",
      },
    },
    {
      id: "vu-dinh-khoa",
      name: "TS. Vũ Đình Khoa",
      title: "Chuyên gia Đổi mới Sáng tạo",
      degree: "Tiến sĩ Kinh tế - London School of Economics",
      avatar: "/placeholder.svg?height=200&width=200&text=Dr.+Khoa",
      experience: "14+ năm",
      students: "1800+",
      rating: 4.8,
      specialties: ["Innovation Management", "Design Thinking", "Entrepreneurship", "Business Model Innovation"],
      bio: "TS. Khoa là chuyên gia hàng đầu về đổi mới sáng tạo và khởi nghiệp. Ông đã tư vấn cho hàng trăm startup và doanh nghiệp trong việc phát triển sản phẩm và mô hình kinh doanh mới.",
      achievements: [
        "Certified Design Thinking Coach",
        "Mentor tại 500 Startups",
        "Tác giả 'Innovation Playbook'",
        "50+ startup được mentoring thành công",
      ],
      courses: ["Design Thinking", "Innovation Management", "Entrepreneurship"],
      social: {
        linkedin: "https://linkedin.com/in/vu-dinh-khoa",
        facebook: "https://facebook.com/vu.dinh.khoa",
        email: "khoa.vu@msc.edu.vn",
      },
    },
    {
      id: "hoang-thi-mai",
      name: "ThS. Hoàng Thị Mai",
      title: "Chuyên gia Kỹ năng Mềm",
      degree: "Thạc sĩ Giáo dục - Columbia University",
      avatar: "/placeholder.svg?height=200&width=200&text=Ms.+Mai",
      experience: "11+ năm",
      students: "2200+",
      rating: 4.9,
      specialties: ["Communication Skills", "Public Speaking", "Emotional Intelligence", "Interpersonal Skills"],
      bio: "ThS. Mai là chuyên gia hàng đầu về phát triển kỹ năng mềm với kinh nghiệm đào tạo cho hàng nghìn chuyên gia. Cô có khả năng đặc biệt trong việc giúp học viên tự tin giao tiếp và thuyết trình.",
      achievements: [
        "Certified Professional Speaker",
        "Dale Carnegie Master Trainer",
        "TEDx Speaker",
        "Top 10 Trainers Vietnam 2022",
      ],
      courses: ["Communication Excellence", "Public Speaking", "Emotional Intelligence"],
      social: {
        linkedin: "https://linkedin.com/in/hoang-thi-mai",
        email: "mai.hoang@msc.edu.vn",
      },
    },
  ]

  const stats = [
    { label: "Mentors chuyên nghiệp", value: "50+", icon: Users },
    { label: "Năm kinh nghiệm trung bình", value: "15+", icon: Award },
    { label: "Học viên đã đào tạo", value: "10,000+", icon: BookOpen },
    { label: "Đánh giá trung bình", value: "4.9/5", icon: Star },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Đội ngũ Mentors</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Gặp gỡ những chuyên gia hàng đầu, những người sẽ đồng hành cùng bạn trên hành trình phát triển bản thân và
              sự nghiệp
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

      {/* Mentors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">Mentors nổi bật</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Đội ngũ mentors giàu kinh nghiệm với chuyên môn sâu và tâm huyết trong việc phát triển nhân tài
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor) => (
              <Card key={mentor.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-0">
                  {/* Avatar Section */}
                  <div className="relative bg-gradient-to-br from-blue-100 to-teal-100 p-8 text-center">
                    <div className="relative mx-auto mb-4 w-32 h-32">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full p-1">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white">
                          <Image
                            src={mentor.avatar || "/placeholder.svg"}
                            alt={mentor.name}
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

                    <h3 className="text-xl font-bold text-gray-900 mb-1">{mentor.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{mentor.title}</p>
                    <p className="text-sm text-gray-600 mb-4">{mentor.degree}</p>

                    <div className="flex justify-center space-x-4 text-sm text-gray-600 mb-4">
                      <div className="text-center">
                        <div className="font-bold text-blue-600">{mentor.experience}</div>
                        <div>Kinh nghiệm</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-blue-600">{mentor.students}</div>
                        <div>Học viên</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-blue-600">{mentor.rating}</div>
                        <div>Đánh giá</div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{mentor.bio}</p>

                    {/* Specialties */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Chuyên môn:</h4>
                      <div className="flex flex-wrap gap-2">
                        {mentor.specialties.slice(0, 3).map((specialty, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Thành tựu nổi bật:</h4>
                      <ul className="space-y-1">
                        {mentor.achievements.slice(0, 2).map((achievement, index) => (
                          <li key={index} className="flex items-center space-x-2 text-xs text-gray-600">
                            <Award className="h-3 w-3 text-yellow-500 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-3 mb-4">
                      {mentor.social.linkedin && (
                        <Link href={mentor.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-8 h-8 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300 p-0"
                          >
                            <Linkedin className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                      {mentor.social.facebook && (
                        <Link href={mentor.social.facebook} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-8 h-8 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300 p-0"
                          >
                            <Facebook className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                      {mentor.social.email && (
                        <Link href={`mailto:${mentor.social.email}`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-8 h-8 rounded-full hover:bg-gray-100 hover:text-gray-600 transition-colors duration-300 p-0"
                          >
                            <Mail className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <Link href={`/mentors/${mentor.id}`} className="flex-1">
                        <Button className="w-full btn-primary text-sm">Xem hồ sơ</Button>
                      </Link>
                      <Link href="/lien-he">
                        <Button variant="outline" className="bg-transparent text-sm">
                          Liên hệ
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Bạn muốn trở thành mentor?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Gia nhập đội ngũ mentors MSC Center để chia sẻ kiến thức và kinh nghiệm của bạn với thế hệ tài năng trẻ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/lien-he">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
                Đăng ký làm mentor
              </Button>
            </Link>
            <Link href="/chia-se">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 bg-transparent"
              >
                Tìm hiểu thêm
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
