import type { Metadata } from "next"
import { Roboto, Merriweather } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingButtons from "@/components/FloatingButtons"

const roboto = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
})

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
})

export const metadata: Metadata = {
  title: "MSC Center - Life Long Learning",
  description: "Trung tâm đào tạo và phát triển kỹ năng chuyên nghiệp MSC Center",
  keywords: "MSC Center, đào tạo, coaching, mentoring, kỹ năng mềm, phát triển bản thân",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${roboto.variable} ${merriweather.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="min-h-screen bg-background text-foreground">
              <Header />
              <main>{children}</main>
              <Footer />
              <FloatingButtons />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
