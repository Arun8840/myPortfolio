"use client"
import CardContainer from "@/Utility/UI/CardContainer"
import React from "react"
import { Header } from "./ui/Header"
import { Plus } from "lucide-react"
import Image from "next/image"
import { CardContent, GlowingCard, Glowing } from "@/Utility/UI/Glowing-card"

function About() {
  return (
    <>
      <section className="p-3  min-h-screen container mx-auto grid place-items-center">
        <div className="grid md:grid-cols-6 md:grid-rows-4 md:p-10 p-1 gap-3 md:gap-3 bg-[url(/Darkshell.jpeg)] bg-center bg-cover rounded-xl">
          <GlowingCard className="md:col-span-2 md:row-span-4 size-full ring-0">
            <Glowing className="size-80 -left-14 -top-20" />
            <CardContent className="flex flex-col justify-center items-center gap-2">
              <Header className="flex items-center gap-2 text-8xl text-white">
                3 <Plus size={30} />
              </Header>

              <p className="font-poppins-normal text-white font-medium">
                Years of experience
              </p>
            </CardContent>
          </GlowingCard>

          <GlowingCard className="md:col-span-4 md:row-span-2 size-full ring-0">
            <Glowing className="size-96 -left-20 top-10 bg-radial from-indigo-100 via-indigo-400 to-indigo-200" />
            <CardContent className="flex flex-col justify-center gap-4">
              <Header className="text-xl text-white">About</Header>

              <p className="font-poppins-normal text-neutral-200">
                A frontend developer with3 yearsof professional experience at
                Zetta Stack Systems Pvt. Ltd. I&apos;m passionate about creating
                responsive, interactive, and user-friendly web applications.
              </p>
            </CardContent>
          </GlowingCard>

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

          <GlowingCard className="md:row-span-4 md:col-span-2 size-full ring-0">
            <Glowing className="size-1/2 -top-10 -right-0 from-lime-300 via-lime-300 to-lime-200" />
            <CardContent className="flex flex-col">
              <Header className="text-white flex-1 text-5xl">Skills</Header>
              <ul className="flex flex-wrap gap-2">
                {skills?.map((skill, skillIndex) => {
                  return (
                    <li
                      key={skillIndex + 1}
                      className={`bg-white/30 backdrop-blur-sm text-white font-poppins-normal rounded-full p-2 text-center`}
                    >
                      {skill?.title}
                    </li>
                  )
                })}
              </ul>
            </CardContent>
          </GlowingCard>

          <GlowingCard className="md:col-span-2 size-full ring-0">
            <Glowing className="size-52 -top-10 -right-10 bg-gradient-to-br from-purple-300 via-purple-300 to-purple-200" />
            <CardContent className="flex flex-col gap-4">
              <Header className="text-xl text-white">My Approch</Header>
              <p className="font-poppins-normal text-neutral-200">
                I believe in crafting clean, maintainable code that blends
                functionality with beautiful design. With a strong focus on
                collaboration, I enjoy working with designers and developers
                alike to create seamless user experiences.
              </p>
            </CardContent>
          </GlowingCard>

          <GlowingCard className="md:col-span-4 size-full ring-0">
            <Glowing className="size-52 top-10 -left-10 bg-gradient-to-br from-neutral-300 via-neutral-500 to-neutral-200" />
            <CardContent className="flex flex-col gap-4">
              <Header className="text-xl text-white">My Journey</Header>
              <p className="font-poppins-normal text-neutral-200">
                Throughout my journey, I&apos;ve mastered key frontend tools
                like React, Next.js, Tailwind CSS, and Figma to build intuitive
                interfaces. I&apos;m also proficient in Spline for 3D design and
                GSAP for creating smooth animations, ensuring that every project
                I work on is engaging and visually captivating.
              </p>
            </CardContent>
          </GlowingCard>
        </div>
      </section>
    </>
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
