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
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'


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
        /*   autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }} */
          speed={2000}
          loop={true}
        >
          {images?.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex w-[80%]  items-center justify-center">
               {/*  <Image
                  isZoomed
                  alt="Card background"
                  className="z-0 w-fit max-h-[400px] md:max-h-max hover:scale-110   mb-4  pb-4 cursor-pointer  "
                  src={image}
                /> */}
                <InnerImageZoom src={image} className="z-0 w-fit max-h-[400px] md:max-h-max hover:scale-110   mb-4  pb-4 cursor-pointer  "
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
