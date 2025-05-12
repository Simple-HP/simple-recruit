"use client"

import type React from "react"

import { useEffect } from "react"
import "./globals.css"
import { Noto_Sans_JP, Noto_Serif_JP, Inter, Zen_Maru_Gothic } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { usePathname } from "next/navigation"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-serif-jp",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
})

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-zen-maru-gothic",
})

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  // Scroll to top whenever the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div
      className={`${notoSansJP.variable} ${notoSerifJP.variable} ${inter.variable} ${zenMaruGothic.variable} font-sans`}
    >
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </div>
  )
}
