import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards } from "swiper/modules";
import Image from "next/image";
interface IProps {
  alt: any;
  images: string[] | undefined;
  discount?: number | undefined;
}

const SmImageGallury = ({ alt, images, discount }: IProps) => {
  return (
    <div className="flex md:hidden">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper "
      >
        {images?.map((image, index) => (
          <SwiperSlide
            key={index}
            className="h-64 w-[20rem] flex justify-center"
          >
            <Image
              width={300}
              height={300}
              src={image}
              alt={alt}
              className="h-64 w-[20rem]  object-center sm:rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default SmImageGallury;
