import CardContainer from "@/Utility/UI/CardContainer"
import React from "react"
import { Header } from "./ui/Header"
import Image from "next/image"

function About() {
  return (
    <section className="p-3 md:p-5  min-h-screen container mx-auto grid md:grid-cols-6 gap-3 md:gap-3 place-items-center">
      <CardContainer
        animate
        className="bg-radial from-[#FDBF60]/50 to-neutral-100 md:col-span-4 flex flex-col gap-2 size-full"
      >
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
          Stack Systems Pvt. Ltd. I&apos;m passionate about creating responsive,
          interactive, and user-friendly web applications.
        </p>
      </CardContainer>
      <CardContainer
        animate
        className="bg-radial from-[#9F70FD]/50 to-neutral-100  backdrop-blur-lg md:col-span-2 flex flex-col gap-2 size-full"
      >
        <div className="flex-1">
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
      <CardContainer
        animate
        className="bg-radial from-[#FF2929]/50 to-neutral-100  backdrop-blur-lg md:col-span-3 flex flex-col gap-2 size-full"
      >
        <Header className="text-xl">My Journey</Header>
        <p className="font-poppins-normal flex-1 place-content-end">
          Throughout my journey, I’ve mastered key frontend tools like React,
          Next.js, Tailwind CSS, and Figma to build intuitive interfaces. I’m
          also proficient in Spline for 3D design and GSAP for creating smooth
          animations, ensuring that every project I work on is engaging and
          visually captivating.
        </p>
      </CardContainer>
      <CardContainer
        animate
        className="bg-radial from-[#85A947]/50 to-neutral-100  backdrop-blur-lg md:col-span-3 flex gap-2 size-full"
      >
        <div className="flex-1 flex flex-col justify-between">
          <Header className="text-xl">When I&apos;m Not Coding</Header>
          <p className="font-poppins-normal">
            I explore new web trends and tools outside of coding. Art is also a
            passion that inspires my design.
          </p>
        </div>
        <div className="w-40 grid place-items-center">
          <Image
            objectFit="contain"
            src={"/zombieing.svg"}
            alt="aboutBanner"
            width={400}
            height={400}
          />
        </div>
      </CardContainer>
    </section>
  )
}

export default About
