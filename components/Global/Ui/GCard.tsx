"use client";
import { cn } from "@/libs/cn";
import { Product } from "@/types/product";
import { Button, Divider } from "@nextui-org/react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Image from "next/legacy/image";
import { useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
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
  return (
    <div className="flex flex-col gap-2 shadow-xl rounded-lg relative ">
      <Button
        key={id}
        size="sm"
        radius="sm"
        className="absolute -top-2 -left-2 bg-lime-300 shadow-md z-20"
      >
        -50%
      </Button>

      <Card
        isPressable
        onClick={() => router.push(`/product/${category}/${id}`)}
      >
        <CardBody className="overflow-visible    p-0 flex flex-col gap-2">
          <div className="h-[200px] relative overflow-hidden">
            <Image
              layout="fill"
              alt={title}
              className="w-full object-cover "
              src={img}
            />
          </div>
          <Divider />
          <div className="flex justify-between items-start mx-2">
            <div className="flex flex-col items-start">
              <b className="text-lg text-blue-900">{title}</b>
              <b className=" text-slate-600">{category}</b>
            </div>
            <div className=" flex flex-col font-bold items-end  ">
              <span className=" line-through text-red-700">{price + 100}</span>
              <span>{price} SAR</span>
            </div>
          </div>

          <p className="text-default-500 px-2">{desc}</p>
        </CardBody>
        <CardFooter className=" overflow-hidden p-0 font-bold        shadow-small   z-10">
          <Button
            className=" w-full text-lg text-white bg-teal-500 "
            variant="flat"
            color="default"
            radius="none"
            size="sm"
          >
            <FaShoppingCart /> {translate("Shop")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
