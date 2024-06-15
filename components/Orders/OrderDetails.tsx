"use client";
import { cartStore, useProductStore } from "@/store/futures/cartStore";
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
import { axiosInstance } from "@/util/axiosConfig";
import Cookies from "js-cookie";
import { useParams } from "next/navigation";
import { Order } from "@/store/types/orderTypes";

export default function OrderDetails() {
  const lang = useLocale();
  const t = useTranslations("Globals");

  const showSuccessToast = (message?: string) =>
    showToast({ status: "Success", type: "success", toastMessage: message });
  const showErrorToast = (message?: string) =>
    showToast({ status: "Error", type: "error", toastMessage: message });

  const { id: orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState<Order>();

  const getOrderDetails = async () => {
    try {
      const { data } = await axiosInstance.get(`/user/orderDetails/${orderId}`);
      setOrderDetails(data?.order);
      console.log(data?.order);
      showSuccessToast(data?.message);
    } catch (err: any) {
      console.log(err);
      showErrorToast("Something Went Wrong , Try Again..");
    }
  };

  useEffect(() => {
    getOrderDetails();
  }, []);
  return (
    <Center>
      <div className="grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-4 gap-8">
        <div className="flex flex-col">
          {orderDetails?.products?.map((product) => (
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

              <div className="text-xl text-justify"></div>
            </div>
          ))}{" "}
        </div>
      </div>
      <Divider />
    </Center>
  );
}
