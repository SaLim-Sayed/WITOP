"use client";

import React, { ReactNode } from "react";

import { cn } from "@/libs/cn";
import arrowLeftIcon from "@/public/icons/arrow-left.svg";
import arrowRightIcon from "@/public/icons/arrow-right.svg";
import Slider from "@ant-design/react-slick";
import { Button, Image } from "@nextui-org/react";

import Center from "../Ui/Center";
import Title from "../Ui/Title";

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
        <div>
          <Image src="/slider/banner1.jpg" alt="1" width={1500} />
        </div>
        <div>
          <Image src="/slider/banner4.jpg" alt="1" width={1500} />
        </div>
        <div>
          <Image src="/slider/banner3.jpg" alt="1" width={1500} />
        </div>
        <div>
          <Image src="/slider/banner3.webp" alt="1" width={1500} />
        </div>
      </Slider>
    </div>
  );
}
