"use client";

import React, {  useRef, useState } from "react";
 
import Slider from "@ant-design/react-slick";
import { Button } from "@nextui-org/react";

import Center from "../Ui/Center";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { settings } from "@/util/slickSettings";
import { useLocale, useTranslations } from "next-intl";
import { Category } from "./data.module";
import Title from "../Ui/Title";
import Image from "next/legacy/image";
import { useNavigation } from "@/util/useNavigation";
export default function CategorySlider() {
  const [grab, setGrab] = useState(false);
  const slider = useRef<any>();
  const locale = useLocale();
  const dir = locale == "ar" ? true : false;
  const t = useTranslations("Buttons");
  const {navigateTo}=useNavigation()
  return (
    <Center>
      <Title
        exSt=" mb-10 mt-10 uppercase text-cyan-800"
        title={t("ALL CATEGORIES")}
      />
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
            {Category.map((category) => (
              <div
                onClick={() => navigateTo(`/category/${category.title}`)}
                key={category.id}
                className=" grid grid-cols-1 grid-rows-2 gap-2 w-fit cursor-pointer "
              >
                <Image src={category.img} alt="1" width={1000} height={1000} />
                <div className=" text-tiny  uppercase font-bold  flex justify-center mx-auto ">
                  <p>{category.title}</p>
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
    </Center>
  );
}
