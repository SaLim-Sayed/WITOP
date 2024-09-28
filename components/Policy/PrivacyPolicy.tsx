"use client";
import React from "react";
import Center from "../Global/Ui/Center";
import Layer from "../Global/Ui/Layer";
import { useTranslations } from "next-intl";
import Image from "next/legacy/image";

interface Props {
  title: string;
  image: any;
  desc?: string;
}
export default function PrivacyPolicy({ title, image, desc }: Props) {
  const t = useTranslations("Policy");
  return (
    <Center>
      <div className="mb-8">
        <Layer title={t(title)} />
        <div className="flex flex-col md:flex-row gap-8 mt-4">
          <div className="flex w-full md:w-[60%] flex-col gap-3 justify-center items-center">
            {desc}{" "}
          </div>
          <Image src={image} alt="1" width={500} height={400} />
        </div>
      </div>
    </Center>
  );
}
