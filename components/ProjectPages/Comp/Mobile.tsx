import { ProjectTypes } from "@/models/General"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
import React, { useRef } from "react"

gsap.registerPlugin(useGSAP)
function Mobile({ values }: { values: ProjectTypes }) {
  const screen_container_Ref = useRef<HTMLUListElement>(null)

  useGSAP(() => {
    const elements = screen_container_Ref.current?.children
    if (elements) {
      gsap.fromTo(
        elements,
        {
          opacity: 0,
          display: "none",
          y: 100,
        },
        {
          opacity: 1,
          display: "block",
          stagger: 0.1,
          y: 0,
        }
      )
    }
  })
  return (
    <section>
      <ul
        ref={screen_container_Ref}
        className="grid lg:grid-cols-6 gap-5 w-full p-5"
      >
        {values?.screens &&
          values?.screens?.length > 0 &&
          values?.screens?.map((screens, screenIndex) => {
            return (
              <li key={screens?.name}>
                <h1 className="font-poppins-normal text-sm p-2 font-semibold">
                  {screenIndex + 1}.{screens?.name}
                </h1>
                <Image
                  alt="ProjectScreens"
                  src={screens?.image}
                  width={200}
                  height={200}
                  className="object-contain rounded-lg shadow-lg"
                />
              </li>
            )
          })}
      </ul>
    </section>
  )
}

export default Mobile
