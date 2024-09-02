"use client";
import { cartStore, useProductStore } from "@/store/futures/cartStore";

import { Button, Divider } from "@nextui-org/react";
import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import ImageGallury from "../Global/Sliders/ImageGallury";
import Center from "../Global/Ui/Center";

import { axiosInstance } from "@/util/axiosConfig";
import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import { showToast } from "../Global/Ui/Toast";
import OrderFormSubmit from "./OrdersForm/Order";
export default function Cart() {
  const lang = useLocale();
  const t = useTranslations("Globals");

  const token = Cookies.get("token");

  axiosInstance.defaults.headers.common["authrization"] = `maroTK${token}`;
  axiosInstance.defaults.headers.common["language"] = lang || "en";
  const { productsCart, setProductsCart } = useProductStore();
  const [count, setCount] = useState<number>(1);

  const showSuccessToast = (message?: string) =>
    showToast({ status: "Success", type: "success", toastMessage: message });
  const showErrorToast = (message?: string) =>
    showToast({ status: "! خطأ ", type: "error", toastMessage: message });
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const router = useRouter();
  const { id: cartId } = useParams();

  console.log({ cartId });
  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const updateCountInCart = async (id: string) => {
    try {
      const { data } = await axiosInstance.put(
        `/user/updateCountInCart/${id}`,
        { count: count }
      );
      setProductsCart(data?.cart?.products);
      console.log(data);
      showSuccessToast(data?.message);
    } catch (err: any) {
      console.log(err);
      showErrorToast("يجب تسجيل الدخول اولاََ");
     setTimeout(() => {
       router.push(`/auth/login`);
     }, 5000);
    }
  };
  const removeFromCartHandler = async (id: any) => {
    try {
      const { data } = await axiosInstance.put(
        `/user/removeFromCart/${id}`,
        {}
      );

      setProductsCart(data?.cart?.products);

      showSuccessToast(data?.message);
    } catch (err: any) {
      console.log(err);

      router.push(`/auth/login`);
    }
  };
  const { CartAmount } = cartStore();

  return (
    <Center>
      <div className="grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-4 gap-8">
        <div className="flex flex-col">
          {productsCart?.map((product) => (
            <div key={product?._id} className="flex flex-col gap-4">
              <ImageGallury
                images={product?.images}
                alt={product?.productName}
              />

              <div className="text-3xl relative">{product?.productName}</div>
              <div className="  font-[400]">{product?.description}</div>

              <div className="flex flex-col">
                <div className="  line-through">
                  {product?.priceBeforeDiscount || product?.price} {t("SAR")}
                </div>
                <div className="  flex  gap-4 items-end ">
                  <div className="flex gap-2">
                    <div className="text-2xl text-red-700 font-bold">
                      {product?.price} {t("SAR")}
                    </div>
                    <Button className="bg-pink-100" radius="lg" size="sm">
                      - {product?.discountPercentage || 0} %
                    </Button>
                  </div>
                  <div className="text-green-500">أصلي 100%</div>
                </div>
                <div className=" text-gray-400 mt-4  ">
                  شامل ضريبة القيمة المضافة
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">
                  Amount : {product?.count}{" "}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center w-[100px] h-12 justify-between border-[2px] gap-2">
                  <Button
                    variant="light"
                    size="sm"
                    isIconOnly
                    onClick={handleDecrease}
                    type="button"
                  >
                    -
                  </Button>
                  <div>{count}</div>
                  <Button
                    variant="light"
                    size="sm"
                    isIconOnly
                    onClick={handleIncrease}
                    type="button"
                    className=" "
                  >
                    +
                  </Button>
                </div>
                <Button
                  onClick={() => updateCountInCart(product?._id)}
                  radius="sm"
                  className="h-12 w-full bg-black text-white uppercase "
                >
                  Update Amount
                </Button>
                <Button
                  className="h-12  w-full "
                  color="danger"
                  onClick={() => removeFromCartHandler(product?._id)}
                  endContent={<BiTrash />}
                >
                  Delete
                </Button>
              </div>
              <div className="text-xl text-justify"></div>
            </div>
          ))}{" "}
        </div>
        <OrderFormSubmit />
      </div>
      <Divider />
    </Center>
  );
}
