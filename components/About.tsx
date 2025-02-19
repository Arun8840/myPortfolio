"use client"
import CardContainer from "@/Utility/UI/CardContainer"
import React, { useRef } from "react"
import { Header } from "./ui/Header"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Plus } from "lucide-react"

gsap.registerPlugin(useGSAP, ScrollTrigger)
function About() {
  const aboutContainerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (aboutContainerRef.current) {
        gsap.fromTo(
          aboutContainerRef.current.children,
          {
            opacity: 0,
            y: 100,
          },
          {
            yoyo: true,
            y: 0,
            opacity: 1,
            stagger: 0.3,
            duration: 0.7,
            scrollTrigger: {
              trigger: aboutContainerRef.current,
              start: "top 80%",
              end: "bottom 80%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    },
    { scope: aboutContainerRef }
  )
  return (
    <section className="p-3 md:p-5  min-h-screen container mx-auto grid place-items-center">
      <div
        ref={aboutContainerRef}
        className="grid md:grid-cols-6 gap-3 md:gap-3"
      >
        <CardContainer className="bg-radial from-[#FF2929] to-white  backdrop-blur-lg flex flex-col gap-2 md:col-span-2 relative">
          <div className="flex-1 grid place-items-center">
            <Header className="flex items-center gap-2 text-8xl">
              3 <Plus size={30} />
            </Header>

            {/* //* SPARKLE */}
          </div>
          <p className="font-poppins-normal font-medium">Years of experience</p>
        </CardContainer>
        <CardContainer className="bg-radial from-[#FDBF60] to-white md:col-span-4 flex flex-col gap-2">
          <Header className="text-xl">About</Header>
          <div className="flex-1">
            <Image
              objectFit="contain"
              src={"/sprinting.svg"}
              alt="aboutBanner"
              width={350}
              height={400}
            />
          </div>
          <p className="font-poppins-normal">
            A frontend developer with3 yearsof professional experience at Zetta
            Stack Systems Pvt. Ltd. I&apos;m passionate about creating
            responsive, interactive, and user-friendly web applications.
          </p>
        </CardContainer>
        <CardContainer className="bg-radial from-[#9F70FD] to-white  backdrop-blur-lg md:col-span-3 flex flex-col gap-2">
          <div className="flex-1 grid place-items-center">
            <Image
              objectFit="contain"
              src={"/reading.svg"}
              alt="aboutBanner"
              width={250}
              height={400}
            />
          </div>
          <div className="place-content-end">
            <Header className="text-xl pb-2">My Approch</Header>
            <p className="font-poppins-normal">
              I believe in crafting clean, maintainable code that blends
              functionality with beautiful design. With a strong focus on
              collaboration, I enjoy working with designers and developers alike
              to create seamless user experiences.
            </p>
          </div>
        </CardContainer>
        <CardContainer className="bg-radial from-[#16C47F] to-white  backdrop-blur-lg md:col-span-3 flex flex-col gap-2">
          <div className="flex-1 grid place-items-center">
            <Image
              objectFit="contain"
              src={"/zombieing.svg"}
              alt="aboutBanner"
              width={250}
              height={400}
            />
          </div>
          <div className="place-content-end">
            <Header className="text-xl">My Journey</Header>
            <p className="font-poppins-normal">
              Throughout my journey, I&apos;ve mastered key frontend tools like
              React, Next.js, Tailwind CSS, and Figma to build intuitive
              interfaces. I’m also proficient in Spline for 3D design and GSAP
              for creating smooth animations, ensuring that every project I work
              on is engaging and visually captivating.
            </p>
          </div>
        </CardContainer>
      </div>
    </section>
  )
}

export default About
