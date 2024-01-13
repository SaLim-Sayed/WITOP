"use client";

import React, { ReactNode, useRef, useState } from "react";

import { cn } from "@/libs/cn";

import Slider from "@ant-design/react-slick";
import { Button, Image } from "@nextui-org/react";

import Center from "../Ui/Center";
import {
  BiLeftArrow,
  BiRightArrow,
} from "react-icons/bi";
import { settings } from "@/util/slickSettings";
import { useLocale } from "next-intl";
export default function CategorySlider() {
  const [grab, setGrab] = useState(false);
  const slider = useRef<any>();
  const locale = useLocale();

  return (
    <Center>
      <div className="mx-auto  flex items-center  justify-center  ">
        <Button
        isIconOnly
        radius="full"
          className="p-0 min-w-[40px] h-[40px] z-50 "
          onClick={() => {
            locale == "ar"
              ? slider.current.slickNext()
              : slider.current.slickPrev();
          }}
        >
          {locale == "en" ? <BiLeftArrow /> : <BiRightArrow />}
        </Button>
        <div className="w-[90%] my-12 mx-auto">
          {/*  @ts-ignore  */}
          <Slider dir="rtl" {...settings} ref={slider} autoplay>
            <div>
              <Image
                radius="full"
                src="/mainslide/1.webp"
                alt="1"
                width={150}
                height={500}
              />
            </div>
            <div>
              <Image
                radius="full"
                src="/mainslide/2.webp"
                alt="1"
                width={150}
                height={500}
              />
            </div>
            <div>
              <Image
                radius="full"
                src="/mainslide/3.webp"
                alt="1"
                width={150}
                height={500}
              />
            </div>
            <div>
              <Image
                radius="full"
                src="/mainslide/4.webp"
                alt="1"
                width={150}
                height={500}
              />
            </div>
            <div>
              <Image
                radius="full"
                src="/mainslide/5.webp"
                alt="1"
                width={150}
                height={500}
              />
            </div>
            <div>
              <Image
                radius="full"
                src="/mainslide/6.webp"
                alt="1"
                width={150}
                height={500}
              />
            </div>
            <div>
              <Image
                radius="full"
                src="/mainslide/7.webp"
                alt="1"
                width={150}
                height={500}
              />
            </div>
            <div>
              <Image
                radius="full"
                src="/mainslide/8.webp"
                alt="1"
                width={150}
                height={500}
              />
            </div>
            <div>
              <Image
                radius="full"
                src="/mainslide/9.webp"
                alt="1"
                width={150}
                height={500}
              />
            </div>
          </Slider>
        </div>
        <Button
         isIconOnly
         radius="full"
           className="p-0 min-w-[40px] h-[40px] z-50 "
          onClick={() => {
            locale == "ar"
              ? slider.current.slickPrev()
              : slider.current.slickNext();
          }}
        >
          {locale == "en" ? <BiRightArrow /> : <BiLeftArrow />}
        </Button>
      </div>
    </Center>
  );
}
