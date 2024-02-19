"use client";

import React, { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import Cookies from "js-cookie";

import useSchema from "./Schema";
import Link from "next/link";
import { useTranslations } from "next-intl";
import axios from "axios";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const tr = useTranslations("Auth");
  const RegisterSchema = useSchema();
  const router = useRouter();
  type Register = z.infer<typeof RegisterSchema>;
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Register>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<Register> = async (data) => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://maro-cares.onrender.com/auth/register",
        data
      );
      setIsLoading(false);
      if (res) {
        console.log(res);
        Cookies.set("phoneNumber", data.phoneNumber);
        setTimeout(() => {
          router.push("/auth/verificationAccount");
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

          <div>
            <Input
              {...register("invitationBy")}
              type="text"
              label={tr("invitationBy")}
              variant="bordered"
              className="w-full"
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
