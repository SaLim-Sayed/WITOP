import { Image } from '@chakra-ui/react'
import React from 'react'

export default function Offers() {
  return (
    <div>
        <div className="  overflow-hidden mx-auto">
        <Image
          
          src="/brands/offer.jpg"
          alt="1"
          
          className=" hidden md:flex cursor-pointer  w-full "
        />
         
        <Image
          
          src="/brands/offersm.png"
          alt="1"
          width={1000}
          height={1000}
          className=" flex object-contain  max-h-[200px]   md:hidden cursor-pointer "
        />
        
      </div>
    </div>
  )
}
