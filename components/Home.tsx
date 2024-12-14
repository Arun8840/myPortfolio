"use client"

import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Spline from "@splinetool/react-spline"
import Label from "@/Utility/UI/Label"
import Button from "@/Utility/UI/Button"
import { ArrowRight } from "lucide-react"
gsap.registerPlugin(useGSAP)

function Homepage() {
  const contentRef = useRef<HTMLDivElement>(null)
  const splineRef = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    gsap.fromTo(
      [contentRef?.current, splineRef?.current],
      {
        opacity: 0,
      },
      {
        stagger: 0.2,
        delay: 0.5,
        opacity: 1,
        duration: 1,
        ease: "expo.inOut",
      }
    )
  })
  return (
    <section className="min-h-screen flex justify-start p-10 lg:overflow-hidden">
      {/* Header */}
      <div
        ref={contentRef}
        className="container flex flex-col gap-4 lg:gap-9 p-2  mx-auto z-10"
      >
        <Label className="text-white font-semibold text-7xl">Im arun</Label>

        <p className=" text-lg font-mono_bold text-white tracking-wide w-full lg:w-1/2">
          A creative Frontend Developer specializing in React, Next.js, and
          modern JavaScript, building stunning and responsive web experiences.
          Let bring your vision to life with clean code and innovative designs.
        </p>

        <Button
          icon={{ value: <ArrowRight />, color: "white" }}
          variant={"primary"}
          className="size-fit"
        >
          Let&apos;s talk
        </Button>
      </div>

      <Spline
        ref={splineRef}
        className="absolute size-full inset-0 hidden lg:block"
        scene="https://prod.spline.design/WhUkzzsLbJBVTQEI/scene.splinecode"
      />
    </section>
  )
}

export default Homepage
