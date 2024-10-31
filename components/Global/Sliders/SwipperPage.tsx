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
import { Image } from "@nextui-org/react";
import { Cats } from "./data.module";

// Use const or function before the component name
const SwipperPage = () => {
  return (
    <>
      <div className=" w-full cursor-pointer ">
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
          {
            Cats.map((cat) => (
              <SwiperSlide key={cat.id}>
                <Image
                  removeWrapper
                  alt="Card background"
                  radius="none"
                  className="z-0  w-full cursor-pointer "
                  src={cat.img}
                />
              </SwiperSlide>
            ))
          }
          
        </Swiper>
      </div>
     
    </>
  );
};

export default SwipperPage;
