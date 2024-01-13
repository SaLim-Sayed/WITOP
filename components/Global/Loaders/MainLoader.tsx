"use client";
import { Button, Image, Spinner } from "@nextui-org/react";
import { useTranslations } from "next-intl";

interface IProps {}

const MainLoader = ({}: IProps) => {
  const t = useTranslations("Globals");
  return (
    <div className="h-screen w-full flex  flex-col items-center justify-center">
      <Spinner label={`  ${t("Welcome")} 👋! ${t("Wait")}  `} color="warning" />
    </div>
  );
};

export default MainLoader;
