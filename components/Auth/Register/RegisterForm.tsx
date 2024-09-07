"use client";

import React, { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import Cookies from "js-cookie";

import useSchema from "./Schema";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import SignGoogle from "../Google/SignGoogle";
import { showToast } from "@/components/Global/Ui/Toast";

const RegisterForm = () => {
  const tr = useTranslations("Auth");
  const RegisterSchema = useSchema();
  const router = useRouter();
  type Register = z.infer<typeof RegisterSchema>;
  const [isLoading, setIsLoading] = useState(false);
  const lang = useLocale();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Register>({
    resolver: zodResolver(RegisterSchema),
  });

  const showSuccessToast = (message?: string) =>
    showToast({ type: "success", toastMessage: message });
  const showErrorToast = (message?: string) =>
    showToast({ type: "error", toastMessage: message });

  const onSubmit: SubmitHandler<Register> = async (data) => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://maro-cares-z86j.onrender.com/auth/register",
        data,
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
        Cookies.set("phoneNumber", data.phoneNumber);
        router.push("/auth/verificationAccount");
        return;
      }
      showErrorToast(res.data.message);
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
    }
  };

  // Get query parameters from the URL
  const searchParams = useSearchParams();
 
  // Extract the invitationCode from the URL
  const invitationCode = searchParams.get("invitationCode");

  return (
    <form
      className="w-full flex  flex-col gap-[20px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-[12px]">
        <div>
          <Input
            {...register("userName")}
            type="text"
            label={tr("UserName")}
            variant="bordered"
            className="w-full"
            isInvalid={errors.userName ? true : false}
            errorMessage={errors.userName?.message}
            classNames={{
              input: "text-[1.2rem]",
            }}
          />
        </div>
        <div className="flex flex-col gap-[12px]">
          <div>
            <Input
              {...register("phoneNumber")}
              type="text"
              label={tr("PhoneNumber")}
              variant="bordered"
              className="w-full"
              isInvalid={errors.phoneNumber ? true : false}
              errorMessage={errors.phoneNumber?.message}
              classNames={{
                input: "text-[1.2rem]",
              }}
            />
          </div>

          <div>
            <Input
              {...register("invitationBy")}
              type="text"
              label={tr("invitationBy")}
              variant="bordered"
              className="w-full"
              value={invitationCode || ""}
              isInvalid={errors.invitationBy ? true : false}
              errorMessage={errors.invitationBy?.message}
              classNames={{
                input: "text-[1.2rem]",
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-[32px]">
        <Button
          type="submit"
          className="bg-cyan-500 h-[64px]  text-lg text-white font-bold"
        >
          {tr("Register")}
        </Button>
        <Button
          variant="bordered"
          className="  h-[64px]  text-lg text-white font-bold"
        >
          <SignGoogle />
        </Button>
        <div className="flex">
          {tr("AlreadyHave")}
          <Link
            href="/auth/login"
            className="text-[14px] mx-[10px] text-cyan-500 font-[400]"
          >
            {tr("Login")}
          </Link>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
