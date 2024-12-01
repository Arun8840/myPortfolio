"use client"
import Link from "next/link"
import React from "react"
import bannerImage from "../assets/aboutMe_banner.png"
import Image from "next/image"
import CardContainer from "@/Utility/UI/CardContainer"

function About() {
  const banner = bannerImage?.src
  const headerStyle = `text-[2rem] text-[#dbf8f5] p-3 tracking-wider font-poppins_normal`

  const contentStyle = `tracking-wide font-poppins_normal text-[#dbf8f5]`

  return (
    <section className="min-h-screen  lg:p-10 lg:overflow-hidden grid place-items-center">
      <div className="container p-2 mx-auto">
        <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CardContainer className="col-span-full">
            <div className="flex flex-wrap gap-4">
              <div className="p-3 pb-0">
                <Image
                  className="rounded-lg"
                  src={banner}
                  alt="bannerImage"
                  width={300}
                  height={300}
                />
              </div>
              <div className="flex-1 p-5">
                <p className={`${contentStyle}`}>
                  Hello!
                  <span className="bg-green-500 p-1 rounded -skew-y-3 text-xl font-medium inline-block">
                    I&rsquo;m Arun
                  </span>
                  , a frontend developer with
                  <span className="text-pink-500 font-medium">3 years</span> of
                  professional experience at
                  <Link
                    href={"http://www.zettastack.com/"}
                    className="text-indigo-400 p-1 hover:border-b border-indigo-400"
                  >
                    Zetta Stack Systems Pvt
                  </Link>
                  . Ltd. I&rsquo;m passionate about creating responsive,
                  interactive, and user-friendly web applications.
                </p>
              </div>
            </div>
          </CardContainer>

          <CardContainer className="md:col-span-2">
            <h1 className={`${headerStyle}`}>Skills & Expertise</h1>
            <div className="p-3">
              <ul className=" grid grid-cols-1 md:grid-cols-2 gap-3 text-[#dbf8f5]">
                <li className=" p-3 rounded-lg">
                  <strong>Languages:</strong>
                  <span className="text-orange-400">HTML</span>,
                  <span className="text-sky-400">CSS</span>,
                  <span className="text-yellow-400">JavaScript (ES6+)</span>,
                  TypeScript
                </li>
                <li className=" p-3 rounded-lg">
                  <strong>Frameworks & Libraries:</strong>
                  <span className="text-sky-400">React</span>, Next.js,
                  <span className="text-green-400 font-medium"> GSAP</span>
                  (GreenSock Animation Platform)
                </li>
                <li className=" p-3 rounded-lg">
                  <strong>Design & Tools:</strong> Figma, Spline (3D design),
                  Tailwind CSS
                </li>
                <li className=" p-3 rounded-lg">
                  <strong>API Integration:</strong> RESTful APIs
                </li>
                <li className=" p-3 rounded-lg">
                  <strong>Responsive Design:</strong> Mobile-first approach,
                  Flexbox, CSS Grid
                </li>
                <li className=" p-3 rounded-lg">
                  <strong>Version Control:</strong> Git, GitHub
                </li>
              </ul>
            </div>
          </CardContainer>

          <CardContainer>
            <h1 className={`${headerStyle}`}>My Journey</h1>
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

          <CardContainer>
            <h1 className={`${headerStyle}`}>My Approach</h1>
            <div className="p-3">
              <p className={`${contentStyle}`}>
                I believe in crafting clean, maintainable code that blends
                functionality with beautiful design. With a strong focus on
                collaboration, I enjoy working with designers and developers
                alike to create seamless user experiences.
              </p>
            </div>
          </CardContainer>

          <CardContainer className="md:col-span-2">
            <h1 className={`${headerStyle}`}>When I&rsquo;m Not Coding</h1>
            <div className="p-3">
              <p className={`${contentStyle}`}>
                Outside of coding, I enjoy exploring new web development trends
                and experimenting with innovative tools and techniques.
                I&rsquo;m also passionate about art, which fuels my creativity
                and inspires my design work.
              </p>
            </div>
          </CardContainer>
        </div>
      </div>
    </section>
  )
}

export default About
