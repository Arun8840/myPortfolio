"use client"
import Button from "@/Utility/UI/Button"
import CardContainer from "@/Utility/UI/CardContainer"
import { Ellipsis } from "lucide-react"
import React from "react"

function Homepage() {
  return (
    <section className="min-h-screen flex flex-col gap-3 p-5">
      {/* //todo header */}
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
            key={"contact_button"}
            varient={"primary"}
            className="font-mono_normal"
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

      {/* //todo banner */}

      <CardContainer className="flex-1 hidden lg:block container mx-auto">
        <small>Banner</small>
      </CardContainer>
    </section>
  )
}

export default Homepage
