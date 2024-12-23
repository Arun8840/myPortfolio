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
}

export interface SkillTypes {
  title: string
  content: string[]
}
