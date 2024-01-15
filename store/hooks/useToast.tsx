"use client";
import Cookies from "js-cookie";

import { useTranslations } from "next-intl";
import { MdConnectingAirports } from "react-icons/md";
import { toast, TypeOptions } from "react-toastify";

export default function useToast({
  status,
  type,
  error,
 
}: {
  status: string;
  type: TypeOptions;
  error?: Error;
 
}) {
  const transAlert = useTranslations("Alert");

  const msg=Cookies.get("msg")||"su";
  const errMsg=Cookies.get("errMsg")||transAlert("Contact/Form/ErrorMsg");
  const showToast = () => {
    const iconColor =
      type === "error" ? "text-primaryColor-600" : "text-primaryColor-900";
    const icon = (
      <div className="w-[100px] h-[100px]">
        <MdConnectingAirports className={`text-${iconColor} text-[35px]`} />
      </div>
    );

    const message =
      type === "error" ? (
        <div className="flex flex-col gap-3 justify-center items-center">
          <div className={`text-[35px] font-[600] ${iconColor}`}>
            {status}
            {error?.message}
          </div>
          <div className="text-center">
            {errMsg}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 justify-center items-center">
          <div className={`text-[35px] font-[600] ${iconColor}`}>{status}</div>
          <div className="text-center">{msg}</div>
        </div>
      );

    const options = {
      icon,
      duration: 5000,
      type,
    };

    toast(message, options);
  };
  return showToast;
}
