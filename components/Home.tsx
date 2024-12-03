"use client"

import React from "react"
import Button from "@/Utility/UI/Button"
import CardContainer from "@/Utility/UI/CardContainer"
import { Bug, Ellipsis } from "lucide-react"
// import dynamic from "next/dynamic"

function Homepage() {
  // const Loader = () => (
  //   <div className="flex items-center justify-center h-screen">
  //     <div className="loader text-white">Loading...</div>
  //   </div>
  // )

  // const Spline = dynamic(() => import("@splinetool/react-spline"), {
  //   ssr: false, // Ensures it renders only on the client
  //   loading: () => <Loader />,
  // })

  return (
    <section className="min-h-screen flex flex-col p-5">
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-3 justify-between container mx-auto items-start py-5">
        <h1 className="font-mono_normal font-semibold capitalize text-white tracking-wide text-2xl">
          Im arun
        </h1>

        <p className="lg:w-1/2 text-lg font-mono_bold text-white tracking-wide">
          A creative Frontend Developer specializing in React, Next.js, and
          modern JavaScript, building stunning and responsive web experiences.
          Let bring your vision to life with clean code and innovative designs.
        </p>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            label={"Let's talk"}
            icon={{
              value: (
                <Bug
                  strokeWidth={0.8}
                  className="rotate-0 group-hover/buttonTalk:rotate-90 transition-transform duration-150"
                />
              ),
              color: "white",
            }}
            key={"contact_button"}
            varient={"primary"}
            className="font-mono_normal group/buttonTalk"
          />
          <Button
            className="font-mono_normal"
            label={"Menu"}
            key={"menu_button"}
            icon={{
              color: "white",
              value: <Ellipsis size={18} />,
            }}
          />
        </div>
      </div>

      {/* Banner */}
      <CardContainer className="flex-1 hidden lg:block container mx-auto">
        {/* Use Suspense to show the loader */}
        {/* <Spline
          className="size-full"
          scene="https://prod.spline.design/mm6JFGvxLO4ShLMX/scene.splinecode"
        /> */}
        <h1>content</h1>
      </CardContainer>
    </section>
  )
}

export default Homepage
