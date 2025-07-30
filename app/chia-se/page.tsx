import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Clock, Eye, Heart, Share2, BookOpen, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Chia sẻ - MSC Center",
  description: "Tin tức, bài viết và chia sẻ kiến thức từ các chuyên gia tại MSC Center",
}

export default function BlogPage() {
  const featuredPost = {
    id: "future-of-leadership-2025",
    title: "Tương lai của Lãnh đạo trong Thời đại AI và Tự động hóa",
    excerpt:
      "Khám phá những thay đổi căn bản trong phong cách lãnh đạo khi AI và tự động hóa đang reshape toàn bộ thế giới kinh doanh. Những leader thành công sẽ cần những kỹ năng gì?",
    image: "/placeholder.svg?height=400&width=800&text=Future+of+Leadership",
    author: "TS. Nguyễn Văn Minh",
    authorAvatar: "/placeholder.svg?height=50&width=50&text=Author",
    publishDate: "20/01/2025",
    readTime: "12 phút đọc",
    category: "Leadership",
    views: "2,847",
    likes: "156",
    featured: true,
  }

  const blogPosts = [
    {
      id: "emotional-intelligence-workplace",
      title: "Emotional Intelligence: Chìa khóa thành công trong môi trường làm việc hiện đại",
      excerpt:
        "Tại sao EQ lại quan trọng hơn IQ trong thế kỷ 21? Cách phát triển trí tuệ cảm xúc để trở thành leader xuất sắc.",
      image: "/placeholder.svg?height=250&width=400&text=Emotional+Intelligence",
      author: "ThS. Phạm Thị Lan",
      authorAvatar: "/placeholder.svg?height=40&width=40&text=Lan",
      publishDate: "18/01/2025",
      readTime: "8 phút đọc",
      category: "Soft Skills",
      views: "1,923",
      likes: "89",
    },
    {
      id: "agile-transformation-guide",
      title: "Agile Transformation: Hướng dẫn toàn diện cho doanh nghiệp Việt Nam",
      excerpt:
        "Roadmap chi tiết để chuyển đổi sang mô hình Agile, từ mindset đến implementation. Case study thực tế từ các doanh nghiệp hàng đầu.",
      image: "/placeholder.svg?height=250&width=400&text=Agile+Transformation",
      author: "TS. Lê Hoàng Nam",
      authorAvatar: "/placeholder.svg?height=40&width=40&text=Nam",
      publishDate: "15/01/2025",
      readTime: "15 phút đọc",
      category: "Project Management",
      views: "3,156",
      likes: "201",
    },
    {
      id: "digital-marketing-trends-2025",
      title: "10 Xu hướng Digital Marketing không thể bỏ qua trong năm 2025",
      excerpt:
        "Từ AI-powered personalization đến voice search optimization, khám phá những trend sẽ định hình digital marketing năm 2025.",
      image: "/placeholder.svg?height=250&width=400&text=Digital+Marketing+2025",
      author: "ThS. Hoàng Thị Mai",
      authorAvatar: "/placeholder.svg?height=40&width=40&text=Mai",
      publishDate: "12/01/2025",
      readTime: "10 phút đọc",
      category: "Digital Marketing",
      views: "2,734",
      likes: "143",
    },
    {
      id: "remote-team-management",
      title: "Quản lý đội nhóm Remote hiệu quả: Bí quyết từ các Global Leaders",
      excerpt:
        "Những thách thức và giải pháp trong việc quản lý team từ xa. Tools, processes và best practices từ kinh nghiệm thực tế.",
      image: "/placeholder.svg?height=250&width=400&text=Remote+Team+Management",
      author: "ThS. Trần Thị Hương",
      authorAvatar: "/placeholder.svg?height=40&width=40&text=Huong",
      publishDate: "10/01/2025",
      readTime: "7 phút đọc",
      category: "HR Management",
      views: "1,567",
      likes: "78",
    },
    {
      id: "innovation-culture-building",
      title: "Xây dựng văn hóa đổi mới sáng tạo trong doanh nghiệp",
      excerpt:
        "Làm thế nào để tạo ra một môi trường khuyến khích innovation? Framework và case studies từ các công ty công nghệ hàng đầu.",
      image: "/placeholder.svg?height=250&width=400&text=Innovation+Culture",
      author: "TS. Vũ Đình Khoa",
      authorAvatar: "/placeholder.svg?height=40&width=40&text=Khoa",
      publishDate: "08/01/2025",
      readTime: "11 phút đọc",
      category: "Innovation",
      views: "2,089",
      likes: "134",
    },
    {
      id: "data-driven-decision-making",
      title: "Data-Driven Decision Making: Từ lý thuyết đến thực hành",
      excerpt:
        "Cách sử dụng data analytics để đưa ra quyết định kinh doanh chính xác. Tools, metrics và pitfalls cần tránh.",
      image: "/placeholder.svg?height=250&width=400&text=Data+Driven+Decisions",
      author: "TS. Nguyễn Văn Minh",
      authorAvatar: "/placeholder.svg?height=40&width=40&text=Minh",
      publishDate: "05/01/2025",
      readTime: "9 phút đọc",
      category: "Business Analytics",
      views: "1,845",
      likes: "97",
    },
  ]

  const categories = [
    { name: "Leadership", count: 24, color: "bg-blue-500" },
    { name: "Digital Marketing", count: 18, color: "bg-green-500" },
    { name: "Project Management", count: 15, color: "bg-purple-500" },
    { name: "Soft Skills", count: 21, color: "bg-orange-500" },
    { name: "Innovation", count: 12, color: "bg-red-500" },
    { name: "HR Management", count: 16, color: "bg-yellow-500" },
    { name: "Business Analytics", count: 9, color: "bg-indigo-500" },
    { name: "Entrepreneurship", count: 14, color: "bg-pink-500" },
  ]

  const stats = [
    { label: "Bài viết đã xuất bản", value: "200+", icon: BookOpen },
    { label: "Lượt đọc hàng tháng", value: "50K+", icon: Eye },
    { label: "Chuyên gia đóng góp", value: "25+", icon: User },
    { label: "Chủ đề đa dạng", value: "15+", icon: TrendingUp },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Chia sẻ & Tri thức</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Khám phá những insights sâu sắc, xu hướng mới nhất và kiến thức thực tiễn từ các chuyên gia hàng đầu tại
              MSC Center
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

      {/* Featured Post */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">Bài viết nổi bật</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những insights mới nhất và quan trọng nhất từ thế giới business và leadership
            </p>
          </div>

          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>

                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Image
                        src={featuredPost.authorAvatar || "/placeholder.svg"}
                        alt={featuredPost.author}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{featuredPost.author}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{featuredPost.publishDate}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{featuredPost.views} lượt xem</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{featuredPost.likes} lượt thích</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Share2 className="h-4 w-4" />
                      <span>Chia sẻ</span>
                    </div>
                  </div>
                </div>

                <Link href={`/chia-se/${featuredPost.id}`}>
                  <Button size="lg" className="w-full btn-primary">
                    Đọc bài viết đầy đủ
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">Chủ đề</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá nội dung theo các chủ đề chuyên môn khác nhau
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={index} href={`/chia-se/category/${category.name.toLowerCase()}`}>
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.count} bài viết</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">Bài viết mới nhất</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cập nhật những kiến thức và insights mới nhất từ các chuyên gia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center space-x-2 mb-4">
                    <Image
                      src={post.authorAvatar || "/placeholder.svg"}
                      alt={post.author}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.publishDate}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                  </div>

                  <Link href={`/chia-se/${post.id}`}>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-blue-700 group-hover:text-white group-hover:border-blue-700 transition-all duration-300 bg-transparent"
                    >
                      Đọc thêm
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/chia-se/all">
              <Button size="lg" className="btn-primary">
                Xem tất cả bài viết
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Đăng ký nhận tin</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Nhận những bài viết mới nhất và insights độc quyền từ các chuyên gia MSC Center
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-r-lg">Đăng ký</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
