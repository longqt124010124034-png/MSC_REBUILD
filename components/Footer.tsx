"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Youtube, Phone, Mail, MapPin, Send, Waves } from "lucide-react"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
  const { t } = useLanguage()

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter subscription")
  }

  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 text-white overflow-hidden">
      {/* Ocean Wave Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-1 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-300/20 to-transparent transform skew-y-1 animate-pulse delay-1000" />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-teal-500/30 to-transparent"
          animate={{
            backgroundPosition: ["0% 0%", "100% 0%"],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 100px)",
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-teal-300/30 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="inline-block mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <Image
                  src="/placeholder.svg?height=60&width=200&text=MSC+Center+Logo"
                  alt="MSC Center"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
            </Link>
            <p className="text-blue-100 mb-6 leading-relaxed max-w-md">
              MSC Center - Trung tâm đào tạo và phát triển kỹ năng chuyên nghiệp hàng đầu Việt Nam. Chúng tôi cam kết
              mang đến những chương trình đào tạo chất lượng cao, giúp bạn phát triển bản thân và đạt được thành công
              trong sự nghiệp.
            </p>

            {/* Partner Logos */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
                  <Image
                    src={`/placeholder.svg?height=40&width=80&text=Partner+${i}`}
                    alt={`Partner ${i}`}
                    width={80}
                    height={40}
                    className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 font-serif text-teal-200">{t("footer.contact")}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-teal-300" />
                </div>
                <div>
                  <p className="text-blue-100">
                    Tầng 5, Tòa nhà UEH
                    <br />
                    279 Nguyễn Tri Phương, P.5
                    <br />
                    Q.10, TP.HCM
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-teal-300" />
                </div>
                <div>
                  <p className="text-blue-100">Hotline: (028) 3999 0000</p>
                  <p className="text-blue-100">Mobile: 0909 123 456</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-teal-300" />
                </div>
                <p className="text-blue-100">info@msc.edu.vn</p>
              </div>
            </div>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 font-serif text-teal-200">{t("footer.newsletter")}</h3>
            <p className="text-blue-100 mb-4">Đăng ký để nhận thông tin về các khóa học và sự kiện mới nhất</p>

            {/* Newsletter Form */}
            <form onSubmit={handleNewsletterSubmit} className="mb-6">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Email của bạn"
                  className="rounded-r-none bg-white/10 border-white/20 text-white placeholder-blue-200 backdrop-blur-sm"
                  required
                />
                <Button type="submit" className="rounded-l-none bg-teal-500 hover:bg-teal-600 px-4">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-teal-200">{t("footer.social")}</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com/msccenter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 border border-white/20 hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://youtube.com/msccenter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 border border-white/20 hover:scale-110"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link
                  href="https://zalo.me/msccenter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 border border-white/20 hover:scale-110"
                >
                  <Waves className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/20 bg-black/20 backdrop-blur-sm">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm">{t("footer.copyright")}</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-blue-200 hover:text-white transition-colors">
                Chính sách bảo mật
              </Link>
              <Link href="/terms" className="text-blue-200 hover:text-white transition-colors">
                Điều khoản sử dụng
              </Link>
              <Link href="/sitemap" className="text-blue-200 hover:text-white transition-colors">
                Sơ đồ trang web
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
