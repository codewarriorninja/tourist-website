import Image from "next/image"
import Button from "./Button"
import { resort } from "@/public"
import { Car } from "lucide-react"
import { Bed } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
const Trip = () => {
  return (
    <section className="w-full bg-[#F3F3F3]">
      <div className="max-container padding-container">
        <div className="flex justify-between items-end flex-wrap gap-5">
          <div className="flex flex-col justify-start items-start max-w-[550px]">
           <h3 className="text-[#0E3D4D] font-Inter font-medium text-base">Where do you want to go</h3>
           <h1 className="text-[#0E3D4D] text-2xl lg:text-5xl font-bold font-playFair leading-relaxed pt-5">Lets us worry about your plans, Just get packed</h1>
          </div>
          <Button type="button" title="Take a Trip" variant="btn_dim_yellow"/>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-20 lg:gap-16 pt-16 w-full">
            <div className="w-full">
             <Image src={resort} alt="resort" width={515} height={541} quality={100} className="w-full object-cover" />
            </div>
          <div className="flex flex-col justify-between gap-5 w-full">
            <Car className="scale-150"/>
            <h2 className="font-playFair text-4xl text-[#0E3D4D] font-semibold">Rent a car</h2>
            <p className="font-Inter text-[#0E3D4D] font-medium  max-w-md text-[25px]">Lorem ipsum dolor sit amet consecteur fin dren</p>
            <div className="flex items-center gap-2">
              <Link href='/' className="font-Inter font-medium text-[#0E3D4D] underline text-lg">Lets Go</Link>
              <ArrowRight className="scale-90"/>
            </div>
            <div className="pt-4">
              <Bed className="scale-150"/>
              <h2 className="font-playFair text-4xl text-[#0E3D4D] font-semibold py-5">Get a hotel</h2>
              <p className="font-Inter text-[#0E3D4D] font-medium  max-w-md text-[25px]">Lorem ipsum dolor sit amet consecteur fin dren</p>
              <div className="flex items-center gap-2">
              <Link href='/' className="font-Inter font-medium text-[#0E3D4D] underline text-lg">Lets Go</Link>
              <ArrowRight className="scale-90"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trip