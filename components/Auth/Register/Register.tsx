"use client";
import { Card } from "@nextui-org/react";
import RegisterForm from "./RegisterForm";
import Center from "@/components/Global/Ui/Center";
import Title from "@/components/Global/Ui/Title";
import { useTranslations } from "next-intl";

export default function Register() {
  const tr = useTranslations("Auth");
  return (
    <Center>
      <Title exSt="mt-4" title={tr("Register/Title")} />
      <div className="flex justify-center mb-4 ">
        <Card className="flex w-full md:w-[50%]    p-4 items-center flex-col  gap-[40px]">
          <RegisterForm />
        </Card>
      </div>
    </Center>
  );
}
