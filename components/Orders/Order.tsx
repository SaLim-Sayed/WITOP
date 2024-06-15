"use client";
import React from "react";

import Center from "../Global/Ui/Center";
import { Divider } from "@nextui-org/react";
 
import { useParams } from "next/navigation";
import { useOrderStore } from "@/store/futures/orderStore";
export default function OrderPage() {
  const { id } = useParams();
  console.log({ id });
  const { orders } = useOrderStore();
  return (
    <Center>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 my-4 gap-8">
        <div>
          <div className="container mx-auto p-4">
            {orders?.map((order) => (
              <div
                key={order._id}
                className="border rounded-lg mb-4 p-4 bg-white shadow-sm"
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <p className="font-bold">رقم الطلب: {order._id}</p>
                    <p className="text-sm text-gray-600">
                      تم تقديم الطلب في: {order.orderDate}
                    </p>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    عرض تفاصيل الطلب
                  </button>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <p className="font-bold">الشحن إلى: {order.userName}</p>
                  <p className="font-bold">الإجمالي: {order.cartTotal} جنيه</p>
                </div>
                <div className="flex items-center">
                  <p className="flex-1">{order.message}</p>
                  <button className="bg-green-500 text-white px-4 py-2 rounded ml-2">
                    اكتب تقييمًا للمنتج
                  </button>
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                    قم بالشراء مرة أخرى
                  </button>
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
