/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";

import useSchema from "./Schema";
import Link from "next/link";

const LoginForm = () => { 
  console.log(location);
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
    const form = new FormData();

    for (const [key, value] of Object.entries(data)) {
      form.append(key, value);
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
            label="userName"
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
              label="phoneNumber"
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
          isLoading={isLoading}
          type="submit"
          size="lg"
          className="bg-cyan-500 h-[64px]  text-lg text-white font-bold"
        >
          Login
        </Button>
        <div className="flex">
          you don't have an account?
          <Link
            href="/auth/register"
            className="text-[14px] mx-[10px] text-cyan-500 font-[400]"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
