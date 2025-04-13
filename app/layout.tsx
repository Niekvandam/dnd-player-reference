import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider as NextThemesProvider } from "@/components/theme-provider"
import { ThemeProvider } from "@/contexts/theme-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "D&D Player Reference",
  description: "A comprehensive guide for D&D players",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} bg-cream`}>
        <ThemeProvider>
          <NextThemesProvider attribute="class" defaultTheme="light" enableSystem={false}>
            {children}
          </NextThemesProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'