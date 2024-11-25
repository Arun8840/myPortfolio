import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        outfit_normal: "var(--font-outfit-normal)",
        outfit_bold: "var(--font-outfit-bold)",
        poppins_normal: "var(--font-poppins-normal)",
      },
    },
  },
  plugins: [],
} satisfies Config
