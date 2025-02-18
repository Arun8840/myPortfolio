import React from "react"
import { Header } from "./ui/Header"
import Button from "@/Utility/UI/Button"
import { Sparkles } from "lucide-react"
import Image from "next/image"

function Home() {
  return (
    <section className="min-h-screen  p-2 lg:p-5 grid place-items-center">
      <div className="container flex flex-col items-center gap-3 md:gap-6">
        <div className="size-24 rounded-full overflow-hidden bg-white">
          <Image
            src={"/Banner.png"}
            width={200}
            height={200}
            objectFit="contain"
            alt="banner"
          />
        </div>
        <Header className="text-center text-2xl md:text-6xl leading-relaxed">
          Building Scalable <br /> Interactive Web Experiences
        </Header>
        <p className="md:w-1/2 mx-auto text-center font-poppins-normal text-neutral-700">
          A creative Frontend Developer specializing in React, Next.js, and
          modern JavaScript, building stunning and responsive web experiences.
          Let bring your vision to life with clean code and innovative designs.
        </p>
        <div className="flex justify-center">
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
