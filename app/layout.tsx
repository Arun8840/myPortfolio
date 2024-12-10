import type { Metadata } from "next"
import "./globals.css"
import { Noto_Sans_Mono, Poppins } from "next/font/google"
import localFont from "next/font/local"
const mono_bold = Noto_Sans_Mono({
  weight: "700",
  subsets: ["latin"],
  display: "block",
  variable: "--font-mono-bold",
})
const mono_normal = Noto_Sans_Mono({
  weight: "300",
  subsets: ["latin"],
  display: "block",
  variable: "--font-mono-normal",
})

const poppins_normal = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "block",
  variable: "--font-poppins-normal",
})

const test = localFont({
  src: "../app/fonts/LeagueGothic-Regular.woff",
  variable: "--testfont",
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
        className={`${mono_normal?.variable} ${mono_bold?.variable} ${poppins_normal?.variable} ${test?.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  )
}
