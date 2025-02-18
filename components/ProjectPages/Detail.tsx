"use client"
import { ProjectTypes } from "@/models/General"
import useStore from "@/Store/Store"
import ButtonUrl from "@/Utility/UI/ButtonUrl"
import { ArrowLeft } from "lucide-react"
import dynamic from "next/dynamic"
import { useSearchParams } from "next/navigation"
import React from "react"
import { Header } from "../ui/Header"

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
    <section className="min-h-screen p-3 bg-fixed [background-image:linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#fff_60%,transparent_100%)]">
      <div className="container mx-auto p-3">
        {/* //todo header */}
        <div className="flex flex-col gap-3">
          <ButtonUrl className="size-fit" href="/">
            <ArrowLeft size={18} />
          </ButtonUrl>
          <Header>{filteredValue?.title}</Header>
        </div>
        {/* //todo description */}
        <p className="font-poppins-normal pt-3">{filteredValue?.description}</p>

        {/* //todo component */}
        <div>
          <DynamicComponent values={filteredValue} />
        </div>
      </div>
    </section>
  )
}

export default Detail
