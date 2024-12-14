"use client"
import Link from "next/link"
import React from "react"
// import bannerImage from "../assets/IMG_1772.png"
import CardContainer from "@/Utility/UI/CardContainer"
import TimeLineContainer from "@/Utility/UI/timeLine/TimeLineContainer"
import TimelineItems from "@/Utility/UI/timeLine/TimelineItems"
import { Code, Sparkles, User, Waypoints } from "lucide-react"
import Bar from "@/Utility/UI/Chart/Bar"
import useStore from "@/Store/Store"
function About() {
  const headerStyle = `text-lg lg:text-[2rem] text-white p-2 tracking-wider font-mono_normal font-semibold`
  const contentStyle = `tracking-wide font-mono_normal text-white`
  const skills = useStore((state) => state?.skills)

  const skillPercent: { label: string; value: number }[] = [
    {
      label: "HTML",
      value: 90,
    },
    {
      label: "CSS",
      value: 90,
    },
    {
      label: "JS",
      value: 80,
    },
    {
      label: "TAILWIND CSS",
      value: 90,
    },
    {
      label: "REACT",
      value: 90,
    },
    {
      label: "NEXT JS",
      value: 80,
    },
    {
      label: "NODE JS",
      value: 60,
    },
  ]

  const Start = () => {
    return (
      <svg
        className="size-5 inline-block mr-2"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_116_153)">
          <path
            d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"
            fill="white"
          />
        </g>
      </svg>
    )
  }

  // const pallets = [
  //   {
  //     primary: "#0b8636",
  //     secondary: "#115427",
  //     bg: "#090707",
  //     cardbg: "#113b1d",
  //   },
  //   {
  //     primary: "#2463eb",
  //     secondary: "#60a8fa",
  //     bg: "#090707",
  //     cardbg: "#3a87f7",
  //   },
  //   {
  //     primary: "#e6e5e5",
  //     secondary: "#bcbcbd",
  //     bg: "#090707",
  //     cardbg: "#6a6a6c",
  //   },
  //   {
  //     primary: "#e11d48",
  //     secondary: "#e9546f",
  //     bg: "#090707",
  //     cardbg: "#f17e92",
  //   },
  // ]

  return (
    <>
      {/* //todo stricky container */}
      <section className="min-h-screen pt-5 flex ">
        <div className="container p-2 mx-auto">
          <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <CardContainer animate className="md:col-span-2 p-4">
              <h1 className={`${headerStyle} flex items-center gap-2`}>
                <User className="inline" strokeWidth={2} />
                <span>About</span>
              </h1>
              <p className={`${contentStyle} p-3`}>
                Hello! <strong>I&rsquo;m Arun </strong>, a frontend developer
                with
                <strong className="text-pink-500  px-2">3 years</strong>
                of professional experience at
                <Link
                  href={"http://www.zettastack.com/"}
                  className="text-indigo-400 p-1 hover:border-b border-indigo-400"
                >
                  <strong> Zetta Stack Systems Pvt</strong>
                </Link>
                . Ltd. I&rsquo;m passionate about creating responsive,
                interactive, and user-friendly web applications.
              </p>
            </CardContainer>
            <CardContainer animate className="md:col-span-2">
              <h1 className={`${headerStyle}`}>
                <Waypoints className="inline" />
                <span> My Journey</span>
              </h1>
              <div className="p-3">
                <p className={`${contentStyle}`}>
                  Throughout my journey, I&rsquo;ve mastered key frontend tools
                  like React, Next.js, Tailwind CSS, and Figma to build
                  intuitive interfaces. I&rsquo;m also proficient in Spline for
                  3D design and GSAP for creating smooth animations, ensuring
                  that every project I work on is engaging and visually
                  captivating.
                </p>
              </div>
            </CardContainer>
            <CardContainer animate className="col-span-full">
              <div className="p-3 grid lg:grid-cols-2">
                {/* //todo skills */}
                <div>
                  <h1 className={`${headerStyle}`}>
                    <Sparkles className="inline-flex" />
                    <span> Skills & Expertise</span>
                  </h1>
                  <div className="pl-5">
                    <TimeLineContainer animate>
                      {skills?.map((skillItems, index: number) => {
                        return (
                          <TimelineItems
                            className="font-mono_normal"
                            key={`${skillItems?.title}-${index}`}
                          >
                            <strong>{skillItems?.title}</strong>
                            <p className="text-sm pt-2">
                              {skillItems?.content?.join(",")}
                            </p>
                          </TimelineItems>
                        )
                      })}
                    </TimeLineContainer>
                  </div>
                </div>
                <div className="flex flex-col">
                  <h1 className={`${headerStyle}`}>
                    <Start />
                    <span> My Approach</span>
                  </h1>
                  <div className="p-3">
                    <p className={`${contentStyle}`}>
                      I believe in crafting clean, maintainable code that blends
                      functionality with beautiful design. With a strong focus
                      on collaboration, I enjoy working with designers and
                      developers alike to create seamless user experiences.
                    </p>
                  </div>

                  {/* //todo chart */}
                  <Bar animate data={skillPercent} />
                </div>
              </div>
            </CardContainer>

            <CardContainer animate className="col-span-full">
              <h1 className={`${headerStyle}`}>
                <Code className="inline mr-3" />
                <span>When I&rsquo;m Not Coding</span>
              </h1>
              <div className="p-3">
                <p className={`${contentStyle} `}>
                  Outside of coding, I enjoy exploring new web development
                  trends and experimenting with innovative tools and techniques.
                  I&rsquo;m also passionate about art, which fuels my creativity
                  and inspires my design work.
                </p>
              </div>
            </CardContainer>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
