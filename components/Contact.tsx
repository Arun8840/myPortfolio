"use client"
import { sendMail } from "@/Utility/actions/actions"
import Button from "@/Utility/UI/Button"
import TextBox from "@/Utility/UI/Input/TextBox"
import { Plus, Sparkles } from "lucide-react"
import React, { useActionState } from "react"
import { Header } from "./ui/Header"
import { CardContent, Glowing, GlowingCard } from "@/Utility/UI/Glowing-card"

function Contact() {
  const [message, formAction, isPending] = useActionState(sendMail, null)

  return (
    <section className="min-h-screen grid place-items-center p-2 lg:p-5">
      <GlowingCard className="md:w-6xl p-0.5">
        <Glowing className="w-full h-full -top-1/2 from-yellow-400 to-yellow-500 via-white" />
        <CardContent className="p-5">
          <Header className="text-white text-center text-6xl">
            Get In Touch
          </Header>
          <p className="font-poppins-normal text-white pl-0 p-3 text-center w-1/2 mx-auto">
            Have a project in mind or want to collaborate? I&rsquo;d love to
            hear from you&#33; Fill out the contact form below, and I&rsquo;ll
            get back to you as soon as possible&#46; Let&rsquo;s create
            something amazing together&#33;
          </p>
          <form action={formAction}>
            {message}

            <div className="flex flex-col gap-3 flex-1 py-2 md:w-4xl mx-auto">
              <div className="">
                <TextBox
                  labelStyle="text-white"
                  className="bg-white/10 p-3"
                  required
                  name="name"
                  label="Name"
                />

                <TextBox
                  labelStyle="text-white"
                  className="bg-white/10 p-3"
                  required
                  name="email"
                  label="Email"
                />
              </div>
              <label htmlFor="message" className="block font-poppins-normal">
                Message
              </label>
              <textarea
                required
                name="message"
                className="bg-white/10 min-h-30 rounded-xl text-white p-2"
              />
              <div className="pt-3 flex justify-end gap-5">
                <div className="text-white flex-1">
                  <p className="pb-2">arunprakashrani@gmail.com</p>
                  <p className="flex items-center">
                    <Plus size={18} />
                    91 &nbsp;6381941148
                  </p>
                </div>
                <Button
                  disabled={isPending}
                  size="large"
                  className="rounded-full"
                >
                  Send your Message
                  <Sparkles size={18} />
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </GlowingCard>
    </section>
  )
}

export default Contact
