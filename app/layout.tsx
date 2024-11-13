import type { Metadata } from "next"
import "./globals.css"
import { Outfit } from "next/font/google"

const outfit_bold = Outfit({
  weight: "700",
  subsets: ["latin"],
  display: "block",
  variable: "--font-outfit-bold",
})
const outfit_normal = Outfit({
  weight: "300",
  subsets: ["latin"],
  display: "block",
  variable: "--font-outfit-normal",
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of a Frontend Developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit_normal.variable} ${outfit_bold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
