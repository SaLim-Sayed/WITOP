"use client";
import { cn } from "@/libs/cn";
import { Button, Divider } from "@nextui-org/react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
export default function GCard({
  price,
  title,
  desc,
  id,
  img,
  exSt,
}: {
  price: any;
  title: string;
  desc: string;
  img: string;
  exSt?: string;
  id?: string;
}) {
  const translate = useTranslations("Buttons");
  return (
    <div className="flex flex-col gap-2 shadow-xl relative ">
      <Button
        key={id}
        size="sm"
        radius="sm"
        className="absolute -top-2 -left-2 bg-lime-300 shadow-md z-20"
      >
        -50%
      </Button>
      <Link href={`/product/${id}`}>
        <Card shadow="sm" isPressable>
          <CardBody className="overflow-visible bg-slate-100/30  p-0 flex flex-col gap-2">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={title}
              className="w-full object-cover "
              src={img}
            />
            <p className=" font-bold px-2">
              <span className=" line-through">{price + 100}$</span> {price}
            </p>
            <Divider />
            <b className="p-2">{title}</b>
            <p className="text-default-500 px-2">{desc}</p>
          </CardBody>
          <CardFooter className=" overflow-hidden p-0 font-bold     rounded-md bottom-1 w-[calc(100%_-_8px)] shadow-small  ml-1  z-10">
            <Button
              className=" w-full text-tiny text-white bg-teal-500 "
              variant="flat"
              color="default"
              radius="sm"
              size="sm"
            >
              <FaShoppingCart /> {translate("Shop")}
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}
