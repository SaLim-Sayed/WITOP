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
    <div className="flex  items-center justify-between px-10 h-[80px] md:h-[40px] z-50 bg-slate-300 ">
      <Center>
        <div className="flex   md:flex-row gap-[9px] items-center  justify-between px-1 md:px-10 h-[40px] z-50  ">
          <h1>
            {translate("Navbar/Offer")}
            <Link href="" className="text-white">
            {translate("Navbar/Offer/Conditions")}
            </Link>
          </h1>
          <div className="   lg:w-max lg:mx-[10px]  ">
            <Button
             
              
             variant="shadow"
            
              className=" bg-teal-700 w-10 h-8 text-white font-bold px-2 justify-center my-2 flex gap-2  "
              onClick={switchLang}
            >
              <BiWorld />
          <div>{locale == "en" ? " | En" :" | ع"  }</div>
            </Button>
          </div>
        </div>
      </Center>
    </div>
  );
};

export default TopHeader;
