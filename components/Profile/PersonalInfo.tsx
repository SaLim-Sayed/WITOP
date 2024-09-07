"use client";

import { useTranslations } from "next-intl";

import { Button, Input, Spinner } from "@nextui-org/react";

import { UserDataType } from "@/types/user";
import { BiCopy } from "react-icons/bi";
import ClientHydration from "../Global/Providers/ClientHydration";

export default function PersonalInfo({
  userData,
}: {
  userData: UserDataType | undefined;
}) {
  const trans = useTranslations("Profile");
 
  const handleCopy = () => {
    const textToCopy = `https://www.marocares.com/auth/register?invitationCode=${userData?.invitationCode}`;
    
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        alert("تم نسخ الرابط بنجاح!"); // Optional: Alert or notification to confirm copy
      },
      (err) => {
        alert("فشل في نسخ الرابط!"); // Optional: Handle copy failure
      }
    );
  }
      
  return (
    <ClientHydration LoaderComponent={<Spinner />}>
      <div className=" flex flex-col w-full gap-4">
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
              endContent={
                <Button
                  onClick={handleCopy}
                  className=" flex justify-center text-darkColor-40 cursor-pointer"
                >
                  نسخ
                  <BiCopy size={20} />
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </ClientHydration>
  );
}
