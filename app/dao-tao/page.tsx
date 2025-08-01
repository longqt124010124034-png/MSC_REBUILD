'use client';

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Users, Award, BookOpen, Target, CheckCircle, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence, useInView, Variants } from 'framer-motion';

export default function TrainingPage() {
  const programs = [
    {
      id: "leadership",
      title: "Leadership & Management Excellence",
      duration: "3 tháng",
      students: "25-30",
      level: "Nâng cao",
      price: "15,000,000 VNĐ",
      image: "/placeholder.svg?height=300&width=400&text=Leadership+Training",
      description: "Chương trình phát triển kỹ năng lãnh đạo toàn diện cho các nhà quản lý cấp trung và cao.",
      highlights: [
        "Strategic Leadership & Vision Setting",
        "Team Building & Motivation",
        "Change Management",
        "Decision Making Under Pressure",
        "Executive Communication",
      ],
    },
    {
      id: "project-management",
      title: "Project Management Professional (PMP)",
      duration: "4 tháng",
      students: "20-25",
      level: "Chuyên nghiệp",
      price: "18,000,000 VNĐ",
      image: "/placeholder.svg?height=300&width=400&text=Project+Management",
      description: "Khóa học chuẩn bị cho chứng chỉ PMP với phương pháp Agile và Scrum hiện đại.",
      highlights: [
        "PMP Exam Preparation",
        "Agile & Scrum Methodology",
        "Risk Management",
        "Stakeholder Management",
        "Project Portfolio Management",
      ],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing Mastery",
      duration: "2.5 tháng",
      students: "30-35",
      level: "Cơ bản đến Nâng cao",
      price: "12,000,000 VNĐ",
      image: "/placeholder.svg?height=300&width=400&text=Digital+Marketing",
      description: "Làm chủ marketing số từ cơ bản đến nâng cao với các case study thực tế.",
      highlights: [
        "SEO & SEM Optimization",
        "Social Media Marketing",
        "Content Marketing Strategy",
        "Email Marketing Automation",
        "Analytics & Performance Tracking",
      ],
    },
    {
      id: "hr-development",
      title: "HR Business Partner Excellence",
      duration: "3.5 tháng",
      students: "20-25",
      level: "Nâng cao",
      price: "16,000,000 VNĐ",
      image: "/placeholder.svg?height=300&width=400&text=HR+Development",
      description: "Phát triển toàn diện kỹ năng HR từ tuyển dụng đến phát triển nhân tài.",
      highlights: [
        "Strategic HR Planning",
        "Talent Acquisition & Retention",
        "Performance Management",
        "Employee Engagement",
        "HR Analytics & Metrics",
      ],
    },
    {
      id: "soft-skills",
      title: "Essential Soft Skills for Professionals",
      duration: "2 tháng",
      students: "35-40",
      level: "Cơ bản",
      price: "8,000,000 VNĐ",
      image: "/placeholder.svg?height=300&width=400&text=Soft+Skills",
      description: "Phát triển các kỹ năng mềm thiết yếu cho môi trường làm việc hiện đại.",
      highlights: [
        "Communication & Presentation",
        "Emotional Intelligence",
        "Time Management",
        "Conflict Resolution",
        "Networking & Relationship Building",
      ],
    },
    {
      id: "coaching-mentoring",
      title: "Professional Coaching & Mentoring",
      duration: "4 tháng",
      students: "15-20",
      level: "Chuyên gia",
      price: "20,000,000 VNĐ",
      image: "/placeholder.svg?height=300&width=400&text=Coaching+Mentoring",
      description: "Trở thành coach và mentor chuyên nghiệp với chứng chỉ quốc tế ICF.",
      highlights: [
        "ICF Core Competencies",
        "Coaching Psychology",
        "Mentoring Best Practices",
        "Assessment & Feedback Tools",
        "Business Coaching Applications",
      ],
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Chứng chỉ uy tín",
      description: "Nhận chứng chỉ được công nhận quốc tế và trong nước",
    },
    {
      icon: Users,
      title: "Học từ chuyên gia",
      description: "Đội ngũ giảng viên giàu kinh nghiệm thực tiễn",
    },
    {
      icon: Target,
      title: "Thực hành thực tế",
      description: "70% thời gian dành cho thực hành và case study",
    },
    {
      icon: BookOpen,
      title: "Tài liệu độc quyền",
      description: "Bộ tài liệu học tập được biên soạn riêng",
    },
  ];

  const galleryPhotos = [
  "/dao-tao/1.webp",
  "/dao-tao/2.webp",
  "/dao-tao/3.webp",
  "/dao-tao/4.webp",
  "/dao-tao/5.webp",
  "/dao-tao/6.webp",
  "/dao-tao/7.webp",
  "/dao-tao/8.webp",
  "/dao-tao/9.webp",
  "/dao-tao/10.webp",
  "/dao-tao/11.webp",
  "/dao-tao/12.webp",
  "/dao-tao/13.webp",
  "/dao-tao/14.webp",
  "/dao-tao/15.webp",
  "/dao-tao/16.webp",
  "/dao-tao/17.webp",
  "/dao-tao/18.webp",
];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + galleryPhotos.length) % galleryPhotos.length
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % galleryPhotos.length
    );
  };
  
  // Ref và variants cho section MSC Core Values
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  const letterVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.8,
    },
  },
  hover: {
    scale: 1.3,
    transition: { duration: 0.2 },
  },
} as Variants; // Thêm 'as Variants' vào cuối đối tượng

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
} as Variants; // Thêm 'as Variants' vào đây

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      delay: 0.5 
    } 
  },
} as Variants;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Chương trình Đào tạo</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Khám phá các chương trình đào tạo chuyên nghiệp được thiết kế để phát triển kỹ năng và nâng cao năng lực
              cạnh tranh trong thời đại số
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-300">50+</div>
                <div className="text-sm text-blue-200">Chương trình</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-300">5000+</div>
                <div className="text-sm text-blue-200">Học viên</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-300">95%</div>
                <div className="text-sm text-blue-200">Hài lòng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-300">85%</div>
                <div className="text-sm text-blue-200">Thăng tiến</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MSC Core Values Section - ĐÃ CHỈNH SỬA HIỆU ỨNG VÀ MÀU SẮC */}
      <section 
        ref={sectionRef}
        className="py-20 overflow-hidden relative bg-gray-100"
      >
        <div className="container text-center max-w-5xl mx-auto z-10 relative">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-8 font-serif leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#0091FF] via-[#00E5A7] to-[#01142F] inline-block"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span variants={letterVariants} whileHover="hover">
              M
            </motion.span>
            entoring For Success{" "}
            <br className="hidden sm:inline" />
            <motion.span variants={letterVariants} whileHover="hover">
              S
            </motion.span>
            kills For Success{" "}
            <br className="hidden sm:inline" />
            <motion.span variants={letterVariants} whileHover="hover">
              C
            </motion.span>
            oaching For Success
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
            <motion.div 
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={paragraphVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.7 }}
            >
              <h4 className="text-xl font-bold text-[#0077B6] mb-2">Mentoring & Coaching kỹ năng Marketing và Sales</h4>
              <p className="text-gray-600">Định hình tư duy thị trường, nâng cao kỹ năng truyền thông – bán hàng thông qua các chương trình mentoring & coaching thực chiến.</p>
            </motion.div>
            <motion.div 
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={paragraphVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.9 }}
            >
              <h4 className="text-xl font-bold text-[#2A9D8F] mb-2">Đào tạo kỹ năng Nghiên cứu, Thẩm định & Đánh giá dự án</h4>
              <p className="text-gray-600">Trang bị phương pháp tiếp cận và phân tích dự án theo mô hình Holding: Sản phẩm – Con người – Tài chính, giúp học viên tư duy hệ thống và ra quyết định chiến lược.</p>
            </motion.div>
            <motion.div 
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={paragraphVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 1.1 }}
            >
              <h4 className="text-xl font-bold text-[#F4A261] mb-2">Đào tạo Quản lý dự án (Trước-Trong-Sau)</h4>
              <p className="text-gray-600">Phát triển năng lực lãnh đạo dự án qua toàn bộ vòng đời: từ hoạch định – triển khai – tổng kết, kết hợp thực hành và công cụ quản trị hiện đại.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">Tại sao chọn MSC Center?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những lợi ích vượt trội khi học tập tại MSC Center
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

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">Chương trình đào tạo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Các khóa học được thiết kế chuyên nghiệp, phù hợp với nhu cầu thực tế của doanh nghiệp
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <Card key={program.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {program.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {program.price}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">{program.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{program.students} học viên</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Nội dung chính:</h4>
                    <ul className="space-y-2">
                      {program.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex space-x-3">
                    <Link href={`/dao-tao/${program.id}`} className="flex-1">
                      <Button className="w-full btn-primary">Chi tiết khóa học</Button>
                    </Link>
                    <Link href="/lien-he">
                      <Button variant="outline" className="bg-transparent">
                        Đăng ký ngay
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">THƯ VIỆN ẢNH</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hình ảnh đào tạo tại các dự án !
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryPhotos.map((photo, index) => (
              <motion.div
                key={index}
                className="relative aspect-video overflow-hidden rounded-lg shadow-md cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={photo}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Sẵn sàng bắt đầu hành trình học tập?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Đăng ký tư vấn miễn phí để tìm hiểu chương trình phù hợp với bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/lien-he">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
                Đăng ký tư vấn miễn phí
              </Button>
            </Link>
            <Link href="/chia-se">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 bg-transparent"
              >
                Tải brochure
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Lightbox Component */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryPhotos[currentImageIndex]}
                alt={`Full size image ${currentImageIndex + 1}`}
                width={1000}
                height={800}
                className="rounded-lg shadow-2xl max-w-full max-h-[80vh] object-contain"
              />
              <button
                className="absolute top-4 right-4 p-2 bg-white/20 text-white rounded-full hover:bg-white/40 transition-colors"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </button>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 text-white rounded-full hover:bg-white/40 transition-colors"
                onClick={goToPrev}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 text-white rounded-full hover:bg-white/40 transition-colors"
                onClick={goToNext}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
