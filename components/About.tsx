"use client"
import Link from "next/link"
import React from "react"
// import bannerImage from "../assets/IMG_1772.png"
import CardContainer from "@/Utility/UI/CardContainer"
import TimeLineContainer from "@/Utility/UI/timeLine/TimeLineContainer"
import TimelineItems from "@/Utility/UI/timeLine/TimelineItems"
import Button from "@/Utility/UI/Button"
import {
  Code,
  FolderDot,
  MoveUpRight,
  Sparkles,
  User,
  Waypoints,
} from "lucide-react"

function About() {
  // const banner = bannerImage?.src
  const headerStyle = `text-lg lg:text-[2rem] text-white p-2 tracking-wider font-mono_normal font-semibold`

  const contentStyle = `tracking-wide font-mono_normal text-white`

  const skills: { title: string; content: string[] }[] = [
    {
      title: "Languages:",
      content: ["HTML", "CSS", "JavaScript (ES6+)", "TypeScript"],
    },
    {
      title: "Frameworks & Libraries:",
      content: ["React", "Next.js", "GSAP (GreenSock Animation Platform)"],
    },
    {
      title: "Design & Tools:",
      content: ["Figma", "Spline (3D design)", "Tailwind CSS"],
    },
    {
      title: "API Integration:",
      content: ["RESTful APIs"],
    },
    {
      title: "Responsive Design:",
      content: ["Mobile-first approach", "Flexbox", "CSS Grid"],
    },
    {
      title: "Version Control:",
      content: ["Git", "GitHub"],
    },
  ]

  const projects: { title: string; description: string[]; active: boolean }[] =
    [
      {
        active: false,
        title: "E-Commerce Platform",
        description: [
          "Developed a responsive e-commerce platform using React and Next.js.",
          "Implemented dynamic product filters and sorting for an improved user experience.",
          "Integrated payment gateway using Stripe API for secure transactions.",
        ],
      },
      {
        active: true,
        title: "Portfolio Website",
        description: [
          "Built a personal portfolio website to showcase projects and skills.",
          "Utilized Tailwind CSS for modern design and responsiveness.",
          "Deployed on Vercel with custom domain integration.",
        ],
      },
      {
        active: true,
        title: "Expense Tracker Mobile App",
        description: [
          "Developed a cross-platform mobile app for tracking daily expenses using React Native.",
          "Implemented a user-friendly interface with NativeWind for styling components.",
          "Integrated secure data storage using AsyncStorage and Firebase for user authentication.",
          "Added features for category-based expense tracking and visual analytics using charts.",
        ],
      },
      {
        active: false,
        title: "Todo App with Drag and Drop",
        description: [
          "Built a todo app with drag-and-drop functionality using `react-dnd` in React.",
          "Implemented local storage for saving tasks and their completion status.",
          "Created a user-friendly interface with dynamic task filtering (e.g., completed, pending).",
          "Added features for editing, deleting, and reordering tasks with drag-and-drop.",
          "Utilized `react-dnd` to allow users to reorder tasks by dragging them within the list.",
        ],
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

  return (
    <section className="min-h-screen pt-5">
      <div className="container p-2 mx-auto">
        <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <CardContainer animate className="col-span-full p-4">
            <h1 className={`${headerStyle} flex items-center gap-2`}>
              <User className="inline" strokeWidth={2} />
              <span>About</span>
            </h1>
            <p className={`${contentStyle} p-3`}>
              Hello! <strong>I&rsquo;m Arun </strong>, a frontend developer with
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

          <CardContainer animate className="col-span-full">
            <div className="p-3 grid lg:grid-cols-2">
              {/* //todo skills */}
              <div>
                <h1 className={`${headerStyle}`}>
                  <Sparkles className="inline-flex" />
                  <span> Skills & Expertise</span>
                </h1>
                <div className="pl-5">
                  <TimeLineContainer>
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
              {/* //todo projects */}
              <div>
                <h1 className={`${headerStyle}`}>
                  <FolderDot className="inline-flex mr-2" />
                  <span>Projects</span>
                </h1>
                <div className="pl-5">
                  <TimeLineContainer>
                    {projects?.map((skillItems, index: number) => {
                      const isActive = skillItems?.active
                      return (
                        <TimelineItems
                          className={`font-mono_normal group/listitems ${
                            !isActive && "opacity-50"
                          }`}
                          key={`${skillItems?.title}-${index}`}
                        >
                          <div className="flex justify-between">
                            <strong className="flex-1">
                              {skillItems?.title}
                            </strong>
                            {isActive && (
                              <Button
                                disabled={!isActive}
                                title={`Open ${skillItems?.title}`}
                                className="p-2 opacity-0 scale-75 group-hover/listitems:scale-100 group-hover/listitems:opacity-100 transition-all duration-150"
                                varient={"primary"}
                                icon={{
                                  value: <MoveUpRight size={18} />,
                                  color: "white",
                                }}
                              />
                            )}
                          </div>
                          <p className="text-sm pt-1 line-clamp-2">
                            {skillItems?.description}
                          </p>
                        </TimelineItems>
                      )
                    })}
                  </TimeLineContainer>
                </div>
              </div>
            </div>
          </CardContainer>
          <CardContainer animate className="col-span-full">
            <h1 className={`${headerStyle}`}>
              <Waypoints className="inline" />
              <span> My Journey</span>
            </h1>
            <div className="p-3">
              <p className={`${contentStyle}`}>
                Throughout my journey, I&rsquo;ve mastered key frontend tools
                like React, Next.js, Tailwind CSS, and Figma to build intuitive
                interfaces. I&rsquo;m also proficient in Spline for 3D design
                and GSAP for creating smooth animations, ensuring that every
                project I work on is engaging and visually captivating.
              </p>
            </div>
          </CardContainer>
          <CardContainer animate className="md:col-span-2">
            <h1 className={`${headerStyle}`}>
              <Code className="inline mr-3" />
              <span>When I&rsquo;m Not Coding</span>
            </h1>
            <div className="p-3">
              <p className={`${contentStyle} `}>
                Outside of coding, I enjoy exploring new web development trends
                and experimenting with innovative tools and techniques.
                I&rsquo;m also passionate about art, which fuels my creativity
                and inspires my design work.
              </p>
            </div>
          </CardContainer>
          <CardContainer animate className="md:col-span-2">
            <h1 className={`${headerStyle}`}>
              <Start />
              <span> My Approach</span>
            </h1>
            <div className="p-3">
              <p className={`${contentStyle}`}>
                I believe in crafting clean, maintainable code that blends
                functionality with beautiful design. With a strong focus on
                collaboration, I enjoy working with designers and developers
                alike to create seamless user experiences.
              </p>
            </div>
          </CardContainer>
        </div>
      </div>
    </section>
  )
}

export default About
