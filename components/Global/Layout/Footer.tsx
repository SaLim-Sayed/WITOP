"use client";

import Image from "next/image";

import { Button, Checkbox, Divider, Input } from "@nextui-org/react";

import Title from "../Ui/Title";
import { footerData } from "./footerData.module";
import { MdEmail } from "react-icons/md";
import { BsMailbox, BsPaypal } from "react-icons/bs";
import {
  FaCcAmex,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white relative   mt-[97px] p-[3px] lg:p-[40px] flex flex-col justify-start gap-[30px] text-lightColor-900">
      <div className="mx-3">
        <Title
          exSt="mt-0"
          title="Cosmetis logo"
          exStSubTitle="text-slate-400 text-sm font-normal"
          subTitle="BEST PRICE - BETTER CARE"
        />
      </div>
      <Divider className=" text-white bg-slate-600" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  w-full justify-items-center gap-32">
        <div className="grid grid-cols-2   items-stretch">
        <Image
          src="/footer.png"
          alt="1"
          width={100}
          height={40}
          className="w-24 h-24 mx-3"
        />
         <div className="flex flex-col gap-2">
            {footerData.map((item, index) => (
              <div key={index} className="flex gap-6 flex-col">
                <p className="  text-lg font-light">{item}</p>
              </div>
            ))}
          </div>
        </div>
         
        <div className="flex flex-col gap-8 mx-12  w-[80%]">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <MdEmail /> Email
            </div>
            <div className=" text-slate-500">help@cosmetis.com</div>
          </div>
          <div className="flex flex-col   gap-4 mx-3">
            <div className="flex items-center ">
              Stay up to date, get our newsletter!
            </div>
            <div className=" text-slate-500">
              <Input
                className=" h-4"
                startContent={
                  <MdEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                endContent={
                  <Button size="lg" className="p-0 m-0 h-full">
                    Subscribe
                  </Button>
                }
              />
            </div>
            <div className="flex mt-8">
              <Checkbox classNames={{ label: "text-slate-100" }}>
                Yes, I want to receive newsletters from Cosmetis, with
                promotions, campaigns and news.
              </Checkbox>
            </div>
            <div className="flex gap-4">
              <FaFacebook size={40} />
              <FaInstagram size={40} />
            </div>
          </div>
        </div>
      </div>
      <Divider className=" text-white bg-slate-600" />
      <div className="flex items-center  gap-4 flex-col justify-center md:flex-row md:justify-between">
        <div>© 7SKIN 2024 - All rights reserved.</div>
        <div className="flex gap-4">
          <FaCcVisa size={40} />
          <FaCcMastercard size={40} />
          <FaCcAmex size={40} />
          <FaCcPaypal size={40} />
        </div>
      </div>
    </footer>
  );
}
