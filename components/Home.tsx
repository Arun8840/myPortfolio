"use client"
import React from "react"
import { Header } from "./ui/Header"

function Home() {
  return (
    <section className="min-h-screen p-5 container mx-auto flex flex-col gap-5">
      {/* //* banner image section */}
      <div className="rounded-4xl flex-1 bg-[url(/Francium.jpeg)] bg-cover bg-center grid content-between">
        {/* //* curve container */}
        <div className="bg-black relative w-full md:w-fit px-5 rounded-tr-none rounded-bl-none h-30 rounded-4xl after:absolute after:size-10  after:-bottom-10 after:left-0 after:bg-radial-[at_100%_100%]  after:from-inherit after:to-black after:from-70% after:to-0%  before:absolute before:size-10 before:-right-10 before:top-0 before:bg-radial-[at_100%_100%]  before:from-inherit before:to-black before:from-70% before:to-0% flex flex-col justify-center">
          <Header className="text-white self-start truncatepb-1 leading-relaxed pb-2 text-4xl overflow-hidden">
            Building Scalable
          </Header>
          <Header className="text-white truncate pb-2 leading-relaxed text-4xl overflow-hidden">
            Interactive Web Experiences
          </Header>
        </div>

        {/* //* content */}
        <div className="justify-self-end flex justify-center items-center p-5 bg-black relative w-full md:w-1/2 rounded-tr-none rounded-bl-none h-30 rounded-4xl after:absolute after:size-10  after:bottom-0 after:-left-10 after:bg-radial-[at_0%_0%]  after:from-inherit after:to-black after:from-70% after:to-0% before:absolute before:size-10  before:-top-10 before:-right-0 before:bg-radial-[at_0%_0%]  before:from-inherit before:to-black before:from-70% before:to-0%">
          <div className="text-white font-poppins-normal">
            <svg
              className="size-5 float-left mr-2"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_104_26)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M107.143 0H92.8571V82.7556L34.3401 24.2385L24.2386 34.3401L82.7556 92.8571H0V107.143H82.7555L24.2386 165.66L34.3401 175.761L92.8571 117.244V200H107.143V117.244L165.66 175.761L175.761 165.66L117.244 107.143H200V92.8571H117.244L175.761 34.34L165.66 24.2385L107.143 82.7555V0Z"
                  fill="url(#paint0_linear_104_26)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_104_26"
                  x1="20.5"
                  y1="16"
                  x2="100"
                  y2="200"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#B6FFFA" />
                  <stop offset="1" stopColor="#B6FFFA" />
                </linearGradient>
                <clipPath id="clip0_104_26">
                  <rect width="200" height="200" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>
              A creative Frontend Developer specializing in React, Next.js, and
              modern JavaScript, building stunning and responsive web
              experiences. Let bring your vision to life with clean code and
              innovative designs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
