"use client";

import React, { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";

import useSchema from "./Schema";
import Link from "next/link";

const RegisterForm = () => {
  const RegisterSchema = useSchema();

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
              {...register("email")}
              type="email"
              label="Email"
              variant="bordered"
              className="w-full"
              isInvalid={errors.email ? true : false}
              errorMessage={errors.email?.message}
              classNames={{
                input: "text-[1.2rem]",
              }}
            />
          </div>

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
          className="bg-cyan-500 h-[64px]  text-lg text-white font-bold"
        >
          Register
        </Button>
        <div className="flex">
          you have an account?
          <Link
            href="/auth/login"
            className="text-[14px] mx-[10px] text-cyan-500 font-[400]"
          >
            Login
          </Link>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
