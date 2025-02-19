import StripeComponent from "@/components/StripeComponent"
import About from "../components/About"
import Contact from "../components/Contact"
import Homepage from "../components/Home"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
export default function Home() {
  return (
    <>
      <Homepage />
      <About />
      <StripeComponent />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
