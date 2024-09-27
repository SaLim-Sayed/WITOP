import React from "react";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";

interface OrderDetailsTableProps {
  orderDetails: {
    orderID: string;
    requestDate: string;
    productName: string;
    phoneNumber: string;
    requestCode: string;
    message: string;
  };
  title?: string;
  onReviewClick?: () => void;
}

const ReturnTable: React.FC<OrderDetailsTableProps> = ({
  orderDetails,
  title,
  onReviewClick,
}) => {
  const t2 = useTranslations("Orders");
  const t = useTranslations("Globals");

  return (
    <div className="z-20 sticky top-32 p-[1px] border-2 bg-white w-full shadow-sm">
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
                {t2("requestDate")}
              </th>
              <td className="border border-gray-300 px-4 py-2">
                {orderDetails?.requestDate}
              </td>
            </tr>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-start bg-gray-200 font-bold">
                {t2("productName")}
              </th>
              <td className="border border-gray-300 px-4 py-2">
                {orderDetails?.productName}
              </td>
            </tr>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-start bg-gray-200 font-bold">
                {t2("phoneNumber")}
              </th>
              <td className="border border-gray-300 px-4 py-2">
                {orderDetails?.phoneNumber}
              </td>
            </tr>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-start bg-gray-200 font-bold">
                {t2("requestCode")}
              </th>
              <td className="border border-gray-300 px-4 py-2">
                {orderDetails?.requestCode}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-start bg-gray-200 font-bold">
                {t2("Message")}
              </td>
              <td
                colSpan={2}
                className="border border-gray-300 px-4 py-2"
              >
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

export default ReturnTable;
