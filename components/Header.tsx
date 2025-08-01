"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
// CẢI TIẾN: Thêm ChevronRight để dùng cho mobile menu
import { Menu, X, ChevronDown, ChevronRight, Sun, Moon, User, LogIn, UserPlus } from 'lucide-react'
import { useTheme } from "next-themes"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    }
  }, [])

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

  const isActiveRoute = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href === "/") return false;
    return pathname === href || pathname.startsWith(href + '/');
  };

  const TOPBAR_HEIGHT = 36
  // Sửa đổi một chút để tính toán chiều cao header dễ hơn
  const HEADER_BASE_HEIGHT = 80 // Chiều cao header ban đầu
  const HEADER_SCROLLED_HEIGHT = 64 // Chiều cao header khi cuộn

  return (
    <>
      {/* Topbar */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            key="topbar"
            initial={{ y: -TOPBAR_HEIGHT, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -TOPBAR_HEIGHT, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 text-white text-sm shadow-md"
            style={{ height: TOPBAR_HEIGHT }}
          >
            <div className="absolute inset-0 opacity-30">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </div>

            <div className="container mx-auto flex justify-between items-center h-full px-4 sm:px-6 lg:px-8 relative z-10">
              {/* FIX: Thêm flex-wrap để tránh tràn trên màn hình rất nhỏ */}
              <div className="flex items-center space-x-4 text-xs flex-wrap">
                <span className="hidden sm:block">📧 msc.edu.vn@gmail.com</span>
                <span className="hidden md:block">📞 (+84) 329 381 489</span>
                <span className="block">🌟 Mekong Skill Center</span>
              </div>

              <div className="flex items-center space-x-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-white hover:bg-white/20 h-7">
                      <span className="text-sm">{language === "vi" ? "🇻🇳" : "🇬🇧"}</span>
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setLanguage("vi")}>🇻🇳 Tiếng Việt</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage("en")}>🇬🇧 English</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link href="/login" className="hidden sm:block">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 h-7 text-xs">
                    <LogIn className="h-3 w-3 mr-1" />
                    {t("nav.login")}
                  </Button>
                </Link>
                <Link href="/register" className="hidden sm:block">
                  <Button size="sm" className="bg-white text-blue-600 hover:bg-blue-50 h-7 text-xs">
                    <UserPlus className="h-3 w-3 mr-1" />
                    {t("nav.register")}
                  </Button>
                </Link>
                <Link href="/profile" className="hidden sm:block">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 h-7 text-xs border border-white/30">
                    <User className="h-3 w-3 mr-1" />
                    {t("nav.profile")}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 w-full ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg"
            : "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md"
        }`}
        style={{
          top: isScrolled ? 0 : `${TOPBAR_HEIGHT}px`,
          height: isScrolled ? `${HEADER_SCROLLED_HEIGHT}px` : `${HEADER_BASE_HEIGHT}px`
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
          <Link href="/" className="flex-shrink-0 mr-4 lg:mr-6">
            <motion.div
              animate={{ scale: isScrolled ? 0.9 : 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex items-center origin-left"
            >
              <Image
                src="/logo.webp"
                alt="Mekong Skill Center"
                width={180}
                height={48}
                className="h-auto transition-all duration-300"
                style={{ width: isScrolled ? '150px' : '180px' }}
                priority
              />
            </motion.div>
          </Link>

          {/* FIX 1 & 2: Sửa lỗi tràn chữ và scale chữ cho menu desktop */}
          <nav className="hidden lg:flex items-center font-medium
                         lg:space-x-2 xl:space-x-4">
            {navItems.map((item) => {
              const isActive = isActiveRoute(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative group text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 uppercase tracking-wider
                             py-2 lg:px-2 xl:px-3 rounded-md
                             lg:text-[11px] xl:text-[12px] 2xl:text-sm
                             ${isActive ? "text-blue-600 dark:text-blue-400" : ""}`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-blue-600 transition-all duration-300 rounded-full
                               ${isActive ? 'w-1/2' : 'w-0 group-hover:w-full'}`}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* FIX 3: Cải tiến toàn bộ Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              className="lg:hidden absolute top-full left-0 right-0 bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl shadow-2xl border-t border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="overflow-y-auto" style={{ maxHeight: `calc(100vh - ${isScrolled ? HEADER_SCROLLED_HEIGHT : TOPBAR_HEIGHT + HEADER_BASE_HEIGHT}px)` }}>
                <nav className="flex flex-col p-4 sm:p-6">
                  {/* CẢI TIẾN: Menu items đơn giản, gọn gàng */}
                  <div className="space-y-2 mb-6 border-b border-gray-200 dark:border-gray-700 pb-6">
                    {navItems.map((item, index) => {
                      const isActive = isActiveRoute(item.href)
                      return (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.2 }}
                        >
                          <Link
                            href={item.href}
                            // CẢI TIẾN: Dùng justify-between để đẩy text và icon ra 2 bên
                            className={`group flex items-center justify-between p-3 rounded-lg transition-all duration-200
                                       ${isActive
                                         ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                                         : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                       }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className={`font-semibold text-sm ${isActive ? '' : 'text-gray-800 dark:text-gray-200'}`}>
                              {item.label}
                            </span>
                            {/* CẢI TIẾN: Dùng ChevronRight trực quan hơn */}
                            <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${isActive ? '' : 'text-gray-400 group-hover:translate-x-1'}`} />
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* CẢI TIẾN: Auth section trên mobile */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="grid grid-cols-2 gap-3"
                  >
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full">
                        <LogIn className="h-4 w-4 mr-2" />
                        {t("nav.login")}
                      </Button>
                    </Link>
                    <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <UserPlus className="h-4 w-4 mr-2" />
                        {t("nav.register")}
                      </Button>
                    </Link>
                    <Link href="/profile" className="col-span-2" onClick={() => setIsMobileMenuOpen(false)}>
                       <Button variant="outline" className="w-full mt-2">
                         <User className="h-4 w-4 mr-2" />
                         {t("nav.profile")}
                       </Button>
                    </Link>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer */}
      <div
        className="transition-all duration-300"
        style={{
          height: isScrolled ? `${HEADER_SCROLLED_HEIGHT}px` : `${TOPBAR_HEIGHT + HEADER_BASE_HEIGHT}px`,
        }}
      />
    </>
  )
}

export default Header