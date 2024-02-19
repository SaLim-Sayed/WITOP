/* eslint-disable react/no-unescaped-entities */
"use client";
import Cookies from "js-cookie";
import React, { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";

import useSchema from "./Schema";
import Link from "next/link";
import { useTranslations } from "next-intl";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const tr = useTranslations("Auth");
  const LoginSchema = useSchema();

  type Login = z.infer<typeof LoginSchema>;
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(LoginSchema),
  });

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit: SubmitHandler<Login> = async (data) => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://maro-cares.onrender.com/auth/login",
        data
      );
      setIsLoading(false);
      if (res) {
        console.log(res);
        setTimeout(() => {
          router.push("/");
        }, 2000);
        return;
      }
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
