"use client";
import React from "react";

import Center from "../Global/Ui/Center";
import { Button, Divider } from "@nextui-org/react";

import { useParams, useRouter } from "next/navigation";
import { useOrderStore } from "@/store/futures/orderStore";
import { cn } from "@/libs/cn";
export default function OrderPage({ exSt }:{exSt?:boolean}) {
  const { id } = useParams();
  console.log({ id });
  const { orders } = useOrderStore();
  const navigate = useRouter();
  return (
    <Center>
      <div className="grid grid-cols-1 md:grid-cols- lg:grid-cols-1 my-4 gap-8">
        <div>
          <div
            className={cn(
              "container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mx-auto p-4",
              exSt && " md:grid-cols-1 lg:grid-cols-1 "
            )}
          >
            {orders?.map((order) => (
              <div
                key={order._id}
                className="border  flex flex-col justify-between items-center md:flex-row rounded-lg mb-4 p-4 bg-white shadow-sm"
              >
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <p className="font-bold">رقم الطلب: {order._id}</p>
                      <p className="text-sm text-gray-600">
                        تم تقديم الطلب في: {order.orderDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex  flex-col gap-2 justify-between items-Start mb-2">
                    <p className="font-bold">الشحن إلى: {order.userName}</p>
                    <p className="font-bold">
                      الإجمالي: {order.cartTotal} جنيه
                    </p>
                    <p className="flex-1">{order.message}</p>
                  </div>
                </div>
                <Divider
                  orientation="horizontal"
                  className="md:flex hidden   bg-gray-300  h-full w-[1px] "
                />
                <Divider
                  orientation="vertical"
                  className="bg-gray-300 sm:hidden h-[1px] w-full"
                />

                <div className="flex   border-gray-500 items-center">
                  <Button
                    onClick={() => navigate.push(`/orders/${order._id}`)}
                    className=" bg-cyan-500 text-white"
                  >
                    عرض تفاصيل المنتج
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <Divider />
        </div>
      </div>
    </Center>
  );
}
