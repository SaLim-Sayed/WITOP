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
import ImageGallurySM from "../Global/Sliders/ImageGallurySM";
import MainImageGallury from "../Global/Sliders/MainImageGallury";
import GCardSkeleton from "../Global/Loaders/GCardSkeleton";
import ClientHydration from "../Global/Providers/ClientHydration";
import MainSkeleton from "../Global/Loaders/MainSkeleton";
import OrderDetailsSkeleton from "../Global/Loaders/OrderDetailsSkeleton ";

export default function OrderDetails() {
  const lang = useLocale();
  const t = useTranslations("Globals");

  const showSuccessToast = (message?: string) =>
    showToast({ status: "Success", type: "success", toastMessage: message });
  const showErrorToast = (message?: string) =>
    showToast({ status: "Error", type: "error", toastMessage: message });

  const { id: orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState<Order>();

  const [loading, setLoading] = useState(false);

  const getOrderDetails = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get(`/user/orderDetails/${orderId}`);
      setLoading(false);

      setOrderDetails(data?.order);
      console.log(data?.order);
    } catch (err: any) {
      console.log(err);
      setLoading(false);

      showErrorToast("Something Went Wrong , Try Again..");
    }
  };

  useEffect(() => {
    getOrderDetails();
  }, []);
  return (
    <Center>
      <ClientHydration LoaderComponent={<OrderDetailsSkeleton />}>
        <div className="   grid relative grid-cols-1 md:grid-cols-2 justify-start items-start lg:grid-cols-2 my-4 gap-8">
          <div className="border  z-20 sticky top-32 flex flex-col justify-between items-center md:flex-row rounded-lg mb-4 p-4 bg-white shadow-sm">
            <div>
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-bold">رقم الطلب: {orderDetails?._id}</p>
                  <p className="text-sm text-gray-600">
                    تم تقديم الطلب في: {orderDetails?.orderDate}
                  </p>
                </div>
              </div>
              <div className="flex  flex-col gap-2 justify-between items-Start mb-2">
                <p className="font-bold">الشحن إلى: {orderDetails?.userName}</p>
                <p className="font-bold">
                  الإجمالي: {orderDetails?.cartTotal} جنيه
                </p>
                <p className="flex-1">{orderDetails?.message}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {orderDetails?.products?.map((product) => (
              <div
                key={product?._id}
                className="flex flex-col gap-4 p-4  border-gray-500 bg-gray-100/60 rounded-lg"
              >
                <MainImageGallury
                  images={product?.images}
                  alt={product?.productName}
                  discount={product?.discountPercentage}
                />
                <div className="text-xl relative">{product?.productName}</div>

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
                    الكمية : {product?.count}{" "}
                  </div>
                </div>

                <div className="text-xl text-justify"></div>
              </div>
            ))}{" "}
            <Divider className="bg-gray-300   h-[1px] w-full" />
          </div>
        </div>
      </ClientHydration>
    </Center>
  );
}
