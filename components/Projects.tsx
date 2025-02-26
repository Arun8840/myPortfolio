"use client"
import useStore from "@/Store/Store"
import {
  ArrowRight,
  Atom,
  AtSign,
  Flame,
  Rocket,
  Slash,
  Triangle,
  Type,
} from "lucide-react"
import React from "react"
import { Header } from "./ui/Header"
import Button from "@/Utility/UI/Button"
import Link from "next/link"
import { CardContent, Glowing, GlowingCard } from "@/Utility/UI/Glowing-card"
import { TechTypes } from "@/models/General"

type Taskstate = {
  [Key in TechTypes]: React.ReactElement
}
const techIcons: Taskstate = {
  [TechTypes.NEXTJS]: <Triangle fill="white" color="black" />,
  [TechTypes.TAILWINDCSS]: (
    <svg
      className="size-6"
      stroke="skyblue"
      fill="skyblue"
      strokeWidth="0"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.9996 4.85999C8.82628 4.85999 6.84294 6.44665 6.04961 9.61999C7.23961 8.03332 8.62794 7.43832 10.2146 7.83499C11.12 8.06109 11.7666 8.71757 12.4835 9.44545C13.6507 10.6295 15.0004 12 17.9496 12C21.1229 12 23.1063 10.4133 23.8996 7.23998C22.7096 8.82665 21.3213 9.42165 19.7346 9.02499C18.8292 8.79889 18.1827 8.1424 17.4657 7.41452C16.2995 6.23047 14.9498 4.85999 11.9996 4.85999ZM6.04961 12C2.87628 12 0.892943 13.5867 0.0996094 16.76C1.28961 15.1733 2.67794 14.5783 4.26461 14.975C5.17 15.2011 5.81657 15.8576 6.53354 16.5855C7.70073 17.7695 9.05039 19.14 11.9996 19.14C15.1729 19.14 17.1563 17.5533 17.9496 14.38C16.7596 15.9667 15.3713 16.5617 13.7846 16.165C12.8792 15.9389 12.2326 15.2824 11.5157 14.5545C10.3495 13.3705 8.99982 12 6.04961 12Z"></path>
    </svg>
  ),
  [TechTypes.GSAP]: <Rocket color="lime" fill="green" />,
  [TechTypes.HONO]: <Flame fill="orange" color="orangered" />,
  [TechTypes.TYPESCRIPT]: (
    <Type color="white" className="bg-sky-500 rounded p-1" />
  ),
  [TechTypes.APPWIRTE]: <AtSign color="hotpink" />,
  [TechTypes.SHADCNUI]: (
    <>
      <Slash size={12} color="white" />
      <Slash size={12} color="white" />
    </>
  ),
  [TechTypes.REACTNATIVE]: <Atom color="skyblue" />,
}
function Projects() {
  const projects = useStore((state) => state?.projects)
  return (
    <section className="container mx-auto p-5 flex flex-col gap-5">
      <Header className="text-white px-2 text-5xl font-poppins-normal">
        Fearuted Projects
      </Header>
      <div className="flex-1 grid gap-3 p-2">
        {projects?.map((project, index) => {
          return (
            <GlowingCard
              key={project?.id}
              className="min-h-[600px] w-full sticky top-3 p-0.5 shadow-lg shadow-black"
            >
              <Glowing className="size-1/2 -right-10 -bottom-10 blur-3xl from-purple-600 via-purple-300" />
              <CardContent className="grid md:grid-cols-2 gap-5 rounded-xl backdrop-blur-lg">
                <div className="flex flex-col justify-end gap-3 tracking-wide">
                  <ul className="flex items-center gap-3">
                    {project?.tech?.map((tech) => {
                      return (
                        <li title={tech} key={tech}>
                          {techIcons[tech as TechTypes]}
                        </li>
                      )
                    })}
                  </ul>
                  <Header className="text-white">{project?.title}</Header>
                  <p className="text-white font-poppins-normal">
                    {project?.description}
                  </p>
                  <Link
                    target={project?.openExternal ? "_blank" : "_self"}
                    href={project?.path ?? "#"}
                  >
                    <Button className="rounded-full">
                      Open <ArrowRight />
                    </Button>
                  </Link>
                </div>
                <div className="place-items-center hidden md:grid">
                  <Header className="text-white text-7xl">{index + 1}</Header>
                </div>
              </CardContent>
            </GlowingCard>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
