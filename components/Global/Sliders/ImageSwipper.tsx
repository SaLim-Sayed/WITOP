"use client";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
// Use const or function before the component name

interface IProps {
  images: string[] | undefined;
}
const ImageSwipper = ({ images }: IProps) => {
  return (
    <>
      <div className="   cursor-pointer ">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
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
                  removeWrapper
                  alt="Card background"
                  radius="none"
                  className="z-0   cursor-pointer "
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
