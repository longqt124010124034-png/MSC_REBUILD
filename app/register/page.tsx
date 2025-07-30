import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Mail, Lock, User, Phone, Eye, Facebook, Chrome } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Đăng ký - MSC Center",
  description: "Tạo tài khoản MSC Center để bắt đầu hành trình học tập chuyên nghiệp",
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container py-20">
        <div className="max-w-md mx-auto">
          <Card className="shadow-2xl border-0">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto mb-6">
                <Image
                  src="/placeholder.svg?height=60&width=200&text=MSC+CENTER"
                  alt="MSC Center"
                  width={200}
                  height={60}
                  className="h-12 w-auto mx-auto"
                />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Tạo tài khoản mới</CardTitle>
              <p className="text-gray-600 mt-2">Bắt đầu hành trình học tập cùng MSC Center</p>
            </CardHeader>

            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Họ và tên
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input id="fullName" type="text" placeholder="Nhập họ và tên" className="pl-10" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input id="email" type="email" placeholder="Nhập email của bạn" className="pl-10" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Số điện thoại
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input id="phone" type="tel" placeholder="Nhập số điện thoại" className="pl-10" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input id="password" type="password" placeholder="Tạo mật khẩu" className="pl-10 pr-10" required />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                    Xác nhận mật khẩu
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Nhập lại mật khẩu"
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1"
                    required
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Tôi đồng ý với{" "}
                    <Link href="/terms" className="text-blue-600 hover:text-blue-800">
                      Điều khoản sử dụng
                    </Link>{" "}
                    và{" "}
                    <Link href="/privacy" className="text-blue-600 hover:text-blue-800">
                      Chính sách bảo mật
                    </Link>
                  </span>
                </div>

                <Button type="submit" className="w-full btn-primary">
                  Tạo tài khoản
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Hoặc đăng ký với</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="bg-transparent">
                  <Facebook className="h-5 w-5 mr-2 text-blue-600" />
                  Facebook
                </Button>
                <Button variant="outline" className="bg-transparent">
                  <Chrome className="h-5 w-5 mr-2" />
                  Google
                </Button>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Đã có tài khoản?{" "}
                  <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                    Đăng nhập ngay
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
