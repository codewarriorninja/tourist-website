import React from 'react'
import { JourneyCardProps } from '../constant'
import Image from 'next/image'

const JourneyCard = ({title, location, trips, imageUrl}:JourneyCardProps) => {
  return (
    <div className='relative overflow-hidden rounded-xl shadow-md mt-16'>
      <Image src={imageUrl} alt={title} width={390} height={404} className='w-full h-[404px] object-cover' />
      <div className='absolute inset-0 p-4 flex flex-col justify-end'>
        <h2 className='text-white font-playFair text-[37px] font-medium'>{title}</h2>
        <p className='text-white font-Inter text-lg font-medium'>{location},{trips}</p>
      </div>
    </div>
  )
}

export default JourneyCard