import React, { useEffect, useRef, HTMLAttributes } from "react"
import { useDropdownContext } from "./DropDownContainer"
import { cn } from "@/Utility/cn"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

interface DropdownContentProp extends HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode
  position?: "top" | "right" | "bottom" | "left" | "default" | string
}

gsap.registerPlugin(useGSAP)

function DropDownGroup({
  children,
  className,
  position = "default",
  ...otherProps
}: DropdownContentProp) {
  const { isOpenOption, setOpenOptions } = useDropdownContext()
  const listContainerRef = useRef<HTMLUListElement>(null)

  // Position management
  const positionValues:
    | {
        top: string
        bottom: string
        default: string
      }
    | any = {
    top: "bottom-full mb-2",
    bottom: "top-full mt-2",
    default: "top-12",
  }
  const currentPosition = positionValues[position]

  const defaultClass = `w-full border border-[var(--variant)] hidden opacity-0 text-white p-1 rounded-lg bg-black z-50 absolute ${currentPosition}`

  // Animation timeline
  const tl = gsap.timeline({ paused: true })
  const openAnimation = tl.fromTo(
    listContainerRef.current,
    {
      opacity: 0,
      scale: 0.9,
      display: "none",
      duration: 0.1,
    },
    {
      opacity: 1,
      scale: 1,
      display: "block",
      duration: 0.1,
    }
  )

  // Play/reverse animation
  useGSAP(
    () => {
      if (isOpenOption) {
        openAnimation?.play()
      } else {
        openAnimation?.reverse()
      }
    },
    { dependencies: [isOpenOption] }
  )

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        listContainerRef.current &&
        !listContainerRef.current.contains(event.target as Node)
      ) {
        setOpenOptions(false)
      }
    }

    if (isOpenOption) {
      document.addEventListener("mousedown", handleOutsideClick)
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [isOpenOption, setOpenOptions])

  return (
    <ul
      ref={listContainerRef}
      className={cn(defaultClass, className)}
      {...otherProps}
    >
      {React.Children.map(children, (child: any) => {
        if (child?.type?.displayName === "DropDownGroupTitle") {
          return React.cloneElement(child)
        }
        return null
      })}

      <ul>
        {React.Children.map(children, (child: any) => {
          // Ensure valid components are rendered
          return React.cloneElement(child)
        })}
      </ul>
    </ul>
  )
}

export default DropDownGroup
