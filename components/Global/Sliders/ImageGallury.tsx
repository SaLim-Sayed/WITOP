"use client";

import { Tab } from "@headlessui/react";
import img1 from "@/public/gallory/1.jpg";
import img2 from "@/public/gallory/2.jpg";
import img3 from "@/public/gallory/3.jpg";
import img4 from "@/public/gallory/4.jpg";
import img5 from "@/public/gallory/5.jpg";
import img6 from "@/public/gallory/6.jpg";
import img7 from "@/public/gallory/7.jpg";
import img8 from "@/public/gallory/8.jpg";
import img9 from "@/public/gallory/9.jpg";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useLocale } from "next-intl";
import { cn } from "@/libs/cn";

interface IProps {
  alt: any;
  images: string[]| undefined ;
  discount: number | undefined;
}

const ImageGallury = ({ alt, images, discount }: IProps) => {
  const locale = useLocale();

  return (
    <Tab.Group as="div" className="flex   justify-center items-center relative">
      <Button
        size="sm"
        radius="sm"
        className={cn(
          "absolute top-0  bg-lime-300 shadow-md z-20",
          locale === "ar" ?"left-0":"right-0"
        )}
      >
        {discount}%
      </Button>
      {/* Image selector */}
      <div className="  mt-6  w-full flex justify-around  ">
        <Tab.List className="flex flex-col gap-2">
          {images?.map((image, index) => (
            <Tab
              key={index}
              className="relative flex h-24 w-24  cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-stone-900 hover:bg-stone-50 focus:outline-none"
            >
              {({ selected }) => (
                <>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <Image
                      width={300}
                      height={300}
                      alt=""
                      src={image}
                      className={` ${
                        selected ? " opacity-100 " : " opacity-50"
                      }  h-32 w-32 object-cover object-center `}
                    />
                  </span>
                  <span
                    className={`${
                      selected
                        ? "ring-sky-500 "
                        : "ring-transparent bg-slate-400 opacity-10"
                    }
                  "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                `}
                    aria-hidden="true"
                  />
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="aspect-w-1 aspect-h-1 w-full relative ">
        {images?.map((image, index) => (
          <Tab.Panel key={index}>
            <Image
              width={200}
              height={200}
              src={image}
              alt={alt}
              className="h-64 w-64 object-cover object-center sm:rounded-lg"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default ImageGallury;
