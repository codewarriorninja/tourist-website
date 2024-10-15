"use client"

import { useState } from "react"
import { ArrowRight,ArrowLeft } from "lucide-react"
import { Places, Slides } from "../constant/index"
import Image from "next/image"
import { slide } from "@/public"
import Button from "./Button"

const Hero:React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const nextSlide = () =>{
        setCurrentIndex((prevIndex) => prevIndex === Slides.length - 1 ? 0 : prevIndex +1)
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? Slides.length -1 : prevIndex - 1 )
    }
  return (
    <section className="relative w-full min-h-screen">
     <div className="max-container padding-container pb-16 w-full">
       <div className="absolute inset-0">
          <Image src={Slides[currentIndex].image} alt={Slides[currentIndex].text} layout="fill" objectFit="cover" quality={100}/>
       </div>
       <div className="relative z-10 flex flex-col justify-center">
        <div className="flex flex-col justify-center max-w-[550px] h-full">
         <h1 className="pt-48 font-playFair font-bold text-4xl lg:text-5xl text-white max-w-lg z-50 leading-relaxed lg:leading-relaxed">
            {Slides[currentIndex].text}
         </h1>
         <p className="text-white font-Inter font-semibold text-base lg:text-lg py-10">{Slides[currentIndex].description}</p>
         <Button type="button" title="Take a Trip" variant="btn_dim_yellow"/>
        </div>
       </div>
       <div className="relative mt-24 my-5 h-[0.5px] w-full bg-white">
         <div className="absolute right-5 -top-16">
            <div className="flex items-center gap-4">
              <button onClick={prevSlide} className="flex items-center justify-center p-2 bg-white/60 backdrop-blur-4xl rounded-full shadow-lg hover:bg-gray-200">
                <ArrowLeft />
              </button>
              <button onClick={nextSlide} className="flex items-center justify-center p-2 bg-white rounded-full shadow-lg hover:bg-gray-200">
                <ArrowRight />
              </button>
            </div> 
         </div>
       </div>
       <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
         {Places.map((place) =>(
            <div key={place.id}>
               <div className="flex flex-col justify-start items-start max-w-md">
                 <h1 className="font-playFair text-white font-bold text-2xl leading-relaxed">0{place.id}</h1>
                 <h2 className="font-Inter text-white font-medium text-2xl max-w-sm leading-relaxed">{place.title}</h2>
                 <p className="font-Inter text-white leading-relaxed max-w-sm text-lg">{place.description}</p>
               </div>
            </div>
         ))}
       </div>
     </div>
    </section>
  )
}

export default Hero