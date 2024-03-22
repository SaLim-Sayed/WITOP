"use client";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectCoverflow,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Image } from "@nextui-org/react";

// Use const or function before the component name

interface IProps {
  images: string[] | undefined;
}
const ImageSwipper = ({ images }: IProps) => {
  return (
    <>
      <div className="   cursor-pointer ">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          // install Swiper modules
          modules={[
            Navigation,
            EffectCoverflow,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
          ]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={2000}
          loop={true}
        >
          {images?.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex w-full  items-center justify-center">
                <Image
                  isZoomed
                  alt="Card background"
                  className="z-0 w-80  hover:scale-110   mb-4  pb-4 cursor-pointer  "
                  src={image}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ImageSwipper;
