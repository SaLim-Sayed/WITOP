"use client";

import { useTranslations } from "next-intl";
import { Button, Input, Spinner } from "@nextui-org/react";
import { UserDataType } from "@/types/user";
import { BiCopy } from "react-icons/bi";
import ClientHydration from "../Global/Providers/ClientHydration";
import { showToast } from "../Global/Ui/Toast";
import { useGetter } from "@/store/hooks/clientApi";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import Title from "../Global/Ui/Title";

export default function LoyaltySystem({
  userData,
}: {
  userData: UserDataType | undefined;
}) {
  const trans = useTranslations("Profile");

  const showSuccessToast = (message?: string) =>
    showToast({ type: "success", toastMessage: message });
  const showErrorToast = (message?: string) =>
    showToast({ type: "error", toastMessage: message });

  const { data, isError, isPending } = useGetter({
    endPoint: "/user/wallet",
    key: "Wallet",
  });
  // نسخ رابط كود الدعوة
  const handleCopy = () => {
    const textToCopy = `https://www.marocares.com/auth/register?invitationCode=${userData?.invitationCode}`;
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        showSuccessToast("تم نسخ الرابط بنجاح!");
      },
      (err) => {
        showErrorToast("فشل في نسخ الرابط!");
      }
    );
  };

  return (
    <ClientHydration LoaderComponent={<Spinner />}>
      <div className="flex flex-col justify-start w-full gap-4 mb-4">
        <div className="text-xl font-[800]">{trans("LoyaltySystem")}</div>
        <div className=" text-gray-500 font-[400] mb-8">
           
          هو نظام يتم ارسال كود الدعوة الي صديق و عند تسجيل بواسطة كود الدعوة و
          اتمام عملية الشراء بنجاح يتم ارسالة نسبة 10 % من قيمة الطلب الي مرسل
          الكود علي محفظته لأستخدام في معاملات اخرى
        </div>

        
        {/* معلومات المستخدم */}
        <div className="flex flex-col gap-8">
          {/* كود الدعوة */}
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              disabled
              type="text"
              variant="bordered"
              size="lg"
              classNames={{
                helperWrapper: "text-darkColor-40",
                input: "text-[1.2rem]",
                inputWrapper: "h-[84px]",
              }}
              label={trans("invitationCode")}
              value={userData?.invitationCode}
              endContent={
                <Button
                  onClick={handleCopy}
                  className="flex justify-center text-darkColor-40 cursor-pointer"
                >
                  نسخ
                  <BiCopy size={20} />
                </Button>
              }
            />
          </div>

          {/* المحفظة */}
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
              label={trans("Wallet")}
              value={data?.balance || "0"}
              endContent={<FaWallet size={20} />}
            />
          </div>

          {/* الشروط والأحكام */}
          <div className="flex flex-col gap-4">
            <div className="text-lg font-[800]">
              {trans("termsAndConditions")}
            </div>
            <p className="text-sm text-gray-500">{trans("termsText")}</p>
          </div>

          {/* رقم واتساب للتواصل */}
          <div className="flex items-center gap-2">
            <p className="text-lg font-[900]">{trans("whatsappSupport")}: </p>
            <div className="flex">
              <Link
                href="https://wa.me/+966542220888"
                className="text-blue-500 flex items-center gap-1 underline"
              >
                <BsWhatsapp /> <p>+966542220888</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ClientHydration>
  );
}
