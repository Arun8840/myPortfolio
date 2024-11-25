import { Instagram, Linkedin, Mail, MoveUpRight, Phone } from "lucide-react"
import React from "react"
function Contact() {
  return (
    <section className="min-h-screen bg-[#020909] grid place-items-center">
      <div className="container flex justify-center flex-wrap">
        <div className=" p-2  flex-col justify-between flex">
          <h1 className="text-[#dbf8f5] text-4xl font-semibold font-outfit_bold pb-5">
            Love to hear from you &sbquo;
            <br /> Get in touch
          </h1>
          <svg
            className="w-full hidden lg:block"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_133_2)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M50.7143 0H0.71429V50C0.71429 75.462 19.7466 96.4788 44.361 99.6002C19.4015 102.402 4.22025e-06 123.578 2.18557e-06 149.286L0 199.286H50C75.462 199.286 96.4788 180.253 99.6002 155.639C102.402 180.599 123.578 200 149.286 200H199.286V150C199.286 124.538 180.253 103.521 155.639 100.4C180.599 97.5984 200 76.422 200 50.7143V0.714286L150 0.714284C124.538 0.714282 103.521 19.7466 100.4 44.361C97.5984 19.4015 76.422 0 50.7143 0Z"
                fill="url(#paint0_linear_133_2)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_133_2"
                x1="27.5"
                y1="19"
                x2="149"
                y2="174.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFD9A0" />
                <stop offset="1" stopColor="#FFF5F1" />
              </linearGradient>
              <clipPath id="clip0_133_2">
                <rect width="200" height="200" fill="white" />
              </clipPath>
            </defs>
          </svg>
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
        <form className="flex flex-col justify-evenly gap-4 p-5 w-full lg:w-1/2">
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
          <button
            type="submit"
            className="font-outfit_normal bg-[#80e8e0]  flex items-center justify-center gap-2 w-full p-3"
          >
            Just Send
            <MoveUpRight size={18} />
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
