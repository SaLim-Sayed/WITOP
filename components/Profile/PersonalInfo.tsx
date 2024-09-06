"use client";
import React from "react";

import { useTranslations } from "next-intl";
import Image from "next/legacy/image";
import Link from "next/link";

 
import { Input, Select, SelectItem, Spinner } from "@nextui-org/react";

import { arabianCountries } from "./arabCounty";
import { UserDataType } from "@/types/user";
import { MdPassword } from "react-icons/md";
import ClientHydration from "../Global/Providers/ClientHydration";

export default function PersonalInfo({
  userData,
}: {
  userData: UserDataType | undefined;
}) {
 
  const trans = useTranslations("Profile");

 
  return (
    <ClientHydration LoaderComponent={<Spinner />}>
      <div className=" flex flex-col w-[65%] gap-4">
        <div className="text-xl font-[600]">{trans("personal")}</div>
        <div className="flex flex-col gap-8">
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              disabled
              type="text"
              variant="bordered"
              size="lg"
              classNames={{
                input: "text-[1.2rem]",
                inputWrapper: "h-[84px]",
              }}
              label={trans("userName")}
              value={userData?.userName}
            />
            <Input
              disabled
              type="text"
              variant="bordered"
              size="lg"
              classNames={{
                input: "text-[1.2rem]",
                inputWrapper: "h-[84px]",
              }}
              label={trans("email")}
              value={userData?.email}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              disabled
              type={trans("invitationCode")}
              variant="bordered"
              size="lg"
              classNames={{
                helperWrapper: "text-darkColor-40",
                input: "text-[1.2rem] ",
                inputWrapper: "h-[84px]",
              }}
              label={trans("invitationCode")}
              value={userData?.invitationCode}
            />
          </div>
        </div>
      </div>
    </ClientHydration>
  );
}
