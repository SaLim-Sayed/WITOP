"use client";
import { useEffect, useState } from "react";

import { useLocale, useTranslations } from "next-intl";
import {
  MdAssignmentReturn,
  MdFavorite,
  MdKeyboardArrowRight,
  MdSystemSecurityUpdateWarning,
} from "react-icons/md";

import { cn } from "@/libs/cn";
import { useProfileStore } from "@/store/futures/profileStore";
import { UserDataType } from "@/types/user";
import { axiosInstance } from "@/util/axiosConfig";
import { Button, Divider } from "@nextui-org/react";
import Cookies from "js-cookie";
import { BiBook, BiWallet } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { FcSettings } from "react-icons/fc";
import Center from "../Global/Ui/Center";
import Layer from "../Global/Ui/Layer";
import OrderPage from "../Orders/Order";
import AllReturn from "./AllReturn";
import Offers from "./Offers";
import PersonalInfo from "./PersonalInfo";
import Settings from "./Settings";
import Wallet from "./Wallet";
import LoyaltySystem from "./LoyaltySystem";

export default function Profile() {
  const lang = useLocale();

  const t = useTranslations("Profile");
  const [userData, setUserDate] = useState<UserDataType>();
  const { profileStatus, profileStatusSetter } = useProfileStore();
  const profileList = [
    {
      content: "personal",
      darkIcon: BsPerson,
      lightIcon: BsPerson,
      alt: "airplaneIcon",
      label: t("personal"),
    },

    {
      content: "allOrders",
      darkIcon: BiBook,
      lightIcon: BiBook,
      alt: "airplaneIcon",
      label: t("allOrders"),
    },
    {
      content: "allReturn",
      darkIcon: MdAssignmentReturn,
      lightIcon: MdAssignmentReturn,
      alt: "airplaneIcon",
      label: t("allReturn"),
    },
    {
      content: "Wallet",
      darkIcon: BiWallet,
      lightIcon: BiWallet,
      alt: "airplaneIcon",
      label: t("Wallet"),
    },
    {
      content: "LoyaltySystem",
      darkIcon: MdSystemSecurityUpdateWarning,
      lightIcon: MdSystemSecurityUpdateWarning,
      alt: "airplaneIcon",
      label: t("LoyaltySystem"),
    },
  ];
  const token = Cookies.get("token");
  const getData = async () => {
    try {
      const { data } = await axiosInstance.post(`/user/userAuthorize`, {
        userToken: token,
      });
      setUserDate(data?.userInfo);
    } catch (err: any) {
      console.log(err);
    }
  };
  //   const getData = async () => {
  //     const data = await getProfile();
  //     console.log({ data });
  //     // setUserDate(data?.data);
  //   };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Center>
      <Layer title={t("userProfile")} />

      <div className="h-[105px] w-full bg-primaryColor-300 " />

      <div>
        <div className="flex flex-col">
          {/* <InfoLayer userData={userData} /> */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex w-full md:w-[30%] overflow-hidden h-fit flex-col rounded-xl border-1 border-darkColor-40">
              {profileList.map((item, index) => (
                <div
                  className={cn(
                    "relative  overflow-visible",
                    item.content !== "settings" && " ",
                    item.content === profileStatus &&
                      "bg-primaryColor-900 text-white"
                  )}
                  key={index}
                >
                  {item.content === profileStatus && (
                    <div
                      className={cn(
                        " h-0 border-8 border-white  border-t-transparent border-b-transparent top-[50%] -translate-y-[50%] absolute z-50 bg-transparent",
                        lang === "ar"
                          ? "left-0 border-r-transparent"
                          : "right-0 border-l-transparent"
                      )}
                    />
                  )}
                  <Button
                    radius="none"
                    key={item.label}
                    onClick={() => profileStatusSetter(item.content)}
                    className={cn(
                      "h-[76px] flex justify-between items-center font-[400] w-full text-lg hover:bg-cyan-700 text-gray-900 bg-white ",
                      item.content === profileStatus &&
                        "bg-cyan-900 text-white "
                    )}
                  >
                    <span className="flex items-center gap-3">
                      {" "}
                      <item.lightIcon />
                      {item.label}
                    </span>
                    <MdKeyboardArrowRight
                      className={cn(
                        "text-darkColor-40 text-3xl",
                        item.content === profileStatus && "text-white",
                        lang === "ar" && "rotate-180"
                      )}
                    />
                  </Button>
                  {item.content !==
                    profileList[profileList.length - 1].content && (
                    <span className=" mx-4 flex justify-center ">
                      <Divider />
                    </span>
                  )}
                </div>
              ))}
            </div>
            {profileStatus === "personal" && (
              <PersonalInfo userData={userData} />
            )}
            {profileStatus === "offers" && <Offers />}
            {profileStatus === "Wallet" && <Wallet />}
            {profileStatus === "LoyaltySystem" && (
              <LoyaltySystem userData={userData} />
            )}
            {profileStatus === "allReturn" && <AllReturn />}
            {profileStatus === "allOrders" && <OrderPage exSt />}
          </div>
        </div>
      </div>
    </Center>
  );
}
