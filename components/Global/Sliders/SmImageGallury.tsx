import React, { useEffect, useRef, useState } from "react";
import Slider from "@ant-design/react-slick";
import Image from "next/legacy/image";

interface IProps {
  alt: any;
  images: string[] | undefined;
  discount?: number | undefined;
}

const SmImageGallury = ({ alt, images, discount }: IProps) => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);
  
  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  return (
    <div className=" flex md:hidden flex-col gap-3 justify-center  w-64">
      <Slider asNavFor={nav2} ref={sliderRef1}>
        {images?.map((image, index) => (
          <div key={index} className="h-64 w-[20rem] flex justify-center">
            <Image
              width={300}
              height={300}
              src={image}
              alt={alt}
              className="h-64 w-[20rem] object-center sm:rounded-lg"
            />
          </div>
        ))}
      </Slider>

      {/* @ts-ignore */}
      <Slider
        asNavFor={nav1}
        ref={sliderRef2}
        slidesToShow={2}
        swipeToSlide={true}
        focusOnSelect={true}
     
      >
        {images?.map((image, index) => (
          <div key={index} className=" flex justify-center items-center ">
            <Image
              width={50}
              height={50}
              src={image}
              alt={alt}
              className=" object-center sm:rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SmImageGallury;
