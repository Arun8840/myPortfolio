import Button from "@/Utility/UI/Button"
import Label from "@/Utility/UI/Label"
import { MoveUpRight } from "lucide-react"
import React from "react"
function Contact() {
  return (
    <section className="min-h-screen grid place-items-center p-2 lg:p-10">
      <div className="container flex justify-center flex-wrap lg:flex-nowrap">
        <form className="flex flex-col justify-evenly gap-4 p-5 lg:px-10 w-full lg:w-1/2">
          <Label className="font-semibold text-3xl">Get in touch</Label>
          <label htmlFor="name" className="font-outfit_normal  text-[#dbf8f5]">
            Your Name
          </label>
          <input
            type="text"
            className="border p-3 rounded bg-inherit border-stone-700 border-opacity-30 text-white"
          />
          <label htmlFor="email" className="font-outfit_normal  text-[#dbf8f5]">
            Your Email
          </label>
          <input
            type="email"
            className="border p-3 rounded bg-inherit border-stone-700 border-opacity-30 text-white"
          />
          <label
            htmlFor="message"
            className="font-outfit_normal  text-[#dbf8f5]"
          >
            Message
          </label>
          <textarea className="border p-3 rounded bg-inherit border-stone-700 border-opacity-30 text-white mmin-h-28" />
          <Button
            className="justify-center font-mono_normal p-3 rounded-lg"
            varient={"primary"}
            label={"Let's talk"}
            icon={{
              value: <MoveUpRight size={18} />,
              color: "white",
            }}
          />
        </form>
      </div>
    </section>
  )
}

export default Contact
