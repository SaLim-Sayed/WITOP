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
export default function GCard({
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
  const t=useTranslations("Globals")
  const router = useRouter();
  const locale = useLocale();
  const dir = locale == "ar" ? "rtl" : "ltr";
  return (
    <ClientHydration LoaderComponent={<GCardSkeleton />}>
      <div
        dir={dir}
        className="flex flex-col gap-2 shadow-xl max-w-[400px] min-w-[250px] lg:min-w-[285px] max-h-[350px]  rounded-lg relative "
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
          className="w-full h-[350px]"
          shadow="md"
          isPressable
          onClick={() => router.push(`/product/${category}/${id}`)}
        >
          <CardBody className="overflow-visible  p-0 flex flex-col gap-2">
            <div className="h-[200px] relative  mb-0 overflow-hidden">
              <Image
                layout="fill"
                alt={title}
                className="w-fit   object-contain "
                src={img}
              />
            </div>
            <Divider className="mt-0 pt-0" />
            <div className="flex justify-between items-start mx-2">
              <div className="flex w-[70%] flex-col gap-2 items-start">
                <p className="text-dark " title={title}>
                  {title.slice(0, 20)}...
                </p>
                <p className=" text-slate-600">{category}</p>
              </div>
              <div className=" flex flex-col w-[30%] font-bold items-end  ">
                <span className=" line-through text-gray-500 font-normal">
                  {priceBeforeDiscount}
                </span>
                <span className="text-red-700">
                  {price} {t("SAR")}
                </span>
              </div>
            </div>
          </CardBody>
          <CardFooter className=" overflow-hidden p-0 font-bold shadow-small z-10">
            <Button
              className=" w-full text-lg text-white flex justify-between bg-teal-700 "
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
