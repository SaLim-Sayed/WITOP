"use client";
import { useTranslations } from "next-intl";
import Image from "next/legacy/image";

import profileIcon from "@/public/icons/profile.svg";
import { RiProfileFill } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
import { UserDataType } from "@/types/user";

export default function InfoLayer({
  userData,
}: {
  userData: UserDataType | undefined;
}) {
  const trans = useTranslations("Profile");
  return (
    <div className="flex gap-8">
      <div className="flex">
        <div className="relative  w-[110px] h-[110px]  -top-[20%] border-8 bg-white border-white rounded-full  ">
          <div className=" absolute   z-50 -bottom-[60%] -translate-y-[60%] left-[50%] -translate-x-[50%]">
            <RiProfileFill />
          </div>
          <div className=" flex flex-col items-center">
            <FcAbout />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center    ">
        <p className="text-2xl font-[700]">{userData?.userName}</p>
        <p className=" font-[400] text-mainColor-900">{trans("user_title")}</p>
      </div>
    </div>
  );
}
