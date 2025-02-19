import type { Metadata } from "next"
import "./globals.css"
import { Poppins } from "next/font/google"

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
        className={`${poppins_normal?.variable} bg-black  bg-fixed bg-[radial-gradient(#373A40_0.5px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_80%,transparent_100%)] antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
