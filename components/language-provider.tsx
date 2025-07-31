"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "vi" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  vi: {
    "nav.about": "Giới thiệu",
    "nav.training": "Đào tạo",
    "nav.projects": "Dự án",
    "nav.mentors": "Mentors",
    "nav.mscer": "MSCer",
    "nav.partners": "Đồng hành",
    "nav.blog": "Chia sẻ",
    "nav.contact": "Liên hệ",
    "nav.login": "Đăng nhập",
    "nav.register": "Đăng ký",
    "nav.profile": "Hồ sơ năng lực",
    "hero.title": "MSC Center – Life Long Learning",
 
    "hero.cta": "Đăng ký ngay",
    "footer.contact": "Liên hệ",
    "footer.social": "Mạng xã hội",
    "footer.newsletter": "Đăng ký nhận tin",
    "footer.copyright": "© 2025 MSC Center. Được phát triển bởi Phòng CNTT.",
  },
  en: {
    "nav.about": "About",
    "nav.training": "Training",
    "nav.projects": "Projects",
    "nav.mentors": "Mentors",
    "nav.mscer": "MSCer",
    "nav.partners": "Partners",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.register": "Register",
    "nav.profile": "Profile",
    "hero.title": "MSC Center – Life Long Learning",
  
    "hero.cta": "Register Now",
    "footer.contact": "Contact",
    "footer.social": "Social Media",
    "footer.newsletter": "Newsletter",
    "footer.copyright": "© 2025 MSC Center. Developed by the IT Department.",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "vi" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
