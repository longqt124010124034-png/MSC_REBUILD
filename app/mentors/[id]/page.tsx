import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Mail,
  Linkedin,
  Facebook,
  Globe,
  Award,
  BookOpen,
  Users,
  Star,
  Calendar,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mentorsData } from "@/data/mentors"

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const mentor = mentorsData.find((m) => m.id === params.id)

  if (!mentor) {
    return {
      title: "Mentor không tồn tại - MSC Center",
    }
  }

  return {
    title: `${mentor.name} - ${mentor.title} | MSC Center`,
    description: mentor.bio,
    keywords: mentor.specialties.join(", "),
  }
}

export default function MentorDetailPage({ params }: Props) {
  const mentor = mentorsData.find((m) => m.id === params.id)

  if (!mentor) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/mentors">
            <Button variant="ghost" className="hover:bg-gray-100">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay lại danh sách mentors
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                {/* Avatar */}
                <div className="text-center mb-6">
                  <div className="relative mx-auto mb-4 w-32 h-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full p-1">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <Image
                          src={mentor.avatar || "/placeholder.svg"}
                          alt={mentor.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Star className="h-4 w-4 text-yellow-600 fill-current" />
                    </div>
                  </div>

                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{mentor.name}</h1>
                  <p className="text-blue-600 font-medium mb-1">{mentor.title}</p>
                  <p className="text-sm text-gray-600 mb-4">{mentor.degree}</p>

                  <div className="flex justify-center space-x-4 text-sm text-gray-600 mb-6">
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

                {/* Contact Info */}
                <div className="space-y-4 mb-6">
                  {mentor.social.email && (
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-gray-400" />
                      <a href={`mailto:${mentor.social.email}`} className="text-blue-600 hover:underline">
                        {mentor.social.email}
                      </a>
                    </div>
                  )}
                  {mentor.social.website && (
                    <div className="flex items-center space-x-3">
                      <Globe className="h-5 w-5 text-gray-400" />
                      <a
                        href={mentor.social.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Profile Website
                      </a>
                    </div>
                  )}
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3 mb-6">
                  {mentor.social.linkedin && (
                    <Link href={mentor.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-10 h-10 rounded-full p-0 bg-transparent">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                  {mentor.social.facebook && (
                    <Link href={mentor.social.facebook} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-10 h-10 rounded-full p-0 bg-transparent">
                        <Facebook className="h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </div>

                {/* Languages */}
                {mentor.languages && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Ngôn ngữ</h4>
                    <div className="space-y-2">
                      {mentor.languages.map((lang, index) => (
                        <div key={index} className="text-sm text-gray-600">
                          {lang}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="space-y-3">
                  <Link href="/lien-he">
                    <Button className="w-full btn-primary">Đặt lịch tư vấn</Button>
                  </Link>
                  <Link href="/dao-tao">
                    <Button variant="outline" className="w-full bg-transparent">
                      Xem khóa học
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Detailed Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>Giới thiệu</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{mentor.bio}</p>
              </CardContent>
            </Card>

            {/* Specialties */}
            <Card>
              <CardHeader>
                <CardTitle>Chuyên môn</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {mentor.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            {mentor.education && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <span>Học vấn</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mentor.education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-blue-200 pl-4">
                        <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                        <p className="text-blue-600 font-medium">{edu.school}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.year}</span>
                          </div>
                        </div>
                        {edu.thesis && <p className="text-sm text-gray-600 mt-2 italic">Luận án: {edu.thesis}</p>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Experience */}
            {mentor.experience_detail && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                    <span>Kinh nghiệm làm việc</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {mentor.experience_detail.map((exp, index) => (
                      <div key={index} className="border-l-2 border-blue-200 pl-4">
                        <h4 className="font-semibold text-gray-900">{exp.position}</h4>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                        <div className="flex items-center space-x-1 text-sm text-gray-600 mt-1 mb-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <p className="text-gray-700">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Achievements */}
            {mentor.achievements && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    <span>Thành tựu nổi bật</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {mentor.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Publications */}
            {mentor.publications && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <span>Xuất bản</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mentor.publications.map((pub, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-1">{pub.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <span>{pub.publisher}</span>
                          <span>•</span>
                          <span>{pub.year}</span>
                        </div>
                        <p className="text-gray-700 text-sm">{pub.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Certifications */}
            {mentor.certifications && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    <span>Chứng chỉ</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {mentor.certifications.map((cert, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-3">
                        <span className="text-sm font-medium text-gray-900">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Courses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <span>Khóa học giảng dạy</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {mentor.courses.map((course, index) => (
                    <div key={index} className="bg-blue-50 rounded-lg p-3">
                      <span className="text-sm font-medium text-blue-800">{course}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
