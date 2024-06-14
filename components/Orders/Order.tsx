"use client";
import { useProductStore } from "@/store/futures/cartStore";
import React from "react";

import Center from "../Global/Ui/Center";
import ImageGallury from "../Global/Sliders/ImageGallury";
import { BiHeart, BiStar, BiTrash } from "react-icons/bi";
import { Button, Card, CardBody, Divider, Input } from "@nextui-org/react";
import { Tabs, Tab } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import getProductByID from "@/store/actions/getProductByID.module";

import { showToast } from "../Global/Ui/Toast";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/libs/cn";
import { axiosInstance } from "@/util/axiosConfig";
import Cookies from "js-cookie";
import { useParams, useRouter } from "next/navigation";
import OrderForm from "../Auth/OrdersForm/OrdersForm";
import OrderFormSubmit from "../Auth/OrdersForm/Order";
export default function Order() {
  const lang = useLocale();
  const t = useTranslations("Globals");
  const { id } = useParams();
  console.log({ id });
  const token = Cookies.get("token");

  axiosInstance.defaults.headers.common["authrization"] = `maroTK${token}`;
  axiosInstance.defaults.headers.common["language"] = lang || "en";

  const { productsCart, setProductsCart, getProductById } = useProductStore();
  console.log({ productsCart });
  const navigate = useRouter();
  const [count, setCount] = useState<number>(1);

  const showSuccessToast = (message?: string) =>
    showToast({ status: "Success", type: "success", toastMessage: message });
  const showErrorToast = (message?: string) =>
    showToast({ status: "Error", type: "error", toastMessage: message });
  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const productData = getProductById(id);

  const addRatingHandler = async (noOfStar: number, id: string) => {
    try {
      const { data } = await axiosInstance.post(`/user/addRating/${id}`, {
        numberOfStar: noOfStar,
      });

      console.log(data);
    } catch (err: any) {
      console.log(err);
      showErrorToast("Something Went Wrong , Try Again..");
    }
  };
  const updateCountInCart = async (id: any) => {
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
      showErrorToast("Something Went Wrong , Try Again..");
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
      showErrorToast("Something Went Wrong , Try Again..");
    }
  };
  return (
    <Center>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-4 gap-8">
      <OrderFormSubmit/>
        <div className="flex flex-col gap-4">
        <ImageGallury
          images={productData?.images}
          alt={productData?.productName}
        />
          <div className="text-3xl relative">{productData?.productName}</div>
          <div className="  font-[400]">{productData?.description}</div>

          <div className="flex flex-col">
            <div className="  line-through">
              {productData?.priceBeforeDiscount || productData?.price}{" "}
              {t("SAR")}
            </div>
            <div className="  flex  gap-4 items-end ">
              <div className="flex gap-2">
                <div className="text-2xl text-red-700 font-bold">
                  {productData?.price} {t("SAR")}
                </div>
                <Button className="bg-pink-100" radius="lg" size="sm">
                  - {productData?.discountPercentage || 0} %
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
              Amount : {productData?.count}{" "}
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
              onClick={() => updateCountInCart(productData?._id)}
              radius="sm"
              className="h-12 w-full bg-black text-white uppercase "
            >
              Update Amount
            </Button>
            <Button
              className="h-12  w-full "
              color="danger"
              onClick={() => removeFromCartHandler(productData?._id)}
              endContent={<BiTrash />}
            >
              Delete
            </Button>
          </div>
          <div className="text-xl text-justify">
            <Button
              onClick={() => {
                navigate.push(`/cart/${productData?._id}/order`);
              }}
              radius="lg"
              className="w-full h-12 bg-black text-white uppercase "
            >
              Create Order Go Payment
            </Button>
          </div>
        </div>
        <Divider />
      </div>
    </Center>
  );
}
