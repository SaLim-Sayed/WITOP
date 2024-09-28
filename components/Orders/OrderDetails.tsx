"use client";

import { Button, Divider, useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Center from "../Global/Ui/Center";
import { useGetter, useSetter } from "@/store/hooks/clientApi";
import { Order } from "@/store/types/orderTypes";
import { Product } from "@/types/product";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import ReviewModal from "../Cart/OrdersForm/ReviewModal";
import ClientHydration from "../Global/Providers/ClientHydration";
import MainImageGallury from "../Global/Sliders/MainImageGallury";
import { showToast } from "../Global/Ui/Toast";
import ReturnModal from "./ReturnModal";
import OrderDetailsSkeleton from "../Global/Loaders/OrderDetailsSkeleton ";
import OrderDetailsTable from "./OrderDetailsTable";

export default function OrderDetails() {
  const t = useTranslations("Globals");
  const t2 = useTranslations("Orders"); // For order-related translations

  const {
    isOpen: isReviewModalOpen,
    onOpen: openReviewModal,
    onOpenChange: toggleReviewModal,
  } = useDisclosure();

  const {
    isOpen: isReturnModalOpen,
    onOpen: openReturnModal,
    onOpenChange: toggleReturnModal,
  } = useDisclosure();

  const showSuccessToast = (message?: string) =>
    showToast({ status: "Success", type: "success", toastMessage: message });
  const showErrorToast = (message?: string) =>
    showToast({ status: "! خطأ ", type: "error", toastMessage: message });

  const { id: orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState<Order>();

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { mutate, error, isSuccess, data } = useSetter({
    endPoint: "/return/returnRequest",
    key: "returnRequest",
  });

  const { data: order, isLoading } = useGetter({
    endPoint: `/user/orderDetails/${orderId}`,
    key: "GET_ALL_ORDER",
  });

  useEffect(() => {
    if (order) {
      setOrderDetails(order?.order);
    }
  }, [order]);

  const handleSubmit = (product: Product) => {
    mutate({
      orderID: orderId,
      productName: product?.productName,
      message: "not needed",
      phoneNumber: orderDetails?.userPhone,
    });

    if (isSuccess) showSuccessToast(data.message);
  };

  if (isLoading) {
    return <OrderDetailsSkeleton />;
  }

  console.log({orderDetails});
  return (
    <Center>
      <ReviewModal
        isOpen={isReviewModalOpen}
        onOpen={openReviewModal}
        onOpenChange={toggleReviewModal}
      />

      <ClientHydration LoaderComponent={<OrderDetailsSkeleton />}>
        <div className="grid relative grid-cols-1 md:grid-cols-2 justify-start items-start lg:grid-cols-2 my-4 gap-8">
          <div className="z-20 sticky -top-44 md:top-32 p-[1px]   bg-white shadow-sm">
            <OrderDetailsTable
              orderDetails={orderDetails as any}
              onReviewClick={openReviewModal}
              title={t("rateOrder")}
            />
          </div>

          <div className="flex flex-col gap-4">
            {orderDetails?.products?.map((product) => (
              <div
                key={product?._id}
                className="flex flex-col gap-4 p-4 border-gray-500 bg-gray-100/60 rounded-lg"
              >
                <MainImageGallury
                  images={product?.images}
                  alt={product?.productName}
                  discount={product?.discountPercentage}
                />
                <div className="text-xl relative">{product?.productName}</div>

                <div className="flex flex-col">
                  <div className="line-through">
                    {product?.priceBeforeDiscount || product?.price} {t("SAR")}
                  </div>

                  <div className="flex gap-4 items-end">
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
                  <div className="text-gray-400 mt-4">{t("vatIncluded")}</div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold">
                    {t("quantity")}: {product?.count}
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  {product?.color ? (
                    <>
                      <div className="text-2xl font-bold">{t("color")}:</div>
                      <div
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: product?.color }}
                      ></div>
                    </>
                  ) : (
                    ""
                  )}
                </div>

                <ReturnModal
                  isOpen={isReturnModalOpen}
                  onOpen={openReturnModal}
                  onOpenChange={toggleReturnModal}
                  orderId={orderId}
                  orderDetails={orderDetails}
                  product={product}
                />
                <Button
                  onClick={openReturnModal}
                  className="bg-pink-100"
                  radius="lg"
                  size="sm"
                >
                  {t("return")}
                </Button>
              </div>
            ))}
            <Divider className="bg-gray-300 h-[1px] w-full" />
          </div>
        </div>
      </ClientHydration>
    </Center>
  );
}
