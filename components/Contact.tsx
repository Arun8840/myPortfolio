import Button from "@/Utility/UI/Button"
import { Instagram, Linkedin, Mail, MoveUpRight, Phone } from "lucide-react"
import React from "react"
function Contact() {
  return (
    <section className="min-h-screen  grid place-items-center">
      <div className="container flex justify-center flex-wrap">
        <div className=" p-5  flex justify-between flex-col">
          <h1 className="text-[#dbf8f5] text-4xl font-semibold font-outfit_bold pb-5">
            Love to hear from you &sbquo;
            <br /> Get in touch
          </h1>

          <div>
            <p className="flex items-center gap-2 text-[#dbf8f5] font-outfit_normal py-3">
              <Phone stroke="#184384" /> +916381941148
            </p>
            <p className="flex items-center gap-2 text-[#dbf8f5] font-outfit_normal py-3">
              <Mail stroke="#184384" /> arunprakashrani@gmail.com
            </p>

            <div className="flex items-center gap-3 p-2">
              <button title="LinkedIn" type="button">
                <Linkedin className="text-gray-500 hover:text-white transition-colors duration-150" />
              </button>
              <button title="Instagram" type="button">
                <Instagram className="text-gray-500 hover:text-white transition-colors duration-150" />
              </button>
            </div>
          </div>
        </div>
        <form className="flex flex-col justify-evenly gap-4 p-5 lg:px-10 w-full lg:w-1/2">
          <label htmlFor="name" className="font-outfit_normal  text-[#dbf8f5]">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Name"
            className="p-3 border border-stone-600 border-opacity-30 rounded bg-transparent"
          />
          <label htmlFor="email" className="font-outfit_normal  text-[#dbf8f5]">
            Your Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-stone-600 border-opacity-30 rounded bg-transparent"
          />
          <label
            htmlFor="message"
            className="font-outfit_normal  text-[#dbf8f5]"
          >
            Message
          </label>
          <textarea
            placeholder="Message"
            className="p-3 border border-stone-600 border-opacity-30 rounded bg-transparent min-h-28"
          />
          <Button
            className="justify-center p-3"
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
