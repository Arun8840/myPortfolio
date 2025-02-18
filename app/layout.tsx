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
      <body className={`${poppins_normal?.variable} from-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
