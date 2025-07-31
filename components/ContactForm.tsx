"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

const ContactForm = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.")

    setFormData({ name: "", email: "", phone: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <section id="contact-section" className="py-20 bg-white dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-serif">
            Liên hệ nhanh
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn về các chương trình đào tạo phù hợp
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Gửi tin nhắn</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Họ và tên *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="Nhập họ và tên"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Số điện thoại
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Nhập số điện thoại"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Nhập địa chỉ email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Nội dung *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full"
                      placeholder="Nhập nội dung tin nhắn..."
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full btn-primary" size="lg">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Gửi tin nhắn
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Thông tin liên hệ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-700/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Địa chỉ</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Tầng 5, Tòa nhà UEH
                      <br />
                      279 Nguyễn Tri Phương, P.5, Q.10
                      <br />
                      TP. Hồ Chí Minh
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-700/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Điện thoại</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Hotline: (028) 3999 0000
                      <br />
                      Mobile: 0909 123 456
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-700/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">info@msc.edu.vn</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-700/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Giờ làm việc</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Thứ 2 - Thứ 6: 8:00 - 17:30
                      <br />
                      Thứ 7: 8:00 - 12:00
                      <br />
                      Chủ nhật: Nghỉ
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-0">
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6306852350494!2d106.66408731533613!3d10.762622192330687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec3c161a3fb%3A0xef77cd47a1cc691e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaW5oIHThur8gVFAuSENNIC0gVUVI!5e0!3m2!1svi!2s!4v1642678901234!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MSC Center Location"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
