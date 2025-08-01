"use client"

import type React from "react"
import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Youtube, Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react'
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import FacebookSDKLoader from "@/components/ui/facebook-sdk-loader"; // Thêm dòng này

const Footer = () => {
    // const { t } = useLanguage() // Bỏ comment nếu bạn dùng đa ngôn ngữ

    useEffect(() => {
        // Tải SDK Facebook
        const loadFacebookSDK = () => {
            const script = document.createElement("script")
            script.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v17.0&appId=123456789" // Thay '123456789' bằng App ID của bạn
            script.async = true
            script.defer = true
            script.crossOrigin = "anonymous"
            document.body.appendChild(script)
        }

        // Tải SDK khi component mount
        if (typeof window !== 'undefined') {
            loadFacebookSDK()
        }
    }, [])

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Newsletter subscription submitted")
    }

    return (
        <footer className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 text-white overflow-hidden">
             <FacebookSDKLoader /> {/* Gọi component tải SDK */}
            {/* Ocean Wave Animation */}
        
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-1 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-300/20 to-transparent transform skew-y-1 animate-pulse delay-1000" />
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-teal-500/30 to-transparent"
                    animate={{ backgroundPosition: ["0% 0%", "100% 0%"] }}
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

            {/* Main Footer Content */}
            <div className="relative z-10 container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Cột 1: Logo, Thông tin chung & Fanpage */}
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
                                    src="/logo.webp"
                                    alt="MSC Center"
                                    width={200}
                                    height={60}
                                    className="h-12 w-auto"
                                />
                            </div>
                        </Link>
                        <p className="text-blue-100 mb-6 leading-relaxed max-w-md">
                            MSC Center - Trung tâm đào tạo và phát triển kỹ năng chuyên nghiệp hàng đầu Việt Nam cho người đi làm và sinh viên.
                        </p>

                        <div className="mt-6">
                            <div
                                className="fb-page"
                                data-href="https://www.facebook.com/msc.edu.vn"
                                data-tabs="timeline"
                                data-width="300"
                                data-height="150"
                                data-small-header="false"
                                data-adapt-container-width="true"
                                data-hide-cover="false"
                                data-show-facepile="true"
                            >
                                <blockquote
                                    cite="https://www.facebook.com/msc.edu.vn"
                                    className="fb-xfbml-parse-ignore"
                                >
                                    <a href="https://www.facebook.com/msc.edu.vn">MSC Việt Nam</a>
                                </blockquote>
                            </div>
                        </div>
                    </motion.div>

                    {/* Cột 2: Thông tin liên hệ */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold mb-6 font-serif text-teal-200">Thông tin liên hệ</h3>
                        <div className="space-y-4 ">
                            <div className="flex items-start space-x-3">
                                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="h-5 w-5 text-teal-300" />
                                </div>
                                <div>
                                    <p className="text-blue-100">279 Nguyễn Tri Phương, Quận 10, TP.Hồ Chí Minh</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="h-5 w-5 text-teal-300" />
                                </div>
                                <p className="text-blue-100">Điện Thoại: (+84) 329 381 489</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="h-5 w-5 text-teal-300" />
                                </div>
                                <p className="text-blue-100">Email: msc.edu.vn@gmail.com</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Cột 3: Đăng ký & Mạng xã hội */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold mb-6 font-serif text-teal-200">Kết nối với chúng tôi</h3>
                        <p className="text-blue-100 mb-4">Đăng ký để nhận thông tin về các khóa học và sự kiện mới nhất</p>

                        <div className="flex space-x-4 mb-8">
                            <Link
                                href="https://www.facebook.com/msc.edu.vn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 border border-white/20 hover:scale-110"
                            >
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 border border-white/20 hover:scale-110"
                            >
                                <Youtube className="h-5 w-5" />
                            </Link>
                            <Link
                                href="https://zalo.me/g/acumou501"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 border border-white/20 hover:scale-110"
                            >
                                <MessageCircle className="h-5 w-5" />
                            </Link>
                        </div>

                        <form onSubmit={handleNewsletterSubmit}>
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
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 border-t border-white/20 bg-black/20 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-blue-200 text-sm"> © {new Date().getFullYear()} MSC Center. Phát triển bởi Phòng Công nghệ thông tin</p>
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