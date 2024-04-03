import { Image } from '@chakra-ui/react'
import React from 'react'

export default function Offers() {
  return (
    <div className="mt-8">
      <div className="  overflow-hidden mx-auto">
        <Image
          src="/slider/banner1.jpg"
          alt="1"
          className=" hidden md:flex cursor-pointer  w-full "
        />

        <Image
          src="/slider/smbanner3.png"
          alt="1"
          width={1000}
          height={1000}
          className=" flex object-contain  max-h-[200px]   md:hidden cursor-pointer "
        />
      </div>
    </div>
  );
}
