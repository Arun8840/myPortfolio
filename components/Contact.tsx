"use client"
import { sendMail } from "@/Utility/actions/actions"
import Button from "@/Utility/UI/Button"
import TextBox from "@/Utility/UI/Input/TextBox"
import { Plus, Sparkles } from "lucide-react"
import React, { useActionState } from "react"
import { Header } from "./ui/Header"
import CardContainer from "@/Utility/UI/CardContainer"

function Contact() {
  const [message, formAction, isPending] = useActionState(sendMail, null)

  return (
    <section className="min-h-screen grid place-items-center p-2 lg:p-5 bg-fixed bg-radial from-[#63e] bg-[top_right]">
      <CardContainer className="w-full md:w-[80%]">
        <form action={formAction} className="p-2">
          {message}
          <div>
            <Header>Get In Touch</Header>
            <p className="font-poppins-normal pl-0 p-3 text-justify">
              Have a project in mind or want to collaborate? I&rsquo;d love to
              hear from you&#33; Fill out the contact form below, and I&rsquo;ll
              get back to you as soon as possible&#46; Let&rsquo;s create
              something amazing together&#33;
            </p>
          </div>

          <div className="flex flex-col gap-3 flex-1 py-2">
            <div className="grid md:grid-cols-2 gap-2">
              <CardContainer>
                <Header className="text-lg font-medium">Email</Header>
                <p>arunprakashrani@gmail.com</p>
              </CardContainer>
              <CardContainer>
                <Header className="text-lg font-medium">Phone</Header>
                <p className="flex items-center gap-2">
                  <Plus size={18} />
                  91 &nbsp;6381941148
                </p>
              </CardContainer>
              <TextBox className="border" required name="name" label="Name" />

              <TextBox className="border" required name="email" label="Email" />
            </div>
            <label htmlFor="message" className="block font-poppins-normal">
              Message
            </label>
            <textarea
              required
              name="message"
              className="block p-3 bg-white border rounded-lg w-full"
            />
            <div className="pt-3 flex justify-end">
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
      </CardContainer>
    </section>
  )
}

export default Contact
