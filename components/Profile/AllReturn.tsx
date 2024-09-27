import { useEffect, useState } from "react";
import { useGetter } from "@/store/hooks/clientApi";
import { ReturnRequests } from "./types";
import Title from "../Global/Ui/Title";
import Center from "../Global/Ui/Center";
import { cn } from "@/libs/cn";
import { Divider } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import OrderDetailsTable from "../Orders/OrderDetailsTable";
import ReturnTable from "./ReturnTable";

export default function AllReturn() {
  const t = useTranslations("Profile");
  const t2 = useTranslations("Orders"); // For order-related translations
  const { data, isError, isPending } = useGetter({
    endPoint: "/return/getUserRequest",
    key: "GET_ALL_RETURN",
  });

  const [returnData, setReturnData] = useState<ReturnRequests | null>(null);

  useEffect(() => {
    if (!isPending && data) {
      setReturnData(data.returnRequests);
    }
  }, [isPending, data]);

  console.log({ returnData });

  return (
    <div className="w-full">
      <Title title={t("allReturn")} />

      <div className="grid w-full grid-cols-1 my-4 gap-8">
        <div>
          <div className={cn("container grid grid-cols-1 gap-2 mx-auto p-4")}>
            {returnData?.map((item) => (
              <div
                key={item._id}
                className="border flex flex-col justify-between items-center md:flex-row rounded-lg mb-4 p-4 bg-white shadow-sm"
              >
                {/* <OrderDetailsTable orderDetails={item} /> */}
                <ReturnTable
                  orderDetails={item as any}
                  // onReviewClick={openReviewModal}
                  title={t("rateOrder")}
                />
                
              </div>
            ))}
          </div>
          <Divider />
        </div>
      </div>
    </div>
  );
}
