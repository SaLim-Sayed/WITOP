import { useEffect, useState } from "react";
import { useGetter, useSetter } from "@/store/hooks/clientApi";
import { ReturnRequests } from "./types";
import Title from "../Global/Ui/Title";
import Center from "../Global/Ui/Center";
import { cn } from "@/libs/cn";
import { Divider } from "@nextui-org/react";
import { useTranslations } from "next-intl";

export default function AllReturn() {
const t=useTranslations("Profile")
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
      {/* AllReturn
      // */}
      <Title title={t("allReturn")} />

      <div className="grid w-full grid-cols-1 md:grid-cols- lg:grid-cols-1 my-4 gap-8">
        <div>
          <div
            className={cn(
              "container grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 mx-auto p-4"
            )}
          >
            {returnData?.map((item) => (
              <div
                key={item._id}
                className="border  flex flex-col justify-between items-center md:flex-row rounded-lg mb-4 p-4 bg-white shadow-sm"
              >
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <p className="font-bold">رقم الطلب: {item.orderID}</p>
                      <p className="text-sm text-gray-600">
                        تم تقديم الطلب في: {item.requestDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex  flex-col gap-2 justify-between items-Start mb-2">
                    <p className="font-bold">الشحن إلى: {item.phoneNumber}</p>
                    <p className="font-bold">المستخدم: {item.userID}</p>
                    <p className="flex-1"> رسالة :{item.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Divider />
        </div>
      </div>
    </div>
  );
}
