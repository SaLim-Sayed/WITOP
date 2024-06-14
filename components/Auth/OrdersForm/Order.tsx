"use client";
import { Card } from "@nextui-org/react";
import LoginForm from "./OrdersForm";
import Center from "@/components/Global/Ui/Center";
import Title from "@/components/Global/Ui/Title";
import { useTranslations } from "next-intl";
import OrderForm from "./OrdersForm";

export default function OrderFormSubmit() {
  const tr = useTranslations("Auth");
  return (
    <div className="flex flex-col">
      <Title exSt="mt-4" title={'اتمام  عملية الشراء'} />
      <div className="flex justify-center  mb-4 ">
        <Card className="flex w-full   p-4 items-center flex-col  gap-[40px]">
          <OrderForm />
        </Card>
      </div>
    </div>
  );
}
