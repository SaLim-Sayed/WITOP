/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import { showToast } from "@/components/Global/Ui/Toast";
import { axiosInstance } from "@/util/axiosConfig";
import { cartStore } from "@/store/futures/cartStore";
import useSchema from "./couponSchema";
import { cn } from "@/libs/cn";

const CouponForm = () => {
  const validationTr = useTranslations("Cart");
  const OrderSchema = useSchema();
  const lang = useLocale();
  const { discount, SetDiscount, TotalCartSetter, TotalCartAmount } =
    cartStore();

  type Order = z.infer<typeof OrderSchema>;
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Order>({
    resolver: zodResolver(OrderSchema),
  });

  const showSuccessToast = (message?: string) =>
    showToast({ type: "success", toastMessage: message });
  const showErrorToast = (message?: string) =>
    showToast({ type: "error", toastMessage: message });

  const onSubmit: SubmitHandler<Order> = async (data) => {
    console.log(data);
    try {
      setIsLoading(true);
      const res = await axiosInstance.post(
        `/coupon/applyCoupon`,
        { ...data },
        {
          headers: {
            language: lang || "en",
          },
        }
      );
      console.log({ res });
      SetDiscount(res?.data?.discount);
      TotalCartSetter(
        TotalCartAmount - (res?.data?.discount * TotalCartAmount) / 100
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
      className="w-full flex justify-center rounded-xl bg-cyan-500 gap-[20px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-1 justify-between items-center ">
        <Input
          {...register("coupon")}
          type="text"
          label={validationTr("Coupon")}
          className="w-full flex-1"
          isInvalid={errors.coupon ? true : false}
          classNames={{
            input: "text-[1.2rem]",
          }}
        />

        <Button
          disabled={discount}
          isDisabled={discount}
          type="submit"
          size="lg"
          className={cn(
            "bg-cyan-500 h-[56px]  text-lg text-white font-bold",
            discount && " cursor-not-allowed"
          )}
        >
          تطبيق الخصم
        </Button>
      </div>
    </form>
  );
};

export default CouponForm;
