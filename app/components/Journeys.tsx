import { Journeyss } from "../constant"
import Button from "./Button"
import JourneyCard from "./JourneyCard"

const Journeys = () => {
  return (
    <section className="w-full bg-[#F3F3F3]">
      <div className="max-container padding-container pt-16">
        <div className="flex flex-col justify-center items-center gap-4">
          <h3 className="font-Inter font-medium text-[#0E3D4D] text-base">Trip Gallery</h3>
          <h1 className="font-playFair text-3xl font-bold text-[#0E3D4D]">Completed Journeys</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Journeyss.map((journey,index) => (
            <div key={index} className={`${index === 1 ? 'lg:col-span-2':''}`}>
              <JourneyCard 
              title={journey.title}
              location={journey.location}
              trips={journey.trips}
              imageUrl ={journey.imageUrl}
             /> 
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center py-5">
         <Button type="button" title="See all journeys" variant="btn_dim_yellow"/>
        </div>
      </div>
    </section>
  )
}

export default Journeys