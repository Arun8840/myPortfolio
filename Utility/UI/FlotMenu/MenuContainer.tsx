"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useRef } from "react"

interface MenuProp {
  children: React.ReactNode
  defaultOpen?: boolean
}

gsap.registerPlugin(useGSAP)
const MenuContainer = ({ children, defaultOpen = false }: MenuProp) => {
  const tl = gsap.timeline({ paused: true })
  const Menu_container = useRef(null)
  const List_container = useRef(null)
  const animate = tl
    .fromTo(
      Menu_container?.current,
      {
        opacity: 0,
        display: "none",
        duration: 0.1,
        ease: "none",
      },
      {
        opacity: 1,
        display: "block",
        duration: 0.1,
        ease: "none",
      }
    )
    .fromTo(
      List_container?.current,
      {
        opacity: 0,
        display: "none",
        right: "-30rem",
        duration: 0.2,
        ease: "none",
      },
      {
        opacity: 1,
        display: "block",
        right: 0,
        duration: 0.2,
        ease: "none",
      }
    )

  const handleclickOutside = () => {
    animate?.reverse()
  }
  useGSAP(
    () => {
      if (defaultOpen) {
        animate?.play()
      } else {
        animate?.reverse()
      }
    },
    { dependencies: [defaultOpen, handleclickOutside] }
  )
  return (
    <>
      {/* Render MenuTrigger */}
      {React.Children.map(children, (child: any) => {
        if (child?.type?.displayName === "MenuTrigger") {
          return React.cloneElement(child)
        }
        return null
      })}

      {/* //todo layer */}
      <section
        onClick={handleclickOutside}
        ref={Menu_container}
        className="bg-[#020202]/50 hidden opacity-0 fixed  size-full inset-0"
      />
      {/* //todo Render MenuList */}
      <div
        ref={List_container}
        className="min-w-[350px] max-w-[400px] absolute  top-0 right-0 bottom-0 z-10 h-full opacity-0 hidden"
      >
        {defaultOpen &&
          React.Children.map(children, (child: any) => {
            if (child.type.displayName === "MenuList") {
              return React.cloneElement(child)
            }
            return null
          })}
      </div>
    </>
  )
}

export default MenuContainer
