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

interface IProps {}

const ImageGallury = ({}: IProps) => {
  const locale=useLocale()
  const images = [
    { src: img1, alt: "img1" },
    { src: img2, alt: "img2" },
    { src: img3, alt: "img3" },
    { src: img4, alt: "img4" },
    { src: img5, alt: "img5" },
    { src: img6, alt: "img6" },
    { src: img7, alt: "img7" },
    { src: img8, alt: "img8" },
    { src: img9, alt: "img9" },
  ];
  return (
    <Tab.Group
      as="div"
      className="flex   justify-center items-center relative"
    >
      <Button
        
        size="sm"
        radius="sm"
        className={cn("absolute top-0 right-0 bg-lime-300 shadow-md z-20",
        locale==="ar"&&"left-0"
        )}
      >
        -50%
      </Button>
      {/* Image selector */}
      <div className="  mt-6  w-full ">
        <Tab.List className="grid  grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2">
          {images.map((image, index) => (
            <Tab
              key={index}
              className="relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-stone-900 hover:bg-stone-50 focus:outline-none"
            >
              
              {({ selected }) => (
                <>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <Image
                      width={200}
                      height={200}
                      alt=""
                      src={image.src}
                      className={` ${
                        selected ? " opacity-100 " : " opacity-50"
                      }  h-full w-full object-cover object-center `}
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
      
        {images.map((image, index) => (
          <Tab.Panel key={index}>
            <Image
              width={200}
              height={200}
              src={image.src}
              alt={image.alt}
              className="h-64 w-64 object-cover object-center sm:rounded-lg"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default ImageGallury;
