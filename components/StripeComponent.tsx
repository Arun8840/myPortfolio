"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Sparkle } from "lucide-react"
import React, { useRef } from "react"

gsap.registerPlugin(useGSAP)

function StripeComponent() {
  const marqueeContainer = useRef<HTMLUListElement>(null)
  useGSAP(
    () => {
      if (marqueeContainer.current) {
        gsap.to(marqueeContainer.current, {
          xPercent: -50,
          repeat: -1,
          duration: 40,
          ease: "linear",
        })
      }
    },
    { scope: marqueeContainer }
  )

  return (
    <section className="overflow-hidden container mx-auto p-5  grid relative after:absolute after:h-full after:w-1/2 after:left-0 after:bg-gradient-to-l after:from-black/10 after:to-black before:absolute before:h-full before:w-1/2 before:right-0 before:bg-gradient-to-r before:from-black/10 before:to-black before:z-[1]">
      <ul
        ref={marqueeContainer}
        className="flex p-1 gap-6 whitespace-nowrap text-white text-lg font-mono_normal"
      >
        {Array(40)
          .fill(0)
          .map((_, index) => (
            <li key={index} className="flex items-center gap-3">
              <Sparkle fill="yellow" stroke="yellow" className="rotate-12" />
              <span className="capitalize text-sm">FULLSTACK DEVELOPER</span>
            </li>
          ))}
      </ul>
    </section>
  )
}

export default StripeComponent
