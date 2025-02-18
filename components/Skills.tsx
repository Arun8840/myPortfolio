"use client"
import React from "react"
import { Header } from "./ui/Header"
import useStore from "@/Store/Store"

function Skills() {
  const skills = useStore((state) => state?.skills)
  return (
    <section className="min-h-screen p-3 md:p-5 container mx-auto flex flex-col gap-2 justify-center">
      <Header>Skills & Tools</Header>
      <p className="text-neutral-700">
        Proficient in both front-end and back-end technologies, I excel in
        crafting seamless user experiences and robust server-side logic. My
        expertise spans React, Next.js, Node.js, Express, and MongoDB, ensuring
        scalable and efficient solutions. I&apos;m well-versed in designing and
        implementing responsive UIs, integrating RESTful APIs, and optimizing
        database queries. With a strong focus on performance, security, and
        maintainability, I strive to deliver high-quality projects that meet and
        exceed expectations.
      </p>
      <div className="grid md:grid-cols-2 gap-3">
        <div className="flex flex-col gap-2 pt-2">
          {skills?.map((skill) => {
            return (
              <div key={skill?.title} className="flex flex-col gap-1">
                <Header className="text-md text-neutral-600">
                  {skill?.title}
                </Header>
                <div className="py-4 flex flex-wrap gap-2 flex-1">
                  {skill?.content?.map((chips) => {
                    return (
                      <span
                        key={chips}
                        className="bg-neutral-100 rounded-full p-2"
                      >
                        {chips}
                      </span>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
