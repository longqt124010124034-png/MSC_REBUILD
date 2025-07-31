"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  // Xử lý sự kiện cuộn để thay đổi trạng thái header
  useEffect(() => {
    const handleScroll = () => {
      // isScrolled sẽ là true nếu cuộn xuống quá 50px
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    // Cleanup event listener khi component unmount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Các mục điều hướng chính
  const navItems = [
    { href: "/gioi-thieu", label: t("nav.about") },
    { href: "/dao-tao", label: t("nav.training") },
    { href: "/du-an", label: t("nav.projects") },
    { href: "/mentors", label: t("nav.mentors") },
    { href: "/mscer", label: t("nav.mscer") },
    { href: "/dong-hanh", label: t("nav.partners") },
    { href: "/chia-se", label: t("nav.blog") },
    { href: "/lien-he", label: t("nav.contact") },
  ]

  // Ước tính chiều cao của topbar. Điều chỉnh nếu cần dựa trên thiết kế của bạn.
  const TOPBAR_HEIGHT = 38; // px

  // Ước tính chiều cao của main header khi đã cuộn (thường là nhỏ gọn hơn)
  // Điều chỉnh giá trị này để khớp với chiều cao thực tế của header khi cuộn
  const SCROLLED_HEADER_HEIGHT = 70; // px (ước tính cho py-2 + logo 40px + khoảng trống)

  return (
    <>
      {/* Topbar - Sẽ ẩn đi khi cuộn xuống */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            key="topbar" // Key để AnimatePresence hoạt động đúng
            initial={{ y: -TOPBAR_HEIGHT, opacity: 0 }} // Bắt đầu từ trên cao và mờ
            animate={{ y: 0, opacity: 1 }} // Trượt xuống và hiện rõ
            exit={{ y: -TOPBAR_HEIGHT, opacity: 0 }} // Trượt lên và mờ khi ẩn
            transition={{ duration: 0.3, ease: "easeOut" }} // Hiệu ứng mượt mà hơn
            className="fixed top-0 left-0 right-0 z-[60] bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 text-sm"
            style={{ height: TOPBAR_HEIGHT }}
          >
            <div className="container mx-auto flex justify-end items-center py-1 space-x-3 px-4 sm:px-6 lg:px-8 h-full"> {/* Thêm h-full để căn giữa theo chiều cao topbar */}
              {/* Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                    <span className="text-lg">{language === "vi" ? "🇻🇳" : "🇬🇧"}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setLanguage("vi")}>🇻🇳 Tiếng Việt</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("en")}>🇬🇧 English</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Auth buttons */}
              <Link href="/login" className="hidden sm:block"> {/* Ẩn trên mobile nhỏ, hiển thị trên sm+ */}
                <Button variant="ghost" size="sm">
                  {t("nav.login")}
                </Button>
              </Link>
              <Link href="/register" className="hidden sm:block"> {/* Ẩn trên mobile nhỏ, hiển thị trên sm+ */}
                <Button size="sm" className="btn-primary">
                  {t("nav.register")}
                </Button>
              </Link>
              <Link href="/cv" className="hidden sm:block"> {/* Ẩn trên mobile nhỏ, hiển thị trên sm+ */}
                <Button variant="outline" size="sm">
                  {t("nav.profile")}
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header content - Cố định ở top, di chuyển lên khi topbar ẩn */}
      <motion.header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 w-full ${
          isScrolled
            ? "top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-2" // Khi cuộn, top = 0
            : `top-[${TOPBAR_HEIGHT}px] bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-4` // Ban đầu, top = chiều cao topbar
        }`}
        transition={{ duration: 0.3, ease: "easeOut" }} // Hiệu ứng mượt mà hơn
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between w-full">
            {/* Logo Section */}
            <Link href="/" className="flex-shrink-0 mr-8"> {/* mr-8 cho desktop */}
              <motion.div
                animate={{
                  scale: isScrolled ? 0.85 : 1, // Logo nhỏ lại khi cuộn
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center"
              >
                <Image
                  src="/logo.webp"
                  alt="MSC Center"
                  width={300}
                  height={60}
                  className="h-12 w-auto" // Đã xóa mr (dùng mr-8 trên Link cha)
                  style={{ height: isScrolled ? "40px" : "48px" }} // Thay đổi chiều cao logo khi cuộn
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            {/* Ẩn trên các màn hình nhỏ hơn 'lg', hiển thị dạng flex trên 'lg' trở lên */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 transition-colors duration-300 font-medium text-sm uppercase tracking-wide"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="focus-visible:ring-0 focus-visible:ring-offset-0" // Tắt hiệu ứng focus mặc định của shadcn nếu không muốn
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span> {/* Thêm cho accessability */}
              </Button>

              {/* Mobile Menu Button - Nút Hamburger/X */}
              {/* Chỉ hiển thị trên các màn hình nhỏ hơn 'lg' */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden focus-visible:ring-0 focus-visible:ring-offset-0" // Tắt hiệu ứng focus mặc định của shadcn nếu không muốn
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} // Thêm cho accessability
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu - Phần menu ẩn/hiện trên di động */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                key="mobile-menu" // Key để AnimatePresence hoạt động đúng
                // Chỉ hiển thị trên các màn hình nhỏ hơn 'lg'
                // Đảm bảo menu tuyệt đối định vị dưới header, kéo dài toàn bộ chiều rộng
                // Có nền, đổ bóng, đường viền, và thanh cuộn nếu nội dung quá dài
                className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700 overflow-y-auto z-40"
                style={{
                  // Chiều cao tối đa của menu: 100vh trừ đi chiều cao của header
                  // Header cao khác nhau tùy trạng thái cuộn (có topbar hoặc không)
                  maxHeight: `calc(100vh - ${isScrolled ? SCROLLED_HEADER_HEIGHT : TOPBAR_HEIGHT + SCROLLED_HEADER_HEIGHT}px)`
                }}
                initial={{ opacity: 0, y: -20 }} // Animation trượt từ trên xuống và mờ dần
                animate={{ opacity: 1, y: 0 }} // Hiện rõ và trượt vào vị trí
                exit={{ opacity: 0, y: -20 }} // Trượt lên và mờ khi đóng
                transition={{ duration: 0.3, ease: "easeOut" }} // Hiệu ứng mượt mà hơn
              >
                {/* Nav bên trong mobile menu, có padding đầy đủ */}
                <nav className="flex flex-col space-y-4 px-4 sm:px-6 py-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      // Đảm bảo màu sắc hover cho cả light/dark mode
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 transition-colors duration-300 font-medium py-2 text-base"
                      onClick={() => setIsMobileMenuOpen(false)} // Đóng menu khi bấm vào link
                    >
                      {item.label}
                    </Link>
                  ))}
                  {/* Các nút Auth dưới cùng, tách biệt bằng đường viền */}
                  <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start text-base">
                        {t("nav.login")}
                      </Button>
                    </Link>
                    <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full btn-primary text-base">{t("nav.register")}</Button>
                    </Link>
                    <Link href="/cv" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full bg-transparent text-base">
                        {t("nav.profile")}
                      </Button>
                    </Link>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Đây là một div đệm để nội dung trang không bị che bởi header cố định */}
      <div
        style={{
          // Chiều cao đệm phụ thuộc vào trạng thái cuộn của header
          height: isScrolled ? `${SCROLLED_HEADER_HEIGHT}px` : `${TOPBAR_HEIGHT + SCROLLED_HEADER_HEIGHT}px`
        }}
        className="w-full" // Đảm bảo chiếm toàn bộ chiều rộng
      ></div>
    </>
  )
}

export default Header