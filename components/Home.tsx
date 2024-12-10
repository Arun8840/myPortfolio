"use client"

import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Spline from "@splinetool/react-spline"
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
    <section className="min-h-screen flex justify-start p-10">
      {/* Header */}
      <div
        ref={contentRef}
        className="container flex flex-col gap-4 lg:gap-9  mx-auto"
      >
        <h1 className="font-mono_normal font-semibold capitalize text-white text-7xl">
          Im arun
        </h1>

        <p className=" text-lg font-mono_bold text-white tracking-wide w-full lg:w-1/2">
          A creative Frontend Developer specializing in React, Next.js, and
          modern JavaScript, building stunning and responsive web experiences.
          Let bring your vision to life with clean code and innovative designs.
        </p>
      </div>

      <Spline
        ref={splineRef}
        className="absolute size-full inset-0"
        scene="https://prod.spline.design/1quW7DKtLpPPxCmJ/scene.splinecode"
      />
    </section>
  )
}

export default Homepage
