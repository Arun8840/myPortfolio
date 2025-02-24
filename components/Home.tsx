"use client"
import React from "react"
import { Header } from "./ui/Header"
import { Sparkles } from "lucide-react"

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
            <Sparkles
              size={20}
              color="yellow"
              fill="yellow"
              className="float-left"
            />
            <p className="indent-1.5">
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
