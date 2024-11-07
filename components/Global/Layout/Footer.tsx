"use client";

import { Button, Divider } from "@nextui-org/react";

import { MdCopyright } from "react-icons/md";
import Title from "../Ui/Title";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";

export default function Footer() {
  const t = useTranslations("Policy");
  const phoneNumber = "+966547448149"; // The phone number for the chat (including country code)
  const message = "Hello, I am interested in your products.";
  return (
    <footer className="bg-black text-white relative z-40   p-[3px] lg:p-[40px] flex flex-col justify-start gap-[30px] text-lightColor-900">
      <div className="mx-3">
        <Title
          exSt="mt-0 text-[#ffa458]"
          title="WITOP DECOR"
          exStSubTitle="text-[#ffa458] uppercase text-sm font-normal"
        />
      </div>

      <Divider className=" text-white bg-slate-600" />
      <div className="flex items-center  text-sm md:text-lg  gap-4 flex-col justify-center md:flex-row md:justify-between">
        <div className="flex items-center text-center">
          <div>{t("copyRight")}</div>
          <MdCopyright />
          <div>{new Date().getFullYear()} </div>
        </div>
        <div className="flex gap-4">
          <Button
            variant="faded"
            color="primary"
            as={Link}
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61565975191172&mibextid=ZbWKwL"
            isIconOnly
          >
            <FaFacebook size={40} />
          </Button>
          <Button
            variant="faded"
            color="success"
            as={Link}
            target="_blank"
            href="weixin://dl/officialaccounts?scene=108&need_open_webview=1&url=https://m.wechat.com/c/+966547448149"
            isIconOnly
          >
            <IoLogoWechat size={40} />
          </Button>
          <Button
            variant="faded"
            color="success"
            as={Link}
            target="_blank"
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`}
            isIconOnly
          >
            <FaWhatsapp size={40} />
          </Button>
        </div>
      </div>
    </footer>
  );
}
