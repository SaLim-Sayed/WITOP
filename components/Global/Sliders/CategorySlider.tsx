"use client";

import React, { ReactNode, useRef, useState } from "react";

import { cn } from "@/libs/cn";

import Slider from "@ant-design/react-slick";
import { Button, Image } from "@nextui-org/react";

import Center from "../Ui/Center";
import Title from "../Ui/Title";
import { BiArrowFromLeft, BiArrowToRight } from "react-icons/bi";
import { BsArrowReturnRight } from "react-icons/bs";

export default function CategorySlider() {
  const [grab, setGrab] = useState(false);
  const slider = useRef<any>();
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  return (
    <Center>
     <div className="mx-auto">
         
      <div className="w-full my-12 mx-auto">
        {/*  @ts-ignore  */}
        <Slider dir="rtl" {...settings} ref={slider} autoplay>
          <div>
            <Image
              radius="full"
              src="/mainslide/1.webp"
              alt="1"
              width={100}
              height={500}
            />
          </div>
          <div>
            <Image
              radius="full"
              src="/mainslide/2.webp"
              alt="1"
              width={100}
              height={500}
            />
          </div>
          <div>
            <Image
              radius="full"
              src="/mainslide/3.webp"
              alt="1"
              width={100}
              height={500}
            />
          </div>
          <div>
            <Image
              radius="full"
              src="/mainslide/4.webp"
              alt="1"
              width={100}
              height={500}
            />
          </div>
          <div>
            <Image
              radius="full"
              src="/mainslide/5.webp"
              alt="1"
              width={100}
              height={500}
            />
          </div>
          <div>
            <Image
              radius="full"
              src="/mainslide/6.webp"
              alt="1"
              width={100}
              height={500}
            />
          </div>
          <div>
            <Image
              radius="full"
              src="/mainslide/7.webp"
              alt="1"
              width={100}
              height={500}
            />
          </div>
          <div>
            <Image
              radius="full"
              src="/mainslide/8.webp"
              alt="1"
              width={100}
              height={500}
            />
          </div>
          <div>
            <Image
              radius="full"
              src="/mainslide/9.webp"
              alt="1"
              width={100}
              height={500}
            />
          </div>
        </Slider>
      </div>
       
     </div>
    </Center>
  );
}
