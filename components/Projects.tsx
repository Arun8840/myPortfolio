"use client"
import useStore from "@/Store/Store"
import { ArrowRight } from "lucide-react"
import React from "react"
import { Header } from "./ui/Header"
import Image from "next/image"
import Button from "@/Utility/UI/Button"
import Link from "next/link"
function Projects() {
  const projects = useStore((state) => state?.projects)

  return (
    <section className="container mx-auto p-5 flex flex-col gap-5">
      <Header className="text-white px-2 text-5xl">Fearuted Projects</Header>
      <div className="flex-1 flex flex-col gap-5 justify-between divide-y divide-neutral-800 relative">
        {projects?.map((project, index) => {
          return (
            <div key={project?.id} className="flex-1 grid md:grid-cols-2 pb-2">
              <Header className="text-white font-medium text-2xl p-3">
                {index + 1} .{project?.title}
              </Header>
              <div>
                <div className="w-full h-72 rounded-4xl overflow-hidden">
                  <Image
                    src={project?.image ?? "/Moon.png"}
                    alt={`${project?.id}-Project Image`}
                    width={500}
                    height={500}
                    className="size-full object-cover"
                  />
                </div>
                <p className="text-neutral-300 p-2  line-clamp-4 font-poppins-normal leading-loose">
                  {project?.description}
                </p>
                <Link
                  target={project?.openExternal ? "_blank" : "_self"}
                  href={project?.path ?? "#"}
                >
                  <Button className="rounded-full group/button">
                    Open
                    <span className="bg-black group-hover/button:-rotate-[60deg] transition-transform duration-150 text-white size-10 rounded-full grid place-items-center">
                      <ArrowRight />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
