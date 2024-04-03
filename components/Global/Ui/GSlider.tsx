"use client";
import { cn } from "@/libs/cn";
import { Product } from "@/types/product";
import { Button, Divider } from "@nextui-org/react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/legacy/image";
import { useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import ClientHydration from "../Providers/ClientHydration";
import GCardSkeleton from "../Loaders/GCardSkeleton";
export default function GSlider({
  price,
  title,
  desc,
  id,
  img,
  exSt,
  product,
  category,
  priceBeforeDiscount,
  discountPercentage,
}: {
  price: any;
  title: string;
  desc: string;
  img: string;
  exSt?: string;
  id?: string;
  product?: Product;
  category?: string;
  priceBeforeDiscount?: any;
  discountPercentage?: any;
  outOfStock?: any;
}) {
  const translate = useTranslations("Buttons");
  const t = useTranslations("Globals");
  const router = useRouter();
  const locale = useLocale();
  const dir = locale == "ar" ? "rtl" : "ltr";
  return (
    <ClientHydration LoaderComponent={<GCardSkeleton />}>
      <div
        dir={dir}
        className="flex flex-col gap-2 shadow-xl   max-h-[350px]  rounded-lg relative "
      >
        {/* <Button
          key={id}
          size="md"
          radius="sm"
          className="absolute -top-2 -left-2 bg-lime-300 shadow-md z-20"
        >
          -{discountPercentage ? discountPercentage : 10}%
        </Button> */}

        <Card
          className="w-full h-[250px] md:h-[300px] shadow-sm"
          shadow="md"
          isPressable
          onClick={() => router.push(`/product/${category}/${id}`)}
        >
          <CardBody className="overflow-visible  p-0 flex flex-col gap-2">
            <div className="h-[100px] md:h-[150px] relative  mb-0 overflow-hidden">
              <Image
                layout="fill"
                alt={title}
                className="w-fit   object-contain "
                src={img}
              />
            </div>
            <Divider className="mt-0 pt-0" />
            <div className="flex flex-col gap-4 justify-between">
              <div className="flex justify-between   mx-2">
                <div className="flex flex-col gap-2 ">
                  <p
                    className="text-slate-950 overflow-clip font-[300] text-[12px]  md:font-[400] text-start md:text-[16px] font-sans    "
                    title={title}
                  >
                    {title.slice(0, 25)}...
                  </p>
                </div>
              </div>
              <div className="flex   flex-col md:flex-row justify-start md:justify-between items-start mx-2 gap-2">
                <div className="flex w-full md:w-[70%] flex-col gap-2 items-start">
                  <p className=" text-slate-600 font-[300] text-[10px] overflow-hidden  md:font-[400] text-start md:text-[16px]">
                    {category}
                  </p>
                </div>
                <div className="hidden  md:flex flex-col w-full md:w-[30%]   items-start md:items-end  ">
                  <span className=" line-through text-gray-500 font-normal">
                    {priceBeforeDiscount}
                  </span>
                  <span className="text-red-700">
                    {price} {t("SAR")}
                  </span>
                </div>
              </div>
            </div>
          </CardBody>
          <CardFooter className=" overflow-hidden p-0   shadow-small z-10">
            <Button
              className=" w-full text-[13px] md:text-lg text-white flex justify-between bg-teal-700 "
              variant="flat"
              color="default"
              radius="none"
              size="md"
            >
              {translate("Shop")}
              <FaShoppingCart />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </ClientHydration>
  );
}
