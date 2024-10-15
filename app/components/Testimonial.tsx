'use client'
import { useState } from "react"
import { TestimonialProps, testimonials } from "../constant"
import Image from "next/image";

const Testimonial:React.FC = () => {
const [activeTestimonial, setActiveTestimonial] = useState<TestimonialProps>(testimonials[0]);


  return (
    <section className="w-full pt-16 bg-[#FFFFFF]/50 shadow-sm">
      <div className="max-container padding-container">
       <div className="flex flex-col justify-center items-center text-center">
         <h3 className="text-[#0E3D4D] font-Inter font-medium text-base">Testimonials</h3>
         <h1 className="text-[#0E3D4D] font-bold font-playFair text-[30px] lg:text-[48px]">Don't take our word for it</h1>
       </div>
       <div className="max-w-[600px] mx-auto">
        <p>{activeTestimonial.content}</p>
        <div className="flex justify-center pt-4">
        {[...Array(5)].map((_, i) => (
           <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        </div>
       </div>
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-5">
        {testimonials.map((testimonial) => (
            <div key={testimonial.id} onClick={() => setActiveTestimonial(testimonial)} className="mx-2 mb-4">
             <Image src={testimonial.avatar} alt={testimonial.name} width={60} height={60} className={`rounded-full cursor-pointer mx-auto transition-transform hover:scale-110 ${activeTestimonial.id === testimonial.id ? 'ring-2' :'ring-blue-500'}`} />
             <p className="text-center text-[#0E3D4D] font-playFair font-medium">{testimonial.name}</p>
             <p className="text-center text-[#0E3D4D] font-medium font-Inter">{testimonial.role}</p>
            </div>
        ))}
       </div>
      </div>
    </section>
  )
}

export default Testimonial