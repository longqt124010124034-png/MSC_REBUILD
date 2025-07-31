"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Sun, Moon, User, LogIn, UserPlus } from 'lucide-react'
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

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/gioi-thieu", label: t("nav.about"), icon: "🏢" },
    { href: "/dao-tao", label: t("nav.training"), icon: "📚" },
    { href: "/du-an", label: t("nav.projects"), icon: "🚀" },
    { href: "/mentors", label: t("nav.mentors"), icon: "👨‍🏫" },
    { href: "/mscer", label: t("nav.mscer"), icon: "🎓" },
    { href: "/dong-hanh", label: t("nav.partners"), icon: "🤝" },
    { href: "/chia-se", label: t("nav.blog"), icon: "📝" },
    { href: "/lien-he", label: t("nav.contact"), icon: "📞" },
  ]

  const isActiveRoute = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  const TOPBAR_HEIGHT = 38
  const SCROLLED_HEADER_HEIGHT = 70

  return (
    <>
      {/* Enhanced Topbar */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            key="topbar"
            initial={{ y: -TOPBAR_HEIGHT, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -TOPBAR_HEIGHT, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 text-white text-sm shadow-md overflow-hidden"
            style={{ height: TOPBAR_HEIGHT }}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-30">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            </div>

            <div className="container mx-auto flex justify-between items-center py-1 space-x-3 px-4 sm:px-6 lg:px-8 h-full relative z-10">
              <div className="flex items-center space-x-4 text-xs">
                <span className="hidden sm:block">📧 msc.edu.vn@gmail.com</span>
                <span className="hidden md:block">📞 (+84) 329 381 489</span>
                <span className="block">🌟 Life Long Learning</span>
              </div>

              <div className="flex items-center space-x-2">
                {/* Language Switcher */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center space-x-1 text-white hover:bg-white/20 h-7"
                    >
                      <span className="text-sm">{language === "vi" ? "🇻🇳" : "🇬🇧"}</span>
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setLanguage("vi")}>🇻🇳 Tiếng Việt</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage("en")}>🇬🇧 English</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Auth buttons */}
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
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20 h-7 text-xs border border-white/30"
                  >
                    <User className="h-3 w-3 mr-1" />
                    {t("nav.profile")}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Header */}
      <motion.header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 w-full ${
          isScrolled
            ? "top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl py-2"
            : `top-[${TOPBAR_HEIGHT}px] bg-white/90 dark:bg-gray-900/90 backdrop-blur-md py-4`
        }`}
        animate={{
          y: isScrolled ? 0 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between w-full">
            {/* Enhanced Logo */}
            <Link href="/" className="flex-shrink-0 mr-8">
              <motion.div
                animate={{
                  scale: isScrolled ? 0.85 : 1,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/placeholder.svg?height=48&width=180&text=MSC+CENTER"
                  alt="MSC Center"
                  width={180}
                  height={48}
                  className="h-12 w-auto transition-all duration-300"
                  style={{ height: isScrolled ? "40px" : "48px" }}
                />
              </motion.div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item, index) => {
                const isActive = isActiveRoute(item.href)
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative group text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium text-sm uppercase tracking-wide py-2 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 ${
                        isActive ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20" : ""
                      }`}
                    >
                      <span className="flex items-center space-x-1">
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </span>
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"
                        initial={{ scaleX: isActive ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        animate={{ scaleX: isActive ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                )
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Enhanced Dark Mode Toggle */}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="relative overflow-hidden bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900 dark:to-teal-900 hover:from-blue-200 hover:to-teal-200 dark:hover:from-blue-800 dark:hover:to-teal-800 transition-all duration-300"
                >
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-600" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-600" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </motion.div>

              {/* Enhanced Mobile Menu Button */}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden relative overflow-hidden bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-5 w-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-5 w-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Super Enhanced Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                key="mobile-menu"
                className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-t border-gray-200 dark:border-gray-700 overflow-hidden z-40"
                style={{
                  maxHeight: `calc(100vh - ${isScrolled ? SCROLLED_HEADER_HEIGHT : TOPBAR_HEIGHT + SCROLLED_HEADER_HEIGHT}px)`,
                }}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-teal-50/50 dark:from-blue-900/20 dark:via-gray-900 dark:to-teal-900/20" />

                <div className="relative overflow-y-auto" style={{ maxHeight: "70vh" }}>
                  <nav className="flex flex-col px-4 sm:px-6 py-6">
                    {/* Navigation Items */}
                    <div className="space-y-2 mb-6">
                      {navItems.map((item, index) => {
                        const isActive = isActiveRoute(item.href)
                        return (
                          <motion.div
                            key={item.href}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                          >
                            <Link
                              href={item.href}
                              className={`group flex items-center space-x-4 p-4 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 dark:hover:from-blue-900/30 dark:hover:to-teal-900/30 hover:border-blue-200 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                                isActive ? "bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/30 dark:to-teal-900/30 border-blue-200 dark:border-blue-700" : ""
                              }`}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900 dark:to-teal-900 rounded-lg flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300 ${
                                isActive ? "scale-110" : ""
                              }`}>
                                {item.icon}
                              </div>
                              <div className="flex-1">
                                <div className={`font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 ${
                                  isActive ? "text-blue-600 dark:text-blue-400" : ""
                                }`}>
                                  {item.label}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                  {item.href.replace("/", "").replace("-", " ")}
                                </div>
                              </div>
                              <ChevronDown className={`h-4 w-4 text-gray-400 group-hover:text-blue-500 transform group-hover:rotate-[-90deg] transition-all duration-300 ${
                                isActive ? "text-blue-500 rotate-[-90deg]" : ""
                              }`} />
                            </Link>
                          </motion.div>
                        )
                      })}
                    </div>

                    {/* Auth Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.3 }}
                      className="pt-6 border-t border-gray-200 dark:border-gray-700"
                    >
                      <div className="grid grid-cols-1 gap-3">
                        <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                          <Button
                            variant="ghost"
                            className="w-full justify-start text-base h-12 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 dark:hover:from-blue-900/30 dark:hover:to-teal-900/30 hover:border-blue-200 dark:hover:border-blue-700 transition-all duration-300"
                          >
                            <LogIn className="h-5 w-5 mr-3 text-blue-600" />
                            <span className="font-medium">{t("nav.login")}</span>
                          </Button>
                        </Link>
                        <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                          <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                            <UserPlus className="h-5 w-5 mr-3" />
                            {t("nav.register")}
                          </Button>
                        </Link>
                        <Link href="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                          <Button
                            variant="outline"
                            className="w-full h-12 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-2 border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 font-medium transition-all duration-300"
                          >
                            <User className="h-5 w-5 mr-3 text-blue-600" />
                            {t("nav.profile")}
                          </Button>
                        </Link>
                      </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                    >
                      <div className="text-center space-y-2">
                        <div className="text-sm text-gray-600 dark:text-gray-400">📧 msc.edu.vn@gmail.com</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">📞 (+84) 329 381 489</div>
                        <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                          🌟 Life Long Learning
                        </div>
                      </div>
                    </motion.div>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Spacer */}
      <div
        style={{
          height: isScrolled ? `${SCROLLED_HEADER_HEIGHT}px` : `${TOPBAR_HEIGHT + SCROLLED_HEADER_HEIGHT}px`,
        }}
        className="w-full"
      />
    </>
  )
}

export default Header
