import { cn } from "@/libs/cn";
import { useGetter } from "@/store/hooks/clientApi";
import { Divider } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FcMoneyTransfer } from "react-icons/fc";
import { IoWalletSharp } from "react-icons/io5";

import Title from "../Global/Ui/Title";
export default function Wallet() {
  const t = useTranslations("Profile");
  const { data, isError, isPending } = useGetter({
    endPoint: "/user/wallet",
    key: "Wallet",
  });

  const [returnData, setReturnData] = useState();

  useEffect(() => {
    if (!isPending && data) {
      console.log({ data });
      setReturnData(data);
    }
  }, [isPending, data]);

  console.log({ data });
  console.log({ returnData });

  return (
    <div className="w-full">
      {/* AllReturn
      // */}
      <Title title={t("Wallet")} />

      <div className="grid w-full grid-cols-1 md:grid-cols- lg:grid-cols-1 my-4 gap-8">
        <div>
          <div
            className={cn(
              "w-ful text-gradient-to-r    text-yellow-800  relative  rounded-lg flex justify-center items-center font-bold text-lg"
            )}
          >
            <IoWalletSharp className="w-[400px]  h-[300px] " />
            <div
              dir="rtl"
              className="absolute z-24 flex gap-2 items-center   text-teal-100 bottom-[40%] underline underline-offset-8 left-[50%] -translate-x-[50%]"
            >
              {" "}
              ( {data?.balance || 0} ) ريال <FcMoneyTransfer/>
            </div>
          </div>
          <Divider />
        </div>
      </div>
    </div>
  );
}
