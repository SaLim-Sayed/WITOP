"use client";
import { useTranslations } from "next-intl";

import { cartStore } from "@/store/futures/cartStore";

export default function Layer({
  title,
  subTitle,
}: {
  title?: any;
  subTitle?: string;
  route?: string;
}) {
  const transContent = useTranslations("Globals");
  const { TotalCartAmount } = cartStore();

  return (
    <div>
      <div
        className="flex relative text-center md:text-start  gap-4  text-white justify-center items-center h-[150px]"
        style={{
          background:
            "linear-gradient(91.39deg,#1299a8 31.4%,  #051b72 103.45%)",
        }}
      >
        <h1 className="text-[2.5rem] uppercase font-[700]"> {title} </h1>
      { TotalCartAmount? <div className="    -bottom-10 right-4 w-32 h-12 bg-gray-100 text-cyan-600  flex text-[500] justify-center items-center rounded-lg ">
          {TotalCartAmount && Math.round(TotalCartAmount)}{" "}
          {TotalCartAmount&&transContent("SAR")}
        </div>:""}
        <h2 className="text-lightColor-400">{subTitle}</h2>
      </div>
    </div>
  );
}
