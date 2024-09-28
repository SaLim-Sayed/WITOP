"use client";
import { cn } from "@/libs/cn";
import { cartStore } from "@/store/futures/cartStore";
import useFavoriteStore from "@/store/futures/useFavoriteStore";
import { Product } from "@/types/product";
import { axiosInstance } from "@/util/axiosConfig";
import { Button, Card, CardBody, CardFooter, Divider } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/legacy/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiCartAdd, BiHeart } from "react-icons/bi";
import { BsHeartFill, BsStarFill } from "react-icons/bs";
import GCardSkeleton from "../Loaders/GCardSkeleton";
import ClientHydration from "../Providers/ClientHydration";
import { showToast } from "./Toast";
export default function GCard({
  price,
  title,
  desc,
  id,
  img,
  exSt,
  product,
  category,
  priceBeforeDiscount,
  discountPercentage,
  totalRating,
  stock,
}: {
  price: any;
  title: string;
  desc: string;
  img: string;
  exSt?: string;
  id?: string;
  product?: Product;
  category?: string;
  priceBeforeDiscount?: any;
  discountPercentage?: any;
  outOfStock?: any;
  totalRating?: any;
  stock?: any;
}) {
  const translate = useTranslations("Buttons");
  const t = useTranslations("Globals");
  const router = useRouter();
  const locale = useLocale();
  const dir = locale == "ar" ? "rtl" : "ltr";

  const [isLoading, setIsLoading] = useState(false);
  const { isFavoriteOpen, setFavoriteIsOpen } = useFavoriteStore();
  const [fav, setFav] = useState<boolean>(false);
  const { CartSetter } = cartStore();
  const [count, setCount] = useState<number>(1);

  const showSuccessToast = (message?: string) =>
    showToast({ status: "Success", type: "success", toastMessage: message });
  const showErrorToast = (message?: string) =>
    showToast({ status: "! خطأ ", type: "error", toastMessage: message });

  const addToFavoriteHandler = async () => {
    try {
      setIsLoading(true);
      const { data } = await axiosInstance.post(`/user/addToFavorite/${id}`);
      setIsLoading(false);
      console.log(data);
      setFavoriteIsOpen(!isFavoriteOpen);
      showSuccessToast(data?.message);
    } catch (err: any) {
      setIsLoading(false);
      console.log(err);

      showErrorToast("يجب تسجيل الدخول اولاََ");
      setTimeout(() => {
        router.push(`/auth/login`);
      }, 5000);
    }
  };
  const addToCartHandler = async () => {
    try {
      setIsLoading(true);
      const { data } = await axiosInstance.post(`/user/addToCart/${id}`, {
        count: count,
      });
      setIsLoading(false);
      if (data?.numberOfItem !== undefined) {
        CartSetter(data?.numberOfItem);
      }
      showSuccessToast(data?.message);
    } catch (err: any) {
      setIsLoading(false);
      console.log(err);
      showErrorToast("يجب تسجيل الدخول اولاََ");
      setTimeout(() => {
        router.push(`/auth/login`);
      }, 5000);
    }
  };
  return (
    <ClientHydration LoaderComponent={<GCardSkeleton />}>
      <div
        dir={dir}
        className="flex flex-col  justify-between py-2  max-w-[300px]  w-[140px]   md:w-[200px] md:min-w-[2§px] max-h-[320px]  md:max-h-[400px]  rounded-lg relative "
      >
        <Button
          key={id}
          onClick={() => {
            addToFavoriteHandler();
            setFav(!fav);
          }}
          size="sm"
          variant="ghost"
          color="danger"
          isIconOnly
          radius="full"
          className="absolute bg-white  top-6 left-2    z-20"
        >
          {!fav ? <BiHeart size={24} /> : <BsHeartFill size={24} />}
        </Button>
        <Button
          key={id}
          onClick={() => addToCartHandler()}
          size="sm"
          variant="ghost"
          color="secondary"
          isIconOnly
          radius="full"
          className="absolute  bg-white top-32 md:top-40 left-2   z-20"
        >
          <BiCartAdd size={24} />
        </Button>

        <Card
          className="w-full h-[500px] pb-4"
          shadow="md"
          isPressable
          onClick={() => router.push(`/product/${category}/${id}`)}
        >
          <CardBody className="overflow-visible  p-0 flex flex-col gap-2 mb-4 pb-4">
            <div className="h-[150px] md:h-[200px] relative  mb-0 overflow-hidden">
              <Image
                layout="fill"
                alt={title}
                className="w-fit   object-contain "
                src={img}
              />
            </div>
            <Divider className="mt-0 pt-0" />
            <div className="flex flex-col gap-2  ">
              <div className="flex justify-between   mx-2">
                <div className="flex flex-col gap-2 ">
                  <p
                    className="text-slate-950  font-[400] text-start text-xs md:text-[16px] font-sans    "
                    title={title}
                  >
                    {title.slice(0, 30)}....
                  </p>
                </div>
              </div>
              <div className="flex   mx-2">
                <div className="flex w-[70%] flex-col gap-2 items-start">
                  <p className=" text-xs md:text-[16px]  text-slate-600">
                    {category}
                  </p>
                </div>
              </div>
              <div className="flex items-center   mx-2">
                <span className=" line-through  text-xs md:text-[16px]  text-gray-500 font-normal">
                  {priceBeforeDiscount}
                </span>
                <div className="flex gap-2">
                  <div className="  text-red-500  text-xs md:text-[16px]  font-bold">
                    {price} {t("SAR")}
                  </div>
                  <Button
                    className="bg-pink-50 h-4 md:h-6 text-red-500"
                    radius="lg"
                    size="sm"
                  >
                    - {discountPercentage || 0} %
                  </Button>
                </div>
              </div>
              <div></div>
              <div className="flex mx-2 items-center gap-2 md:gap-4 ">
                <div className="bg-pink-50 text-red-500 rounded-lg flex items-center justify-center w-10 gap-1  ">
                  <p className="text-slate-600"> {totalRating}</p>
                  <BsStarFill size={16} fill={cn(" #f4c706")} />
                </div>
                <div className="text-gray-500">({stock})</div>
              </div>
            </div>
          </CardBody>
          {/* <CardFooter className=" overflow-hidden p-0 font-bold shadow-small z-10">
            <Button
              className=" w-full text-lg text-white flex justify-between bg-teal-700 "
              variant="flat"
              color="default"
              radius="none"
              size="md"
            >
              {translate("Shop")}
              <FaShoppingCart />
            </Button>
          </CardFooter> */}
          <CardFooter className="h-4">
            <div className="w-full  h-4" />
          </CardFooter>
        </Card>
      </div>
    </ClientHydration>
  );
}
