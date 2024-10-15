import Image from "next/image"
import { Advantures, Packages } from "../constant"

const Package = () => {
    return(
    <div className="py-20 bg-[#D9ED82]">
      <div className="max-container padding-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Packages.map((pack,index) => (
              <div key={index} className="flex flex-col justify-start items-start max-w-[320px]">
                <Image src={pack.imageUrl} alt={pack.text} width={40} height={40} className="object-contain" />
                <h2 className="font-playFair text-[#112F38] text-2xl pt-5">{pack.text}</h2>
                <p className="font-Inter text-[#112F38] text-base leading-relaxed pt-4">{pack.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
    )
}

const Adventures = () => {
  return (
    <section className="w-full bg-[#CCF32F]">
      <div className="bg-[#141B34] w-full py-5 skew-y-3">
        <div className="max-container padding-container w-full grid grid-cols-2 md:grid-cols-4 gap-6">
          {Advantures.map((Advanture,index) =>(
            <div key={index}>
               <h1 className="text-white font-bold font-playFair text-3xl lg:text-4xl">{Advanture.text}</h1>
            </div>
          ))}
        </div>
      </div>
      <Package />
    </section>
  )
}

export default Adventures