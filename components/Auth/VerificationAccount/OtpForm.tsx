"use client";
import React, { useState } from "react";

import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import OtpInput from "react-otp-input";

import { cn } from "@/libs/cn";
import { Button } from "@nextui-org/react";
import { showToast } from "@/components/Global/Ui/Toast";
import axios from "axios";

const OTPFORMS = () => {
  const router = useRouter();
  const transContent = useTranslations("Auth");
  const [code, setCode] = useState<any>();
  const [otpError, setOtpError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { status } = useParams();
  const showSuccessToast = (message?: string) =>
    showToast({ status: "Success", type: "success", toastMessage: message });
  const showErrorToast = (message?: string) =>
    showToast({ status: "Error", type: "error", toastMessage: message });
  const phoneNumber = Cookies.get("phoneNumber");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res = await axios.put(
        `https://maro-cares.onrender.com/user/verificationAccount/${phoneNumber}/${code}`
      );
      setIsLoading(false);
      if (res.data.message === "success") {
        console.log(res);
        showSuccessToast(res.data.message);
        setTimeout(() => {
          router.push("/auth/login");
        }, 2000);
        return;
      }
      showSuccessToast(res.data.message);
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
    }
  };
  const resendHandler = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://maro-cares.onrender.com/user/resendVerificationCode/${phoneNumber}`
      );
      setIsLoading(false);
      if (res.data.message === "success") {
        console.log(res);
        showSuccessToast(res.data.message);
        setTimeout(() => {}, 2000);
        return;
      }
      showSuccessToast(res.data.message);
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <form
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
            "w-[64px]  h-[64px] border-[1px]  mx-[7px] rounded-lg text-center cursor-pointer   outline-primaryColor-900 text-[35px]  ",
            otpError && "border-primaryColor-200"
          )}
          renderInput={(props) => <input {...props} />}
        />
      </div>

      <Button
          onClick={() => {
            if (code && code.length < 6) { // Add a null check for 'code'
              showErrorToast("not valid otp");
              setOtpError("not valid otp");
            }
          }}
        type="submit"
        className="bg-cyan-500 h-[64px]  text-lg text-white font-bold"
      >
        continue
      </Button>
      <div className=" mx-auto flex flex-col justify-center items-center gap-[12px] ">
        <Button
          onClick={resendHandler}
          variant="light"
          className=" leading-[24px] text-[16px] font-[500] text-cyan-500"
        >
          resend
        </Button>
      </div>
    </form>
  );
};

export default OTPFORMS;
