"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const PartnersCarousel = () => {
  const partners = [
    { id: 1, name: "UEH University", logo: "/placeholder.svg?height=60&width=120&text=UEH" },
    { id: 2, name: "FPT Corporation", logo: "/placeholder.svg?height=60&width=120&text=FPT" },
    { id: 3, name: "Vietcombank", logo: "/placeholder.svg?height=60&width=120&text=VCB" },
    { id: 4, name: "Samsung Vietnam", logo: "/placeholder.svg?height=60&width=120&text=Samsung" },
    { id: 5, name: "Unilever Vietnam", logo: "/placeholder.svg?height=60&width=120&text=Unilever" },
    { id: 6, name: "Shopee Vietnam", logo: "/placeholder.svg?height=60&width=120&text=Shopee" },
    { id: 7, name: "Grab Vietnam", logo: "/placeholder.svg?height=60&width=120&text=Grab" },
    { id: 8, name: "KPMG Vietnam", logo: "/placeholder.svg?height=60&width=120&text=KPMG" },
    { id: 9, name: "Deloitte Vietnam", logo: "/placeholder.svg?height=60&width=120&text=Deloitte" },
    { id: 10, name: "PwC Vietnam", logo: "/placeholder.svg?height=60&width=120&text=PwC" },
    { id: 11, name: "EY Vietnam", logo: "/placeholder.svg?height=60&width=120&text=EY" },
    { id: 12, name: "Vingroup", logo: "/placeholder.svg?height=60&width=120&text=Vingroup" },
    { id: 13, name: "Techcombank", logo: "/placeholder.svg?height=60&width=120&text=TCB" },
    { id: 14, name: "BIDV", logo: "/placeholder.svg?height=60&width=120&text=BIDV" },
    { id: 15, name: "Vietinbank", logo: "/placeholder.svg?height=60&width=120&text=VTB" },
    { id: 16, name: "Masan Group", logo: "/placeholder.svg?height=60&width=120&text=Masan" },
    { id: 17, name: "VNG Corporation", logo: "/placeholder.svg?height=60&width=120&text=VNG" },
    { id: 18, name: "Tiki", logo: "/placeholder.svg?height=60&width=120&text=Tiki" },
    { id: 19, name: "Lazada Vietnam", logo: "/placeholder.svg?height=60&width=120&text=Lazada" },
    { id: 20, name: "Google Vietnam", logo: "/placeholder.svg?height=60&width=120&text=Google" },
  ]

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-teal-800 to-blue-900 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-serif">Đơn vị đồng hành</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Những đối tác tin cậy đồng hành cùng MSC Center trong hành trình phát triển giáo dục
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* First Row - Left to Right */}
          <div className="flex space-x-8 mb-8">
            <motion.div
              className="flex space-x-8 flex-shrink-0"
              animate={{
                x: [0, -1600],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedPartners.slice(0, 20).map((partner, index) => (
                <div
                  key={`row1-${partner.id}-${index}`}
                  className="flex-shrink-0 w-32 h-20 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="flex space-x-8">
            <motion.div
              className="flex space-x-8 flex-shrink-0"
              animate={{
                x: [-1600, 0],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {duplicatedPartners.slice(10, 30).map((partner, index) => (
                <div
                  key={`row2-${partner.id}-${index}`}
                  className="flex-shrink-0 w-32 h-20 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-blue-900 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-900 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

export default PartnersCarousel
