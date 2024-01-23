"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";

import { Button } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/libs/cn";

export default function Layer({
  title,
  subTitle,
  route,
  
}: {
  title?: any;
  subTitle?: string;
  route?: string;
   
}) {
  
  return (
    <div>
      <div
        className="flex text-center md:text-start flex-col text-white justify-center items-center h-[80px]"
        style={{
          background:
            "linear-gradient(91.39deg,#1299a8 31.4%,  #051b72 103.45%)",
        }}
      >
    <h1 className="text-[2.5rem] uppercase font-[700]">{title}</h1>
        <h2 className="text-lightColor-400">{subTitle}</h2>
      </div>
       
    </div>
  );
}
