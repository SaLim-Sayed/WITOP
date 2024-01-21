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
}: {
  price: any;
  title: string;
  desc: string;
  img: string;
  exSt?: string;
  id?: string;
  product?: Product;
  category?: string;
}) {
  const translate = useTranslations("Buttons");
  const router = useRouter();
  const locale = useLocale();
  const dir = locale == "ar" ? "rtl" : "ltr";
  return (
    <ClientHydration LoaderComponent={<GCardSkeleton />}>
      <div
        dir={dir}
        className="flex flex-col gap-2 shadow-xl max-w-[600px] min-w-[250px] rounded-lg relative "
      >
        <Button
          key={id}
          size="md"
          radius="sm"
          className="absolute -top-2 -left-2 bg-lime-300 shadow-md z-20"
        >
          -50%
        </Button>

        <Card
          className="w-full"
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
              <div className="flex flex-col items-start">
                <b className="text-lg text-blue-900">{title}</b>
                <b className=" text-slate-600">{category}</b>
              </div>
              <div className=" flex flex-col font-bold items-end  ">
                <span className=" line-through text-gray-500 font-normal">
                  {price + 100}
                </span>
                <span>{price} SAR</span>
              </div>
            </div>
          </CardBody>
          <CardFooter className=" overflow-hidden p-0 font-bold        shadow-small   z-10">
            <Button
              className=" w-full text-lg text-white bg-teal-500 "
              variant="flat"
              color="default"
              radius="none"
              size="md"
            >
               {translate("Shop")}<FaShoppingCart />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </ClientHydration>
  );
}
