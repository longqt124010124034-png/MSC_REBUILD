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

export const metadata = {
  title: {
    default: "MSC Center - Life Long Learning",
    template: "%s | MSC Center", // This allows dynamic titles for different pages
  },
  description: "Trung tâm đào tạo và phát triển kỹ năng chuyên nghiệp MSC Center",
  keywords: ["MSC Center", "đào tạo", "coaching", "mentoring", "kỹ năng mềm", "phát triển bản thân"], // It's better to use an array for keywords
  generator: 'IT-Department',
  icons: {
    icon: '/favicon.ico', // Path to your favicon.ico
    shortcut: '/shortcut-icon.png', // Optional: for older browsers/devices
    apple: '/apple-touch-icon.png', // Optional: for Apple touch devices
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
  // You might also want to add Open Graph metadata for social sharing
  openGraph: {
    title: 'MSC Center - Viện Đào tạo Kỹ năng cho Sinh viên & Người đi làm',
    description: 'Trung tâm đào tạo và phát triển kỹ năng chuyên nghiệp MSC Center',
    url: 'https://www.msccenter.edu.vn', // Replace with your actual URL
    siteName: 'MSC Center',
    images: [
      {
        url: 'https://www.msccenter.edu.vn/og-image.jpg', // Path to your Open Graph image
        width: 1200,
        height: 630,
        alt: 'MSC Center - Viện Đào tạo Kỹ năng cho Sinh viên & Người đi làm',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  // And Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'MSC Center - Life Long Learning',
    description: 'Trung tâm đào tạo và phát triển kỹ năng chuyên nghiệp MSC Center',
    creator: '@MSCCenter', // Replace with your Twitter handle
    images: ['https://www.msccenter.com.vn/twitter-image.jpg'], // Path to your Twitter card image
  },
};

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
