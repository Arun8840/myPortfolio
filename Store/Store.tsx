import { ProjectTypes, SkillTypes } from "@/models/General"
import { create } from "zustand"
import projectData from "../data/projectData.json"
import skillData from "../data/skillData.json"
interface StoreTypes {
  projects: ProjectTypes[]
  skills: SkillTypes[]
  getProject: (title: string) => void
}

const useStore = create<StoreTypes>((set, get) => ({
  projects: projectData,
  skills: skillData,

  getProject: (title) => {
    const filteredValue = get().projects?.find(
      (allProject) => allProject?.title === title
    )
    return filteredValue
  },
}))

export default useStore
