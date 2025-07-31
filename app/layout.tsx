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
  title: "MSC Center - Viện Đào tạo Kỹ năng cho sinh viên và người đi làm",
  description: "Trung tâm đào tạo và phát triển kỹ năng chuyên nghiệp MSC Center - Học tập và nỗ lực suốt đời",
  keywords: "MSC Center, đào tạo, coaching, mentoring, kỹ năng mềm, phát triển bản thân, life long learning,Viện Đào tạo Kỹ năng cho sinh viên và người đi làm",
  authors: [{ name: "MSC Center", url: "https://msc.edu.vn" }],
  creator: "MSC Center",
  publisher: "MSC Center",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://msc.edu.vn"),
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/vi",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "MSC Center - Life Long Learning",
    description: "Trung tâm đào tạo và phát triển kỹ năng chuyên nghiệp MSC Center",
    url: "https://msc.edu.vn",
    siteName: "MSC Center",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Viện Đào tạo Kỹ năng cho sinh viên và người đi làm",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MSC Center - Life Long Learning",
    description: "Trung tâm đào tạo và phát triển kỹ năng chuyên nghiệp MSC Center",
    images: ["/placeholder.svg?height=630&width=1200&text=MSC+Center+Twitter+Image"],
    creator: "@msccenter",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "logo/favicon.ico" },
      { url: "logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "logo/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0c3c78",
      },
    ],
  },
  manifest: "logo/site.webmanifest",
    generator: 'MSC-IT Department'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="icon" href="logo/favicon.ico" sizes="any" />
        <link rel="icon" href="logo/favicon.svg" type="image/svg+xml" />
        <link rel="logo/apple-touch-icon" href="logo/apple-touch-icon.png" />
        <link rel="manifest" href="logo/site.webmanifest" />
        <meta name="theme-color" content="#0c3c78" />
        <meta name="msapplication-TileColor" content="#0c3c78" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
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
