import StripeComponent from "@/components/StripeComponent"
import About from "../components/About"
import Contact from "../components/Contact"
import Homepage from "../components/Home"
export default function Home() {
  return (
    <>
      <Homepage />
      <About />
      <StripeComponent />
      <Contact />
    </>
  )
}
