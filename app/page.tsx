import Adventures from "./components/Adventures"
import Contact from "./components/Contact"
import Destination from "./components/Destination"
import Hero from "./components/Hero"
import Journeys from "./components/Journeys"
import Testimonial from "./components/Testimonial"
import Trip from "./components/Trip"

const page = () => {
  return (
    <>
     <Hero />
     <Adventures />
     <Destination />
     <Trip />
     <Journeys />
     <Testimonial />
     <Contact />
    </>
  )
}

export default page