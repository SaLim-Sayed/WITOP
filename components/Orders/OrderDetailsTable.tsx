import React from "react";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";

interface OrderDetailsTableProps {
  orderDetails: {
    orderID: string;
    orderDate: string;
    userName: string;
    cartTotal: number;
    orderStatus: string;
    message: string;
  };
  title?: string;
  onReviewClick?: () => void;
}

const OrderDetailsTable: React.FC<OrderDetailsTableProps> = ({
    orderDetails,
    title,
  onReviewClick,
}) => {
  const t2 = useTranslations("Orders");
  const t = useTranslations("Globals");
 console.log({ orderDetails });
  return (
    <div className="z-20 sticky top-4 md:top-32 p-[1px] border-2 bg-white  w-full shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-start bg-white border border-gray-300 shadow-sm">
          <tbody>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-start bg-gray-200 font-bold">
                {t2("orderID")}
              </th>
              <td className="border border-gray-300 px-4 py-2">
                {orderDetails?.orderID}
              </td>
            </tr>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-start bg-gray-200 font-bold">
                {t2("orderPlacedOn")}
              </th>
              <td className="border border-gray-300 px-4 py-2">
                {orderDetails?.orderDate}
              </td>
            </tr>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-start bg-gray-200 font-bold">
                {t2("shippingTo")}
              </th>
              <td className="border border-gray-300 px-4 py-2">
                {orderDetails?.userName}
              </td>
            </tr>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-start bg-gray-200 font-bold">
                {t2("total")} {t("SAR")}
              </th>
              <td className="border border-gray-300 px-4 py-2 font-bold">
                {orderDetails?.cartTotal}
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-start bg-gray-200 font-bold">
                {t2("orderStatus")}
              </th>
              <td className="border border-gray-300 px-4 py-2">
                {t2(orderDetails?.orderStatus)}
              </td>
            </tr>
                      <tr>
              <th className="border border-gray-300 px-4 py-2 text-start bg-gray-200 font-bold">
                {t2("Message")}
              </th>
              <td colSpan={2} className="border border-gray-300 px-4 py-2">
                {orderDetails?.message}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {onReviewClick && (
        <Button
          radius="none"
          className="w-full bg-cyan-600 text-white"
          onClick={onReviewClick}
        >
          {title}
        </Button>
      )}
    </div>
  );
};

export default OrderDetailsTable;
