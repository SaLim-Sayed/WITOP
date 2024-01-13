"use client";

import React from "react";

import { cn } from "@/libs/cn";

import Slider from "@ant-design/react-slick";
import { Image } from "@nextui-org/react";

import Link from "next/link";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-[96%] mx-auto mt-4">
      <Slider {...settings}>
    <Link href="/c/bestprice">
          <Image radius="none" src="/slider/banner1.jpg" alt="1" width={1500}  className=" min-h-48" />
        </Link>
    <Link href="/c/bestprice">
          <Image radius="none" src="/slider/banner2.jpg" alt="1" width={1500}  className=" min-h-48" />
        </Link>
        <Link href="/c/bestprice">
          <Image radius="none" src="/slider/banner4.jpg" alt="1" width={1500}  className=" min-h-48" />
         </Link>
        <Link href="/c/bestprice">
          <Image radius="none" src="/slider/banner3.jpg" alt="1" width={1500}  className=" min-h-48" />
         </Link>
        <Link href="/c/bestprice">
          <Image radius="none" src="/slider/banner3.webp" alt="1" width={1500}  className=" min-h-48" />
         </Link>
      </Slider>
    </div>
  );
}
