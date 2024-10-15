import Image from "next/image"
import { DestinationsProps } from "../constant"

export const DestinationCards = ({imgUrl,title,location,travlers}:DestinationsProps) => {
  return (
    <div className='relative h-auto w-full min-w-[250px]'>
      <div className="flex h-full flex-col items-start justify-between">
      <Image src={imgUrl} alt={title} width={100} height={100} objectFit="cover" quality={100} className="w-full object-cover" />
      <div className="absolute bottom-5 left-[50%] right-[50%]">
        <div className="flex flex-col items-center">
           <h1 className="whitespace-nowrap font-playFair font-medium text-white text-lg">{title}</h1>
           <h2 className="whitespace-nowrap font-Inter font-medium text-white text-base">{location}</h2>
           <h3 className="whitespace-nowrap font-Inter font-medium text-white text-sm">{travlers}</h3>
        </div>
      </div>
      </div>
    </div>
  )
}
