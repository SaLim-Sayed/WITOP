"use client";
import React from "react";
import Center from "../Global/Ui/Center";
import { Button, Divider } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import { useOrderStore } from "@/store/futures/orderStore";
import { cn } from "@/libs/cn";
import { useTranslations } from "next-intl";
import OrderDetailsTable from "./OrderDetailsTable";

export default function OrderPage({ exSt }: { exSt?: boolean }) {
  const { id } = useParams();
  console.log({ id });
  const { orders } = useOrderStore();
  const navigate = useRouter();
  const t = useTranslations("Orders");

  return (
    <Center>
      <div className="grid grid-cols-1 md:grid-cols- lg:grid-cols-1 my-4 gap-8">
        <div>
          <div
            className='container grid grid-cols-1  lg:grid-cols-2 w-full gap-2 mx-auto p-4'
          >
            {orders?.map((order: any) => (
              <div
                key={order._id}
                className="border flex flex-col justify-between items-center md:flex-row rounded-lg mb-4 p-4 bg-white shadow-sm"
              >
                <OrderDetailsTable
                  orderDetails={order}
                  onReviewClick={() => navigate.push(`/orders/${order._id}`)}
                  title={t("orderDetails")}
                />
                {/* <div>
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <p className="font-bold">
                        {t("orderID")}: {order?.orderID}
                      </p>
                      <p className="text-sm font-bold text-gray-600">
                        {t("orderPlacedOn")}: {order.orderDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-between items-start mb-2">
                    <p className="font-bold">
                      {t("shippingTo")}: {order.userName}
                    </p>
                    <p className="font-bold">
                      {t("total")}: {order.cartTotal}
                    </p>
                    
                  </div>
                </div> */}
                {/* <Divider
                  orientation="horizontal"
                  className="md:flex hidden bg-gray-300 h-full w-[1px]"
                />
                <Divider
                  orientation="vertical"
                  className="bg-gray-300 sm:hidden h-[1px] w-full"
                />

                <div className="flex border-gray-500 items-center">
                  <Button
                    onClick={() => navigate.push(`/orders/${order._id}`)}
                    className="bg-cyan-500 text-white"
                  >
                    {t("viewDetails")}
                  </Button>
                </div> */}
              </div>
            ))}
          </div>
          <Divider />
        </div>
      </div>
    </Center>
  );
}
