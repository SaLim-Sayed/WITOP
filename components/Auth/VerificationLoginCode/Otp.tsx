"use client";
import { useTranslations } from "next-intl";
 
import { Card  } from "@nextui-org/react";

import OTPFORMS from "./OtpForm";
import Title from "@/components/Global/Ui/Title";
import Center from "@/components/Global/Ui/Center";

const Otp = ( ) => {
  const tr  = useTranslations("Auth");
  return (
    <>
      <Center>
        
        <Title
              exSt="mt-[24px]"
              exStTitle="font-700 text-[30px]"
              exStSubTitle="leading-[24px] text-[16px] max-w-lg"
              title={tr("OTP")}
             
            />
        <div className="flex justify-center">
          <Card className="flex w-full lg:w-[50%]  shadow-none   items-center flex-col  gap-[40px]">
            <OTPFORMS />
          </Card>
        </div>
      </Center>
    </>
  );
};

export default Otp;
