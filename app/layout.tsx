import type { Metadata } from "next"
import "./globals.css"
import { Outfit, Poppins } from "next/font/google"

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

const poppins_normal = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "block",
  variable: "--font-poppins-normal",
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
        className={`${outfit_normal?.variable} ${outfit_bold?.variable} ${poppins_normal?.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  )
}
