"use client"
import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
function StripeComponent() {
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

  return (
    <section className="bg-[#020909] py-10 overflow-hidden">
      <ul className="flex items-center justify-between bg-gradient-to-r from-lime-500 via-blue-700 to-fuchsia-500 -rotate-3 text-white  py-2 px-6 text-sm tracking-wide">
        {listItems?.map((values: string, valueIndex: number) => {
          return (
            <li
              key={`${values}-${valueIndex}`}
              className="flex items-center gap-3"
            >
              <svg
                className="size-6"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_116_153)">
                  <path
                    d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"
                    fill="url(#paint0_linear_116_153)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_116_153"
                    x1="100"
                    y1="0"
                    x2="100"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#DF99F7" />
                    <stop offset="1" stopColor="#FFDBB0" />
                  </linearGradient>
                  <clipPath id="clip0_116_153">
                    <rect width="200" height="200" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="capitalize font-poppins_normal mix-blend-lighten">
                {values}
              </span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default StripeComponent
