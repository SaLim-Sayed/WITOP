/* eslint-disable react/no-unescaped-entities */
"use client";
import Cookies from "js-cookie";
import React, { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";

import useSchema from "./Schema";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import axios from "axios";
import { useRouter } from "next/navigation";
import { showToast } from "@/components/Global/Ui/Toast";
import SignGoogle from "../Google/SignGoogle";

const LoginForm = () => {
  const router = useRouter();
  const tr = useTranslations("Auth");
  const LoginSchema = useSchema();
  const lang = useLocale();
  type Login = z.infer<typeof LoginSchema>;
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(LoginSchema),
  });

  const showSuccessToast = (message?: string) =>
    showToast({ type: "success", toastMessage: message });
  const showErrorToast = (message?: string) =>
    showToast({ type: "error", toastMessage: message });

  const onSubmit: SubmitHandler<Login> = async (data) => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://maro-cares-z86j.onrender.com/auth/login",
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

        router.push("/auth/verificationLoginCode");
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
      className="w-full flex  flex-col gap-[20px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-[12px]">
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
        </div>
      </div>

      <div className="flex flex-col w-full gap-[32px]">
        <Button
          type="submit"
          size="lg"
          className="bg-cyan-500 h-[64px]  text-lg text-white font-bold"
        >
          {tr("Login")}
        </Button>
        <Button
          variant="bordered"
          className="  h-[64px]  text-lg text-white font-bold"
        >
          <SignGoogle />
        </Button>
        <div className="flex">
          {tr("DontHave")}
          <Link
            href="/auth/register"
            className="text-[14px] mx-[10px] text-cyan-500 font-[400]"
          >
            {tr("Register")}
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
