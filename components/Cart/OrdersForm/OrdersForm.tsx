/* eslint-disable react/no-unescaped-entities */
"use client";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
  useDisclosure,
} from "@nextui-org/react";
import useSchema from "./Schema";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { showToast } from "@/components/Global/Ui/Toast";
import SignGoogle from "../../Auth/Google/SignGoogle";
import { axiosInstance } from "@/util/axiosConfig";
import { cartStore } from "@/store/futures/cartStore";
import { calculateTotalAfterDiscount } from "@/util";
import ReviewModal from "./ReviewModal";

const OrderForm = () => {
       const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const router = useRouter();
  const tr = useTranslations("Auth");
  const validationTr = useTranslations("Cart");
  const OrderSchema = useSchema();
  const { id: cartId } = useParams();
  const lang = useLocale();
  type Order = z.infer<typeof OrderSchema>;
  const [isLoading, setIsLoading] = useState(false);
  const { CartAmount, discount, TotalCartAmount } = cartStore();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Order>({
    resolver: zodResolver(OrderSchema),
  });

  const showSuccessToast = (message?: string) =>
    showToast({ type: "success", toastMessage: message });
  const showErrorToast = (message?: string) =>
    showToast({ type: "error", toastMessage: message });
  const totalAfterDiscount = calculateTotalAfterDiscount(
    TotalCartAmount,
    discount
  );

  const onSubmit: SubmitHandler<Order> = async (data) => {
    console.log(data);
    try {
      setIsLoading(true);
      const res = await axiosInstance.post(
        `/user/createOrder/${cartId}`,
        { ...data, totalAfterDiscount: totalAfterDiscount },
        {
          headers: {
            language: lang || "en",
          },
        }
      );
      setIsLoading(false);
      if (res.data.message === "success") {
        console.log(res);
        showSuccessToast(
          "تم تنفيذ طلبكم  بنجاح  وسيتم  التواصل معكم  في اقرب وقت "
        );
        onOpen();
      
      
        
        return;
      }
      showErrorToast(res.data.message);
        
          
       
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const cities = [
    { value: "Riyadh", label: "الرياض / Riyadh" },
    { value: "Jeddah", label: "جدة / Jeddah" },
    { value: "Mecca", label: "مكة المكرمة / Mecca" },
    { value: "Medina", label: "المدينة المنورة / Medina" },
    { value: "Dammam", label: "الدمام / Dammam" },
    { value: "Al Khobar", label: "الخبر / Al Khobar" },
    { value: "Jubail", label: "الجبيل / Jubail" },
    { value: "Ta'if", label: "الطائف / Ta'if" },
    { value: "Buraydah", label: "بريدة / Buraydah" },
    { value: "Al Hofuf", label: "الهفوف / Al Hofuf" },
    { value: "Qatif", label: "القطيف / Qatif" },
    { value: "Yanbu", label: "ينبع / Yanbu" },
    { value: "Dhahran", label: "الظهران / Dhahran" },
    { value: "Hail", label: "حائل / Hail" },
    { value: "Najran", label: "نجران / Najran" },
    { value: "Tabuk", label: "تبوك / Tabuk" },
    { value: "Abha", label: "أبها / Abha" },
    { value: "Khamis Mushait", label: "خميس مشيط / Khamis Mushait" },
    { value: "Jazan", label: "جازان / Jazan" },
    { value: "Al Bahah", label: "الباحة / Al Bahah" },
    { value: "Sakaka", label: "سكاكا / Sakaka" },
    { value: "Arar", label: "عرعر / Arar" },
    { value: "Rafha", label: "رفحاء / Rafha" },
    { value: "Al Qurayyat", label: "القريات / Al Qurayyat" },
    { value: "Al Qunfudhah", label: "القنفذة / Al Qunfudhah" },
    { value: "Bisha", label: "بيشة / Bisha" },
    { value: "Saihat", label: "سيهات / Saihat" },
    { value: "Sharurah", label: "شرورة / Sharurah" },
    { value: "Tarout", label: "تاروت / Tarout" },
    { value: "Hotat Bani Tamim", label: "حوطة بني تميم / Hotat Bani Tamim" },
  ];

  return (
    <>
    
     <ReviewModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    <form
      className="w-full flex flex-col gap-[20px]"
      onSubmit={handleSubmit(onSubmit)}
    >
     
      <div className="flex flex-col gap-[12px]">
        <div className="flex flex-col gap-[12px]">
          <div>
            <Input
              {...register("userName")}
              type="text"
              label={validationTr("UserName")}
              variant="bordered"
              className="w-full"
              isInvalid={errors.userName ? true : false}
              errorMessage={errors.userName?.message}
              classNames={{
                input: "text-[1.2rem]",
              }}
            />
          </div>
          <div>
            <Input
              {...register("userAddress")}
              type="text"
              label={validationTr("UserAddress")}
              variant="bordered"
              className="w-full"
              isInvalid={errors.userAddress ? true : false}
              errorMessage={errors.userAddress?.message}
              classNames={{
                input: "text-[1.2rem]",
              }}
            />
          </div>
          <div>
            <Input
              {...register("userPhone")}
              type="text"
              label={validationTr("UserPhone")}
              variant="bordered"
              className="w-full"
              isInvalid={errors.userPhone ? true : false}
              errorMessage={errors.userPhone?.message}
              classNames={{
                input: "text-[1.2rem]",
              }}
            />
          </div>
          <div>
            <Autocomplete
              allowsCustomValue
              label={validationTr("UserCity")}
              variant="bordered"
              className="w-full"
              defaultItems={cities}
              onSelectionChange={(selected: any) =>
                setValue("userCity", selected)
              }
              isInvalid={errors.userCity ? true : false}
              errorMessage={errors.userCity?.message}
            >
              {(item) => (
                <AutocompleteItem key={item.value} value={item.value}>
                  {item.label}
                </AutocompleteItem>
              )}
            </Autocomplete>
          </div>
          {/* <div>
            <Input
              {...register("totalAfterDiscount")}
              type="number"
              label={validationTr("TotalAfterDiscount")}
              variant="bordered"
              className="w-full"
              isInvalid={errors.totalAfterDiscount ? true : false}
              classNames={{
                input: "text-[1.2rem]",
              }}
            />
          </div> */}
          <div>
            <Input
              {...register("message")}
              type="text"
              label={validationTr("Message")}
              variant="bordered"
              className="w-full"
              isInvalid={errors.message ? true : false}
              errorMessage={errors.message?.message}
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
          className="bg-cyan-500 h-[64px] text-lg text-white font-bold"
        >
          {tr("SubmitOrder")}
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
    </form></>
  );
};

export default OrderForm;
