"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
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
              <svg
                className="size-7"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_104_26)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M107.143 0H92.8571V82.7556L34.3401 24.2385L24.2386 34.3401L82.7556 92.8571H0V107.143H82.7555L24.2386 165.66L34.3401 175.761L92.8571 117.244V200H107.143V117.244L165.66 175.761L175.761 165.66L117.244 107.143H200V92.8571H117.244L175.761 34.34L165.66 24.2385L107.143 82.7555V0Z"
                    fill="url(#paint0_linear_104_26)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_104_26"
                    x1="20.5"
                    y1="16"
                    x2="100"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#B6FFFA" />
                    <stop offset="1" stopColor="#B6FFFA" />
                  </linearGradient>
                  <clipPath id="clip0_104_26">
                    <rect width="200" height="200" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="capitalize text-sm">FULLSTACK DEVELOPER</span>
            </li>
          ))}
      </ul>
    </section>
  )
}

export default StripeComponent
