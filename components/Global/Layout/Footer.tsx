"use client";

import Image from "next/image";

import { Button, Card, Checkbox, Divider, Input } from "@nextui-org/react";

import Title from "../Ui/Title";
import { footerData } from "./footerData.module";
import { MdCopyright, MdEmail } from "react-icons/md";
import { BsMailbox, BsPaypal } from "react-icons/bs";
import {
  FaCcAmex,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { BiCopy } from "react-icons/bi";

export default function Footer() {
  const t = useTranslations("Policy");
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
            <FaFacebook size={40} />
            <FaInstagram size={40} />
            <FaTwitter size={40} />
            <FaTiktok size={40} />
            <FaSnapchat size={40} />
            <FaWhatsapp size={40} />
          </div>
      </div>
    </footer>
  );
}
