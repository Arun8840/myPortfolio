import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./Utility/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        mono_normal: "var(--font-mono-normal)",
        mono_bold: "var(--font-mono-bold)",
        poppins_normal: "var(--font-poppins-normal)",
        test_font: "var(--testfont)",
      },
    },
  },
  plugins: [],
} satisfies Config
