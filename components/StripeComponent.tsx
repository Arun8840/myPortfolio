"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useRef } from "react"

gsap.registerPlugin(useGSAP)

function StripeComponent() {
  const marqueeContainer = useRef<HTMLUListElement>(null)
  const listItems = [
    "html",
    "css",
    "tailwind css",
    "javascript",
    "react js",
    "next js",
    "figma",
    "aninix",
    "spline",
    "gsap",
  ]

  useGSAP(
    () => {
      if (marqueeContainer.current) {
        gsap.to(marqueeContainer.current, {
          xPercent: -50,
          repeat: -1,
          duration: 20,
          ease: "linear",
        })
      }
    },
    { scope: marqueeContainer }
  )

  return (
    <section className="overflow-hidden py-1 min-h-40 grid">
      <ul
        ref={marqueeContainer}
        className="flex p-1 gap-6 whitespace-nowrap text-white text-lg font-mono_normal"
      >
        {/* Duplicate list to create an infinite effect */}
        {[...listItems, ...listItems].map((value, index) => (
          <li key={index} className="flex items-center gap-3">
            <svg
              className="size-5 rotate-12"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_116_153)">
                <path
                  d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"
                  fill="#bbf451"
                />
              </g>
            </svg>
            <span className="capitalize text-sm">{value}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default StripeComponent
