import Button from "@/Utility/UI/Button"
import { Instagram, Linkedin, Mail, MoveUpRight } from "lucide-react"
import React from "react"
function Contact() {
  return (
    <section className="min-h-screen grid place-items-center p-2 lg:p-10">
      <div className="container flex justify-center flex-wrap lg:flex-nowrap">
        <form className="flex flex-col justify-evenly gap-4 p-5 lg:px-10 w-full lg:w-1/2">
          <h1 className="text-[#1a30fb] text-6xl font-semibold font-mono_normal">
            Get in touch
          </h1>
          <label htmlFor="name" className="font-outfit_normal  text-[#dbf8f5]">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Name"
            className="p-3 border-b border-stone-600 border-opacity-30 text-white bg-transparent outline-none"
          />
          <label htmlFor="email" className="font-outfit_normal  text-[#dbf8f5]">
            Your Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="p-3 border-b border-stone-600 border-opacity-30 text-white bg-transparent outline-none"
          />
          <label
            htmlFor="message"
            className="font-outfit_normal  text-[#dbf8f5]"
          >
            Message
          </label>
          <textarea
            placeholder="Message"
            className="p-3 border-b border-stone-600 border-opacity-30 text-white bg-transparent outline-none min-h-28"
          />
          <Button
            className="justify-center font-mono_normal p-3"
            varient={"primary"}
            label={"Let's talk"}
            icon={{
              value: <MoveUpRight size={18} />,
              color: "white",
            }}
          />
          <div className="flex justify-center items-center gap-3 py-2">
            <p
              title="arunprakashrani@gmail.com"
              className="flex items-center gap-2 text-[#1a30fb] hover:text-white  font-outfit_normal py-5"
            >
              <Mail />
            </p>
            <button title="LinkedIn" type="button">
              <Linkedin className="text-[#1a30fb] hover:text-white transition-colors duration-150" />
            </button>
            <button title="Instagram" type="button">
              <Instagram className="text-[#1a30fb] hover:text-white transition-colors duration-150" />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
