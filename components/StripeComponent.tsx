"use client"
import React, { CSSProperties } from "react"
import theme from "../Utility/theme.json"
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

  const theme_value = theme?.primary
  return (
    <section className=" py-10 overflow-hidden">
      <ul
        style={{ "--varient": theme_value } as CSSProperties}
        className="flex items-center justify-between bg-[var(--varient)] text-white  py-2 px-6  relative before:absolute before:w-1/6 before:h-full before:bg-linear-to-r before:from-black before:to-transparent after:absolute after:w-1/6 after:h-full after:bg-linear-to-l after:from-black after:to-transparent before:left-0 after:right-0"
      >
        {listItems?.map((values: string, valueIndex: number) => {
          return (
            <li
              key={`${values}-${valueIndex}`}
              className="flex items-center gap-3"
            >
              <svg
                className="size-5"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_116_153)">
                  <path
                    d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"
                    fill="white"
                  />
                </g>
              </svg>
              <span className="capitalize  font-mono_normal text-sm">
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
