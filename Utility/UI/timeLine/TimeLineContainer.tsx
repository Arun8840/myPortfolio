import { cn } from "@/Utility/cn"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { HTMLAttributes, ReactElement, ReactNode, useRef } from "react"

interface TimelineProp extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode
  animate?: boolean
}

const TimeLineContainer = ({
  children,
  className,
  animate = false,
}: TimelineProp) => {
  const timeline_container_ref = useRef<HTMLUListElement | any>(null)

  const items = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child)
    }
    return child
  })

  const baseClass =
    "lg:border-l border-dashed border-stone-800 p-0 lg:pl-5 flex flex-col gap-5"

  useGSAP(
    () => {
      if (animate) {
        gsap.fromTo(
          timeline_container_ref?.current?.children,
          {
            opacity: 0,
            x: 5,
          },
          {
            x: 0,
            duration: 0.2,
            opacity: 1,
            stagger: 0.1,
            ease: "expo.inOut",
          }
        )
      }
    },
    { dependencies: [animate] }
  )
  return (
    <ul ref={timeline_container_ref} className={cn(baseClass, className)}>
      {items}
    </ul>
  )
}

export default TimeLineContainer
