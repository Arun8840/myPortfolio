"use client"
import React, { useRef } from "react"
import { Header } from "./ui/Header"
import Button from "@/Utility/UI/Button"
import { Sparkles } from "lucide-react"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)
function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLParagraphElement>(null)
  const tl = gsap.timeline()

  useGSAP(() => {
    tl.fromTo(
      [
        logoRef.current,
        headerRef.current,
        contentRef.current,
        buttonRef.current,
      ],
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
      }
    )
  })

  return (
    <section
      ref={containerRef}
      className="min-h-screen  p-2 lg:p-5 grid place-items-center"
    >
      <div className="container flex flex-col items-center gap-3 md:gap-6">
        <div
          ref={logoRef}
          className="size-24 rounded-full overflow-hidden bg-white"
        >
          <Image
            src={"/Banner.png"}
            width={200}
            height={200}
            objectFit="contain"
            alt="banner"
          />
        </div>
        <Header
          ref={headerRef}
          className="text-center text-white text-2xl md:text-6xl leading-relaxed"
        >
          Building Scalable <br /> Interactive Web Experiences
        </Header>
        <p
          ref={contentRef}
          className="md:w-1/2 mx-auto text-center font-poppins-normal text-neutral-300"
        >
          A creative Frontend Developer specializing in React, Next.js, and
          modern JavaScript, building stunning and responsive web experiences.
          Let bring your vision to life with clean code and innovative designs.
        </p>
        <div ref={buttonRef} className="flex justify-center">
          <Button size="large" className="rounded-full">
            Let&apos;s Work Together
            <Sparkles size={18} />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Home
