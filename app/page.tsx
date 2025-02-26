import StripeComponent from "@/components/StripeComponent"
import About from "../components/About"
import Homepage from "../components/Home"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
export default function Home() {
  return (
    <section className="flex flex-col gap-5">
      <Homepage />
      <StripeComponent />
      <About />
      <Projects />
      <Contact />
    </section>
  )
}
