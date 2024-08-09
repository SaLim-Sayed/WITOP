"use client";
import Center from "@/components/Global/Ui/Center";
import Title from "@/components/Global/Ui/Title";
import { useRef } from "react";
import { Product as ProductType } from "@/types/product";
import Slider from "@ant-design/react-slick";
import GSlider from "@/components/Global/Ui/GSlider";
import { useLocale, useTranslations } from "next-intl";
import { settings } from "./setting";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Button } from "@nextui-org/react";
import GCardSkeleton from "@/components/Global/Loaders/GCardSkeleton";
import Image from "next/legacy/image";
export default function GSliderSlot({
  data,
  title,
}: {
  data: ProductType[];
  title: string;
}) {
  const slider = useRef<any>();
  const locale = useLocale();
  const dir = locale == "ar" ? true : false;
  const t = useTranslations("Buttons");

  return (
    <div>
      <Title title={t(title)} exSt="uppercase text-cyan-800" />
      <div>
        <div className="  relative  flex    ">
          <Button
            isIconOnly
            radius="full"
            className=" hidden  lg:flex absolute top-[50%] bg-cyan-400 text-white right-0 p-0 w-[20px]  h-[30px] z-10 "
            onClick={() => {
              locale == "ar"
                ? slider.current.slickNext()
                : slider.current.slickPrev();
            }}
          >
            {locale == "en" ? <IoIosArrowBack /> : <IoIosArrowForward />}
          </Button>
          <div className="w-[100%] lg:w-full  mx-auto ">
            {/*  @ts-ignore  */}
            <Slider dir={"ltr"} {...settings} ref={slider} key={3} autoplay>
              {data
                ? data.map((product) => (
                    <div
                       
                      key={product?._id}
                      className="mx-auto px-4 my-4 flex justify-center"
                    >
                      <GSlider
                        key={product?._id}
                        id={product?._id}
                        price={product?.price}
                        priceBeforeDiscount={product?.priceBeforeDiscount}
                        discountPercentage={product?.discountPercentage}
                        outOfStock={product?.outOfStock}
                        title={product?.productName}
                        desc={product?.description}
                        img={product?.images[0]}
                        category={product?.category}
                        totalRating={product?.totalRating}
                        stock={product?.stock}
                      />
                    </div>
                  ))
                : Array.from({ length: 4 }).map((_, _index: any) => (
                    <div
                      dir={dir ? "rtl" : "ltr"}
                      key={_index}
                      className="mx-auto px-4 flex justify-center"
                    >
                      <GCardSkeleton />
                    </div>
                  ))}
            </Slider>
          </div>
          <Button
            isIconOnly
            radius="full"
            className="hidden  lg:flex  absolute top-[50%] bg-cyan-500 text-white left-0 p-0 min-w-[30px] h-[30px] z-10 "
            onClick={() => {
              locale == "ar"
                ? slider.current.slickPrev()
                : slider.current.slickNext();
            }}
          >
            {locale == "en" ? <IoIosArrowForward /> : <IoIosArrowBack />}
          </Button>
        </div>
        <div className=" flex lg:hidden items-center justify-end gap-1 w-full">
          <Button
            className="p-0 bg-cyan-500 text-white  flex  min-w-[30px] h-[30px] rounded-full"
            onClick={() => {
              locale == "ar"
                ? slider.current.slickNext()
                : slider.current.slickPrev();
            }}
          >
            {locale == "en" ? <IoIosArrowBack /> : <IoIosArrowForward />}
          </Button>
          <div className="bg-cyan-500 text-white h-2 w-2 rounded-full" />
          <div className="bg-cyan-500 text-white h-2 w-2 rounded-full" />
          <Button
            className="p-0 bg-cyan-500 text-white  flex min-w-[30px] h-[30px] rounded-full"
            onClick={() => {
              locale == "ar"
                ? slider.current.slickPrev()
                : slider.current.slickNext();
            }}
          >
            {locale == "en" ? <IoIosArrowForward /> : <IoIosArrowBack />}
          </Button>
        </div>
      </div>
    </div>
  );
}
