export enum TechTypes {
  NEXTJS = "NEXTJS",
  TAILWINDCSS = "TAILWINDCSS",
  GSAP = "GSAP",
  HONO = "HONO",
  TYPESCRIPT = "TYPESCRIPT",
  APPWIRTE = "APPWRITE",
  SHADCNUI = "SHADCNUI",
  REACTNATIVE = "REACTNATIVE",
}
export interface ProjectTypes {
  id?: number
  title: string
  description: string[]
  active: boolean
  path?: string | null
  openExternal?: boolean
  componentType?: string
  image?: string | null | undefined
  screens?: { name: string; image: string }[]
  tech: string[]
}

export interface SkillTypes {
  title: string
  content: string[]
}
