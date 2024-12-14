"use client"
import useStore from "@/Store/Store"
import ButtonUrl from "@/Utility/UI/ButtonUrl"
import CardContainer from "@/Utility/UI/CardContainer"
import { ArrowRight } from "lucide-react"
import React from "react"

function Projects() {
  const projects = useStore((state) => state?.projects)

  return (
    <section className="p-3 lg:p-10 flex flex-col">
      {/* header */}
      <h1 className="text-white container mx-auto font-mono_bold font-semibold text-[2rem] col-span-full p-2">
        Projects
      </h1>
      <div className="size-full flex-1 lg:pt-10 container mx-auto grid lg:grid-cols-2 gap-3">
        {projects?.map((items) => {
          return (
            <CardContainer
              animate={items?.active}
              key={items?.title}
              className={`p-4 ${!items?.active && "opacity-30"}`}
            >
              <h1 className="text-2xl text-white font-mono_bold font-semibold">
                {items?.title}
              </h1>
              <p className="text-white font-mono_normal pt-3 line-clamp-6">
                {items?.description}
              </p>
              {items?.path && (
                <div className="pt-3 flex justify-end">
                  <ButtonUrl
                    target={items?.openExternal ? "_blank" : "_self"}
                    href={`${items?.path}?id=${items?.id}`}
                    variant={"primary"}
                    icon={{
                      color: "white",
                      value: <ArrowRight size={18} />,
                    }}
                  >
                    Open
                  </ButtonUrl>
                </div>
              )}
            </CardContainer>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
