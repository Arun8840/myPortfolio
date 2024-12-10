import React, { CSSProperties, HTMLAttributes, useRef } from "react"
import theme from "../../theme.json"
import { cn } from "@/Utility/cn"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
interface ChartProps extends HTMLAttributes<HTMLUListElement> {
  data: { label: string; value: number }[]
  animate?: boolean
  className?: string
}
function Bar({ data, animate = false, className }: ChartProps) {
  const { primary, secondary } = theme
  const chartContainerRef = useRef<HTMLUListElement | any>(null)

  const baseClass =
    "size-full flex gap-3 items-end justify-start p-2 pb-0 min-h-[300px]"

  useGSAP(
    () => {
      if (animate) {
        gsap.fromTo(
          chartContainerRef?.current?.children,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "expo.inOut",
          }
        )
      }
    },
    { dependencies: [animate] }
  )
  return (
    <ul
      ref={chartContainerRef}
      style={
        {
          "--primary": primary,
          "--secondary": secondary,
        } as CSSProperties
      }
      className={cn(baseClass, className)}
    >
      {data?.length > 0 ? (
        data?.map((values, valueIndex) => {
          return (
            <li
              style={{ "--dataHeight": `${values?.value}%` } as CSSProperties}
              key={`${values?.label}-${valueIndex}`}
              className=" flex-1 h-[var(--dataHeight)] bg-gradient-to-b from-[var(--primary)] to-black/10 hover:scale-105 transition-transform duration-150 grid"
            >
              <p className="text-white self-end block text-center font-mono_normal text-xs line-clamp-1">
                {values?.label}
              </p>
            </li>
          )
        })
      ) : (
        <li className="flex-1 size-full grid place-items-center">
          <p className="font-mono_normal text-stone-600">Data not found !</p>
        </li>
      )}
    </ul>
  )
}

export default Bar
