/* eslint-disable react/no-unescaped-entities */
"use client";
import { showToast } from "@/components/Global/Ui/Toast";
import { cartStore } from "@/store/futures/cartStore";
import { calculateTotalAfterDiscount } from "@/util";
import { axiosInstance } from "@/util/axiosConfig";
import { useNavigation } from "@/util/useNavigation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import useSchema from "./Schema";
import { cities } from "./data";

const OrderForm = () => {
  const { navigateTo } = useNavigation();

  const tr = useTranslations("Auth");
  const validationTr = useTranslations("Cart");
  const OrderSchema = useSchema();
  const { id: cartId } = useParams();
  const lang = useLocale();
  type Order = z.infer<typeof OrderSchema>;
  const [isLoading, setIsLoading] = useState(false);
  const { discount, TotalCartAmount } = cartStore();
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
        navigateTo("/orders");

        return;
      }
      showErrorToast(res.data.message);
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const paymentMethods = [
    { value: "Cash on delivery", label: validationTr("CashOnDelivery") },
    { value: "Cash by wallet", label: validationTr("CashByWallet") },
  ];

  return (
    <>
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
              <Input
                {...register("street")}
                type="text"
                label={validationTr("street")}
                variant="bordered"
                className="w-full"
                isInvalid={errors.street ? true : false}
                errorMessage={errors.street?.message}
                classNames={{
                  input: "text-[1.2rem]",
                }}
              />
            </div>
            <div>
              <Input
                {...register("neighborhood")}
                type="text"
                label={validationTr("neighborhood")}
                variant="bordered"
                className="w-full"
                isInvalid={errors.neighborhood ? true : false}
                errorMessage={errors.neighborhood?.message}
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
                    {lang === "en" ? item.enLabel : item.arLabel}
                  </AutocompleteItem>
                )}
              </Autocomplete>
            </div>
            <div className="mb-4">
              <Select
                {...register("paymentWay")}
                label={validationTr("choosePaymentWay")}
                placeholder={validationTr("selectPaymentMethod")}
                className="w-full"
                isInvalid={!!errors.paymentWay}
                errorMessage={errors.paymentWay?.message}
              >
                {paymentMethods.map((method) => (
                  <SelectItem key={method.value} value={method.value}>
                    {method.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div>
              <Input
                {...register("message")}
                type="string"
                label={validationTr("Message")}
                variant="bordered"
                className="w-full"
                isInvalid={errors.message ? true : false}
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
      </form>
    </>
  );
};

export default OrderForm;
