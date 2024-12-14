export interface ProjectTypes {
  id?: number
  title: string
  description: string[]
  active: boolean
  path?: string | null
  openExternal?: boolean
  componentType?: string
}

export interface SkillTypes {
  title: string
  content: string[]
}
