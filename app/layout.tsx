import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fulminata | Web3 Tokenization Consultancy",
  description:
    "Paving the way to Web3 through institutional adoption of tokenized assets. Expert consultancy for asset management, investment banking, and institutional onboarding.",
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1916",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
