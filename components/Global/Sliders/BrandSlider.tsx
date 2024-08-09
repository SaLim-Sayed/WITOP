"use client";

import React, {  useRef, useState } from "react";
 
import Slider from "@ant-design/react-slick";
import { Button } from "@nextui-org/react";

import Center from "../Ui/Center";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { settings } from "@/util/slickSettings";
import { useLocale } from "next-intl";
import { Brands } from "./data.module";
import Title from "../Ui/Title";
import Image from "next/legacy/image";
import { useRouter } from "next/navigation";
export default function BrandSlider() {
    const router = useRouter();
  const [grab, setGrab] = useState(false);
  const slider = useRef<any>();
  const locale = useLocale();
  const dir = locale == "ar" ? true : false;
  
  return (
    <>
      <div className="mx-auto  flex items-center  justify-center  ">
        <Button
          isIconOnly
          radius="full"
          className=" hidden lg:flex p-0 min-w-[30px]  h-[30px] z-10 "
          onClick={() => {
            locale == "ar"
              ? slider.current.slickNext()
              : slider.current.slickPrev();
          }}
        >
          {locale == "en" ? <IoIosArrowBack /> : <IoIosArrowForward />}
        </Button>
        <div className="w-[90%] mb-12 mx-auto">
          {/*  @ts-ignore  */}
          <Slider rtl={dir} {...settings} ref={slider} autoplay>
            {Brands.map((brand) => (
              <div
                onClick={() => router.push(`/brands/${brand.brand}`)}
                key={brand.id}
                className=" grid grid-cols-1 grid-rows-2 gap-2 w-fit "
              >
                <Image
                  src={brand.img || ""}
                  alt="1"
                  width={1000}
                  height={1000}
                />
                <div className=" text-tiny  uppercase font-bold  flex justify-center mx-auto ">
                  {/* <p>{brand.brand}</p> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <Button
          isIconOnly
          radius="full"
          className=" hidden lg:flex p-0 min-w-[30px] h-[30px] z-10 "
          onClick={() => {
            locale == "ar"
              ? slider.current.slickPrev()
              : slider.current.slickNext();
          }}
        >
          {locale == "en" ? <IoIosArrowForward /> : <IoIosArrowBack />}
        </Button>
      </div>
    </>
  );
}
