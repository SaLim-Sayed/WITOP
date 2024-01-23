"use client";

import React from "react";

import { cn } from "@/libs/cn";

import Slider from "@ant-design/react-slick";

import Link from "next/link";
import { Image } from "@chakra-ui/react";

export default function SimpleSlider() {
  const settings = {
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    arrow:false,
    draggable: true,
    dots:true,
    autoplay: true,
    infinite: true,
    pauseOnHover: true
  };
  return (
    <>
      <div className="hidden md:flex justify-center  ">
        <div className="w-[80%] lg:w-[95%] md:[90%] mx-auto mt-1  ">
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
      <div className=" flex md:hidden  ">
        <div className="w-[85%]  mx-auto mt-0">
          {/*  @ts-ignore  */}
          <Slider {...settings}>
            <Link href="/c/bestprice">
              <Image
                src="/slider/smbanner1.jpg"
                alt="1"
              
              />
            </Link>
            <Link href="/c/bestprice">
              <Image
                src="/slider/smbanner2.jpg"
                alt="1"
              
              />
            </Link>
            <Link href="/c/bestprice">
              <Image
                src="/slider/smbanner4.jpg"
                alt="1"
              
              />
            </Link>
            <Link href="/c/bestprice">
              <Image
                src="/slider/smbanner3.jpg"
                alt="1"
              
              />
            </Link>
            <Link href="/c/bestprice">
              <Image
                src="/slider/smbanner5.jpg"
                alt="1"
              
              />
            </Link>
          </Slider>
        </div>
      </div>
    </>
  );
}
