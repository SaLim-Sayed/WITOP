"use client";
import { Key, useState } from "react";
import Slider from "@ant-design/react-slick";
import { Button } from "@nextui-org/react";
// import { TImageCollection } from '../../../@types/hotels/hotel-slice';s
import SlideCard from "./slide-card";
import { slideSettings } from "@/constant/constant";

type Props = {
  images?: any[];
  isLarge?: boolean;
  title?: string;
};

export default function Swipper({ images, isLarge, title }: Props) {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="relative max-w-[100%]">
      {/*  @ts-ignore  */}
      <Slider
        {...slideSettings}
        afterChange={(current) => setActiveSlide(current)}
      >
        {!images &&
          new Array(4)
            .fill(0)
            .map((target, index) => <SlideCard key={index} />)}
        {images &&
          images.map((target, index: Key | null | undefined) => (
            <SlideCard
              isLarge={isLarge}
              src={target}
              key={index}
              alt={target}
            />
          ))}
      </Slider>
      <Button
        className="absolute bottom-[10px] z-20 right-[10px] h-[29px] min-w-[73.51px] rounded-[3px] bg-gray-950/80 text-orange-400"
        size="sm"
      >
        <span className="text-[12px]">{activeSlide + 1}</span>
        <span>-</span>
        <span className="text-[14px]">{images?.length || 6}</span>
      </Button>
      <div className="absolute border-2 border-t-none bottom-[0px] px-2 left-[0px] h-[49px] min-w-full rounded-b-[10px] bg-white text-orange-400">
        {title}
      </div>
    </div>
  );
}
