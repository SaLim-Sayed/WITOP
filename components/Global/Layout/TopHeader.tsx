"use client";

import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

import Link from "next/link";
import { FaSignLanguage } from "react-icons/fa";
import Center from "../Ui/Center";
import { BiWorld } from "react-icons/bi";
const TopHeader = () => {
  const locale = useLocale();
  const pathName = usePathname();
  const router = useRouter();

  const getDirection = () => {
    Cookies.set("NEXT_LOCALE", locale == "ar" ? "en" : "ar");
    if (pathName == "/ar" || pathName == "/") {
      return locale == "en" ? "/ar" : "en";
    }

    return locale == "en"
      ? `/ar/${pathName}`
      : pathName.replace("/ar/", "/en/");
  };

  const switchLang = () => {
    router.push(getDirection());
  };
  const translate = useTranslations("Globals");
  return (
    <div className="flex  w-full items-center justify-center px-10 h-[80px] md:h-[40px] z-50 bg-slate-300 ">
      <Center>
        <div className="flex   md:flex-row gap-[9px] items-center  justify-center px-1 md:px-10 h-[40px] z-50  ">
          <h1>
            {translate("Navbar/Offer")}
            <Link href="" className="text-white">
              {translate("Navbar/Offer/Conditions")}
            </Link>
          </h1>
          
        </div>
      </Center>
    </div>
  );
};

export default TopHeader;
