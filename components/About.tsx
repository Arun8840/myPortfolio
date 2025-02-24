"use client"
import CardContainer from "@/Utility/UI/CardContainer"
import React, { useRef } from "react"
import { Header } from "./ui/Header"
import { Plus } from "lucide-react"
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"
import { useGSAP } from "@gsap/react"
import InertiaPlugin from "gsap-trial/InertiaPlugin"
import Image from "next/image"

gsap.registerPlugin(Draggable, useGSAP, InertiaPlugin)
function About() {
  const cardContainer = useRef<HTMLDivElement>(null)
  const skillContainer = useRef<HTMLUListElement>(null)

  useGSAP(
    () => {
      if (skillContainer?.current?.children) {
        Draggable.create(skillContainer?.current?.children, {
          bounds: cardContainer.current,
          inertia: true,
        })
      }
    },
    { scope: skillContainer }
  )

  return (
    <section className="p-3  min-h-screen container mx-auto grid place-items-center">
      <div className="grid md:grid-cols-6 md:grid-rows-4 md:p-10 gap-3 md:gap-3 bg-[url(/Darkshell.jpeg)] bg-center bg-cover rounded-4xl">
        <CardContainer className="bg-white/10 backdrop-blur-sm  flex flex-col justify-between gap-2 md:col-span-2 md:row-span-4 relative border border-neutral-700">
          <div className="flex-1 grid place-items-center">
            <Header className="flex items-center gap-2 text-8xl text-white">
              3 <Plus size={30} />
            </Header>

            {/* //* SPARKLE */}
          </div>
          <p className="font-poppins-normal text-white font-medium">
            Years of experience
          </p>
        </CardContainer>

        <CardContainer className="bg-white/10 backdrop-blur-sm md:col-span-4 md:row-span-2 flex flex-col justify-between gap-2 border border-neutral-700">
          <Header className="text-xl text-white">About</Header>

          <p className="font-poppins-normal text-white">
            A frontend developer with3 yearsof professional experience at Zetta
            Stack Systems Pvt. Ltd. I&apos;m passionate about creating
            responsive, interactive, and user-friendly web applications.
          </p>
        </CardContainer>
        <CardContainer className="bg-white/10 p-0 overflow-hidden backdrop-blur-sm md:col-span-2 md:row-span-3 border border-neutral-700 group/profileImage">
          <div className="h-[400px]">
            <Image
              src={"/Banner.png"}
              alt="Profile"
              width={400}
              height={400}
              className="size-full object-cover grayscale-100 group-hover/profileImage:grayscale-0 transition-all duration-150"
            />
          </div>
        </CardContainer>

        <CardContainer className="md:row-span-4 md:col-span-2 size-full bg-white/10 backdrop-blur-sm border border-neutral-700">
          <div ref={cardContainer} className="flex flex-col size-full">
            <Header className="text-white flex-1 text-5xl">Skills</Header>
            <ul ref={skillContainer} className="flex flex-wrap gap-2">
              {skills?.map((skill, skillIndex) => {
                return (
                  <li
                    key={skillIndex + 1}
                    className={`${skill?.bgColor} text-white font-poppins-normal rounded-full p-2 text-center`}
                  >
                    {skill?.title}
                  </li>
                )
              })}
            </ul>
          </div>
        </CardContainer>

        <CardContainer className="bg-white/10 backdrop-blur-sm  md:col-span-2 flex flex-col justify-between gap-2 border border-neutral-700">
          <Header className="text-xl text-white">My Approch</Header>
          <p className="font-poppins-normal text-white">
            I believe in crafting clean, maintainable code that blends
            functionality with beautiful design. With a strong focus on
            collaboration, I enjoy working with designers and developers alike
            to create seamless user experiences.
          </p>
        </CardContainer>

        <CardContainer className="bg-white/10 backdrop-blur-sm md:col-span-4 flex flex-col justify-between gap-2 border border-neutral-700">
          <div className="place-content-end flex flex-col gap-2">
            <Header className="text-xl text-white">My Journey</Header>
            <p className="font-poppins-normal text-white">
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

const skills = [
  {
    title: "HTML",
    image: "html-icon.png",
    bgColor: "bg-[#F7B731]", // Light yellow for HTML
  },
  {
    title: "CSS",
    image: "css-icon.png",
    bgColor: "bg-[#2196F3]", // Blue for CSS
  },
  {
    title: "JavaScript",
    image: "javascript-icon.png",
    bgColor: "bg-[#F0DB4F]", // Yellow for JavaScript
  },
  {
    title: "React",
    image: "react-icon.png",
    bgColor: "bg-[#61DAFB]", // Light blue for React
  },
  {
    title: "Next.js",
    image: "nextjs-icon.png",
    bgColor: "bg-[#000000]", // Black for Next.js
  },
  {
    title: "Tailwind CSS",
    image: "tailwindcss-icon.png",
    bgColor: "bg-[#06B6D4]", // Turquoise for Tailwind
  },
  {
    title: "Spline",
    image: "spline-icon.png",
    bgColor: "bg-[#FF7F00]", // Orange for Spline
  },
  {
    title: "Figma",
    image: "figma-icon.png",
    bgColor: "bg-[#F24E1E]", // Figma's red-orange
  },
  {
    title: "Aninix",
    image: "aninix-icon.png",
    bgColor: "bg-[#AB47BC]", // Purple for Aninix
  },
  {
    title: "Zustand",
    image: "zustand-icon.png",
    bgColor: "bg-[#1C1C1C]", // Dark for Zustand
  },
  {
    title: "Redux",
    image: "redux-icon.png",
    bgColor: "bg-[#764ABC]", // Purple for Redux
  },
  {
    title: "GSAP",
    image: "gsap-icon.png",
    bgColor: "bg-[#00D8A4]", // GSAP's green
  },
  {
    title: "MongoDB",
    image: "mongodb-icon.png",
    bgColor: "bg-[#47A248]", // MongoDB's green
  },
  {
    title: "Git",
    image: "git-icon.png",
    bgColor: "bg-[#F34F29]", // Red for Git
  },
  {
    title: "React Native",
    image: "react-native-icon.png",
    bgColor: "bg-[#61DAFB]", // Light blue for React Native
  },
  {
    title: "TypeScript",
    image: "typescript-icon.png",
    bgColor: "bg-[#007ACC]", // Blue for TypeScript
  },
]
