"use client";

import React, { ReactNode, useRef, useState } from "react";

import { cn } from "@/libs/cn";

import Slider from "@ant-design/react-slick";
import { Button, Image } from "@nextui-org/react";

import Center from "../Ui/Center";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { settings } from "@/util/slickSettings";
import { useLocale } from "next-intl";
import { Category } from "./data.module";
import Title from "../Ui/Title";
export default function CategorySlider() {
  const [grab, setGrab] = useState(false);
  const slider = useRef<any>();
  const locale = useLocale();

  return (
    <Center>
      <Title title="All Categories"/>
      <div className="mx-auto  flex items-center  justify-center  ">
        <Button
          isIconOnly
          radius="full"
          className=" hidden lg:flex p-0 min-w-[40px]  h-[40px] z-10 "
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
            {Category.map((category) => (
              <div key={category.id} className=" flex flex-col gap-2 items-center justify-center">
                <Image
                  radius="full"
                  src={category.img}
                  alt="1"
                  width={150}
                  height={500}
                />
                <p className="text-center   text-xl ">{category.title}</p>
              </div>
            ))}
          </Slider>
        </div>
        <Button
          isIconOnly
          radius="full"
          className=" hidden lg:flex p-0 min-w-[40px] h-[40px] z-10 "
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
