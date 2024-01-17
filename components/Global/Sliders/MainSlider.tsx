"use client";

import React from "react";

import { cn } from "@/libs/cn";

import Slider from "@ant-design/react-slick";

import Link from "next/link";
import { Image } from "@chakra-ui/react";

export default function SimpleSlider() {
  const settings = {
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    centerPadding: 10,
    draggable: true,
    dots:true,
    autoplay: true,
    infinite: true,
    pauseOnHover: true
  };
  return (
    <>
      <div className="  ">
        <div className=" w-full overflow-hidden mx-auto mt-4">
          {/*  @ts-ignore  */}
          <Slider {...settings}>
            <Link href="/c/bestprice">
              <Image className="w-full" src="/slider/banner1.jpg" alt="1" />
            </Link>
            <Link href="/c/bestprice">
              <Image className="w-full" src="/slider/banner2.jpg" alt="1" />
            </Link>
            <Link href="/c/bestprice">
              <Image className="w-full" src="/slider/banner4.jpg" alt="1" />
            </Link>
            <Link href="/c/bestprice">
              <Image className="w-full" src="/slider/banner3.jpg" alt="1" />
            </Link>
            <Link href="/c/bestprice">
              <Image className="w-full" src="/slider/banner5.jpg" alt="1" />
            </Link>
          </Slider>
        </div>
      </div>
      <div className=" hidden  ">
        <div className="w-[85%]  mx-auto mt-4">
          {/*  @ts-ignore  */}
          <Slider {...settings}>
            <Link href="/c/bestprice">
              <Image
                src="/slider/smbanner1.jpg"
                alt="1"
                width={1000}
                height={1000}
              />
            </Link>
            <Link href="/c/bestprice">
              <Image
                src="/slider/smbanner2.jpg"
                alt="1"
                width={1000}
                height={1000}
              />
            </Link>
            <Link href="/c/bestprice">
              <Image
                src="/slider/smbanner4.jpg"
                alt="1"
                width={1000}
                height={1000}
              />
            </Link>
            <Link href="/c/bestprice">
              <Image
                src="/slider/smbanner3.jpg"
                alt="1"
                width={1000}
                height={1000}
              />
            </Link>
            <Link href="/c/bestprice">
              <Image
                src="/slider/smbanner3.webp"
                alt="1"
                width={1000}
                height={1000}
              />
            </Link>
          </Slider>
        </div>
      </div>
    </>
  );
}
