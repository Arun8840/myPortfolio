"use client"
import { sendMail } from "@/Utility/actions/actions"
import Button from "@/Utility/UI/Button"
import CardContainer from "@/Utility/UI/CardContainer"
import TextBox from "@/Utility/UI/Input/TextBox"
import {
  Download,
  Linkedin,
  LoaderCircle,
  Mail,
  Phone,
  Send,
} from "lucide-react"
import React, { useActionState } from "react"

function Contact() {
  const [message, formAction, isPending] = useActionState(sendMail, null)

  console.log(message)
  return (
    <section className="min-h-screen grid place-items-center p-2 lg:p-10">
      <div className="container flex justify-center">
        <CardContainer className="w-full lg:p-4">
          <form
            action={formAction}
            className="lg:w-[90%] mx-auto grid lg:grid-cols-2 gap-5 p-2"
          >
            <div>
              <h1 className="text-white font-mono_normal  font-semibold text-[2rem] capitalize">
                get in touch Send me a message
              </h1>
              <p className="text-white font-mono_normal pl-0 p-3 text-justify">
                Have a project in mind or want to collaborate? I&rsquo;d love to
                hear from you&#33; Fill out the contact form below, and
                I&rsquo;ll get back to you as soon as possible&#46; Let&rsquo;s
                create something amazing together&#33;
              </p>
            </div>

            <div className="flex flex-col gap-3 flex-1">
              <TextBox required name="name" label="Name" />

              <TextBox required name="email" label="Email" />
              <label
                htmlFor="message"
                className="text-white block font-mono_normal"
              >
                Message
              </label>
              <textarea
                required
                name="message"
                className="block p-3 text-white bg-inherit border border-stone-700 border-opacity-50 rounded w-full"
              />
              <div className="pt-3">
                <Button
                  icon={{
                    value: isPending ? (
                      <LoaderCircle className="animate-spin" size={18} />
                    ) : (
                      <Send size={18} />
                    ),
                  }}
                  className="w-full justify-center "
                  variant={"primary"}
                >
                  Send your Message
                </Button>
              </div>
            </div>
          </form>
        </CardContainer>
      </div>

      <div className="border-t border-t-stone-700 border-opacity-50 w-full p-5 flex flex-wrap gap-3 items-center lg:justify-evenly">
        <Button
          label={"arunprakashrani@gmail.com"}
          variant={"default"}
          icon={{
            value: <Mail size={18} />,
          }}
        />
        <Button
          label={"+91-6381941148"}
          variant={"default"}
          icon={{
            value: <Phone size={18} />,
          }}
        />

        <Button
          disabled
          // href=""
          // download={"My_cv.pdf"}
          label={"Download CV"}
          variant={"primary"}
          icon={{
            value: <Download size={18} />,
            color: "white",
          }}
        />
        {/* //todo social icon group */}
        <div className="flex gap-2">
          <Button
            disabled
            variant={"primary"}
            icon={{
              value: <Linkedin size={18} />,
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
