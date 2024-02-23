"use client";
import React, { useState } from "react";

import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import OtpInput from "react-otp-input";

import { cn } from "@/libs/cn";
import { Button } from "@nextui-org/react";
import { showToast } from "@/components/Global/Ui/Toast";
import axios from "axios";

const OTPFORMS = () => {
  const router = useRouter();
  const tr = useTranslations("Auth");
  const lang = useLocale();
  const [code, setCode] = useState<any>();
  const [otpError, setOtpError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { status } = useParams();
  const showSuccessToast = (message?: string) =>
    showToast({ type: "success", toastMessage: message });
  const showErrorToast = (message?: string) =>
    showToast({ type: "error", toastMessage: message });
  const phoneNumber = Cookies.get("phoneNumber");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res = await axios.put(
        `https://maro-cares.onrender.com/user/verificationAccount/${phoneNumber}/${code}`,
        {
          headers: {
            language: lang || "en",
          },
        }
      );
      setIsLoading(false);
      if (res.data.message === "success") {
        console.log(res);
        Cookies.set("token", res.data?.userToken);

        router.push("/");

        return;
      }
      showErrorToast(res.data.message);
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
    }
  };
  const resendHandler = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://maro-cares.onrender.com/user/resendVerificationCode/${phoneNumber}/verify`,
        {
          headers: {
            language: lang || "en",
          },
        }
      );
      setIsLoading(false);
      if (res.data.message === "success") {
        console.log(res);
        showSuccessToast(res.data.message);

        return;
      }
      showErrorToast(res.data.message);
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <form
      dir="ltr"
      className="w-full flex flex-col  gap-[32px]  "
      onSubmit={(e) => onSubmit(e)}
    >
      <div className="flex flex-col justify-center  items-center ">
        <div className="flex justify-center text-primaryColor-200">
          {otpError}
        </div>
        <OtpInput
          value={code}
          onChange={(e) => {
            setCode(e), setOtpError("");
          }}
          numInputs={6}
          skipDefaultStyles
          inputStyle={cn(
            "w-[40px] md:w-[64px]  h-[40px] md:h-[64px] border-[1px]  mx-[7px] rounded-lg text-center cursor-pointer   outline-primaryColor-900 text-[35px]  ",
            otpError && "border-primaryColor-200"
          )}
          renderInput={(props) => <input {...props} />}
        />
      </div>

      <Button
        onClick={() => {
          if (code && code.length < 6) {
            // Add a null check for 'code'
            showErrorToast("not valid otp");
            setOtpError("not valid otp");
          }
        }}
        type="submit"
        className="bg-cyan-500 h-[64px]  text-lg text-white font-bold"
      >
        {tr("Verify")}
      </Button>
      <Button
        onClick={resendHandler}
        className=" leading-[24px] h-[64px] text-lg font-[500] text-cyan-600"
      >
        {tr("resendOTP")}
      </Button>
    </form>
  );
};

export default OTPFORMS;
