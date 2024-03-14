"use client";

import { Tab } from "@headlessui/react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useLocale } from "next-intl";
import { cn } from "@/libs/cn";

interface IProps {
  alt: any;
  images: string[] | undefined;
  discount?: number | undefined;
}

const ImageGallurySM = ({ alt, images, discount }: IProps) => {
  const locale = useLocale();

  return (
    <Tab.Group
      as="div"
      className="flex md:hidden flex-col  justify-center items-center relative"
    >
      <Tab.Panels className="aspect-w-1 aspect-h-1 w-full relative ">
        {images?.map((image, index) => (
          <Tab.Panel key={index}>
            <Image
              width={300}
              height={300}
              src={image}
              alt={alt}
              className="h-64 w-[20rem] object-fill object-center sm:rounded-lg"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>{" "}
      {/* Image selector */}
      <div className="  mt-6  w-full flex justify-around  ">
        <Tab.List className="flex  gap-2">
          {images?.map((image, index) => (
            <Tab
              key={index}
              className="relative flex h-12 w-12  cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-stone-900 hover:bg-stone-50 focus:outline-none"
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
    </Tab.Group>
  );
};

export default ImageGallurySM;
