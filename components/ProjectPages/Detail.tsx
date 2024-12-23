"use client"
import { ProjectTypes } from "@/models/General"
import useStore from "@/Store/Store"
import ButtonUrl from "@/Utility/UI/ButtonUrl"
import { ArrowLeft } from "lucide-react"
import dynamic from "next/dynamic"
import { useSearchParams } from "next/navigation"
import React from "react"

interface DynamicComponentProps {
  values?: ProjectTypes
}
function Detail() {
  const params = useSearchParams()
  const projectId: string = params?.get("id") || ""
  const projects = useStore((state) => state?.projects)

  const filteredValue = projects?.find(
    (existProjects) => existProjects?.id === parseInt(projectId)
  )

  const DynamicComponent = dynamic<DynamicComponentProps>(
    () =>
      import(
        `../../components/ProjectPages/Comp/${filteredValue?.componentType}`
      ),
    {
      ssr: false,

      loading: () => {
        return <h1>Loading</h1>
      },
    }
  )

  return (
    <section className="min-h-screen p-3">
      <div className="container mx-auto p-3">
        {/* //todo header */}
        <div className="flex flex-col gap-3">
          <ButtonUrl
            className="size-fit"
            href="/"
            icon={{
              color: "white",
              value: <ArrowLeft size={18} />,
            }}
          />
          <h1 className="text-white text-[2rem] font-mono_normal p-3 font-semibold">
            {filteredValue?.title}
          </h1>
        </div>
        {/* //todo description */}
        <p className="text-white font-mono_normal p-3">
          {filteredValue?.description}
        </p>

        {/* //todo component */}
        <div>
          <DynamicComponent values={filteredValue} />
        </div>
      </div>
    </section>
  )
}

export default Detail
