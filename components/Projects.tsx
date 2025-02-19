"use client"
import useStore from "@/Store/Store"
import CardContainer from "@/Utility/UI/CardContainer"
import { ExternalLink } from "lucide-react"
import React, { useRef } from "react"
import { Header } from "./ui/Header"
import ButtonUrl from "@/Utility/UI/ButtonUrl"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(useGSAP, ScrollTrigger)
function Projects() {
  const projects = useStore((state) => state?.projects)

  const projectContainer = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (projectContainer.current) {
        gsap.fromTo(
          projectContainer.current.children,
          {
            opacity: 0,
            y: 100,
          },
          {
            yoyo: true,
            y: 0,
            opacity: 1,
            stagger: 0.3,
            duration: 0.7,
            scrollTrigger: {
              trigger: projectContainer.current,
              start: "top 80%",
              end: "bottom 80%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    },
    { scope: projectContainer }
  )

  return (
    <section className="lg:min-h-screen p-3">
      <div className="container mx-auto flex flex-col flex-1 p-3 md:p-5 gap-5">
        <Header className="p-2 text-white text-center">
          Featured Projects
        </Header>
        <div
          ref={projectContainer}
          className="grid md:grid-cols-2 gap-3 flex-1"
        >
          {projects?.map((project) => {
            return (
              <CardContainer
                key={project?.id}
                className={`p-0 bg-white backdrop-blur-lg flex  flex-col gap-2 relative`}
              >
                <div className="flex">
                  <Header className="text-lg p-5 place-content-center flex-1">
                    {project?.title}
                  </Header>

                  <div
                    className="bg-white relative left-0 top-0 h-12  rounded-tr-xl rounded-bl-xl aspect-square
       after:absolute after:top-0 after:-left-5 after:size-5 after:bg-radial-[at_0%_70%]   after:from-inherit after:to-white after:from-75% after:to-0% before:absolute before:-bottom-5 before:-right-0 before:size-5 before:bg-radial-[at_0%_70%] before:from-inherit before:to-white before:from-75% before:to-0% grid place-items-center"
                  >
                    <ButtonUrl
                      target={project?.openExternal ? "_blank" : "_self"}
                      href={`${project?.path}?id=${project?.id}`}
                      className="font-medium"
                    >
                      <ExternalLink size={18} />
                    </ButtonUrl>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <p className="text-neutral-600">{project?.description}</p>
                </div>
              </CardContainer>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
