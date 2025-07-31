"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Topbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      initial={false}
      animate={{ y: isScrolled ? -50 : 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full z-50 bg-gray-100 text-sm shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center">
        <div>🇻🇳</div>
        <div className="space-x-4">
          <Link href="/login" className="hover:underline">Đăng nhập</Link>
          <Link href="/register" className="hover:underline">Đăng ký</Link>
          <Link href="/profile" className="hover:underline">Hồ sơ năng lực</Link>
        </div>
      </div>
    </motion.div>
  )
}
