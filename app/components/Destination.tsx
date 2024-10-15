import { Destiantions } from "../constant"
import { DestinationCards } from "./DestinationCards"

const Destination = () => {
  return (
    <section className="w-full pt-24 pb-16 bg-[#F3F3F3]">
      <div className="max-container padding-container w-full">
        <div className="flex flex-col justify-start items-start space-y-4 max-w-[540px]">
          <h3 className="font-Inter font-medium text-[#0E3D4D] text-base">Where do you want to go</h3>
          <h1 className="font-playFair font-bold text-5xl">Popular Destinations</h1>
        </div>
        <div className="hide_scrollbar flex w-full items-start justify-start gap-8 pt-16 overflow-auto">
          {Destiantions.map((destination,index) => (
            <DestinationCards key={index} {...destination} />
          ))}
        </div>
      </div>     
    </section>
  )
}

export default Destination