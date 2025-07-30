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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-2"
          : "bg-white/90 backdrop-blur-sm py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="flex items-center justify-between w-full">
          {/* Logo Section */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              animate={{
                scale: isScrolled ? 0.85 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center"
            >
              <Image
                src="/placeholder.svg?height=48&width=180&text=MSC+CENTER"
                alt="MSC Center"
                width={180}
                height={48}
                className="h-12 w-auto"
                style={{ height: isScrolled ? "40px" : "48px" }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-700 transition-colors duration-300 font-medium text-sm uppercase tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
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

            {/* Dark Mode Toggle */}
            <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-sm">
                  {t("nav.login")}
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="btn-primary text-sm">
                  {t("nav.register")}
                </Button>
              </Link>
              <Link href="/cv">
                <Button variant="outline" size="sm" className="text-sm bg-transparent">
                  {t("nav.profile")}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden mt-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-700 transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      {t("nav.login")}
                    </Button>
                  </Link>
                  <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full btn-primary">{t("nav.register")}</Button>
                  </Link>
                  <Link href="/cv" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full bg-transparent">
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
  )
}

export default Header
