"use client";
import React from "react";
import Center from "../Global/Ui/Center";
import Layer from "../Global/Ui/Layer";
import { useTranslations } from "next-intl";
import Image from "next/legacy/image";
import ClientHydration from "../Global/Providers/ClientHydration";
import { Spinner } from "@nextui-org/react";

interface Props {
  title: string;
  image: any;
  desc?: any;
}
export default function Policy({ title, image, desc }: Props) {
  const t = useTranslations("Policy");
  return (
    <Center>
      <div className="mb-8 relative">
        <Layer title={t(title)} />
        <div className="flex flex-col  md:flex-row gap-8 mt-4">
          <div className="w-full md:w-[40%]  ">
            <Image
              src={image}
              alt="1"
              width={500}
              height={400}
              className="w-full h-100"
            />
          </div>

          <ClientHydration LoaderComponent={<Spinner />}>
            <div className="flex w-full md:w-[60%] flex-col gap-3 justify-center items-center">
              {desc}{" "}
            </div>
          </ClientHydration>
        </div>
      </div>
    </Center>
  );
}
