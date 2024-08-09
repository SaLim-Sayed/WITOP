/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { cn } from "@/libs/cn";
import getProductByID from "@/store/actions/getProductByID.module";
import { cartStore } from "@/store/futures/cartStore";
import useFavoriteStore from "@/store/futures/useFavoriteStore";
import { Product } from "@/types/product";
import { axiosInstance } from "@/util/axiosConfig";
import { copyUrlWithoutSearchParams } from "@/util/copyUrl";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { memo, useEffect, useState } from "react";
import { BiCartAdd, BiHeart, BiStar } from "react-icons/bi";
import { BsHeartFill, BsStarFill } from "react-icons/bs";
import ImageGallury from "../Global/Sliders/ImageGallury";
import ImageGallurySM from "../Global/Sliders/ImageGallurySM";
import Center from "../Global/Ui/Center";
import { showToast } from "../Global/Ui/Toast";
import RelatedProducts from "./RelatedProducts";

import { AiOutlineShareAlt } from "react-icons/ai";
function ProductCard() {
  const lang = useLocale();
  const t = useTranslations("Globals");

  const token = Cookies.get("token");

  axiosInstance.defaults.headers.common["authrization"] = `maroTK${token}`;
  axiosInstance.defaults.headers.common["language"] = lang || "en";
  const { id, category } = useParams();
  const { isFavoriteOpen, setFavoriteIsOpen } = useFavoriteStore();

  const [count, setCount] = useState<number>(1);
  const [star, setStar] = useState<number>(0);
  const [fav, setFav] = useState<boolean>(false);
  const { CartSetter } = cartStore();

  const showSuccessToast = (message?: string) =>
    showToast({ status: "Success", type: "success", toastMessage: message });
  const showErrorToast = (message?: string) =>
    showToast({ status: "! خطأ ", type: "error", toastMessage: message });
  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const [copied, setCopied] = useState(false);

  const [productData, setProductData] = useState<Product>();
  const [showRelated, setShowRelated] = useState(false);
  const [relatedProducts, setrelatedProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState(false);

  const getProductData = async () => {
    const server = await getProductByID({ id, category });
    setProductData(server?.product);
    setrelatedProducts(server?.relatedProducts);
  };

  const addRatingHandler = async (noOfStar: number) => {
    try {
      setIsLoading(true);
      const { data } = await axiosInstance.post(`/user/addRating/${id}`, {
        numberOfStar: noOfStar,
      });
      setIsLoading(false);
      console.log(data);
    } catch (err: any) {
      setIsLoading(false);
      console.log(err);
      showErrorToast("يجب تسجيل الدخول اولاََ");
    }
  };
  const [len, setLen] = useState(100);
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
    }
  };
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
    }
  };
  useEffect(() => {
    if (id) {
      getProductData();
    }
  }, [id]);
  useEffect(() => {
    getProductData();
  }, []);
  return (
    <Center>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 relative">
        <div className="flex justify-center items-start w-full ">
          <ImageGallury
            images={productData?.images}
            alt={productData?.productName}
            discount={productData?.discountPercentage}
          />
          <ImageGallurySM
            images={productData?.images}
            alt={productData?.productName}
            discount={productData?.discountPercentage}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-xl md:text-xl font-[500] relative  ">
            {productData?.productName}
          </div>
          <div className="flex  flex-col gap-2">
            <div className="flex flex-col">
              <div className="  line-through">
                {productData?.priceBeforeDiscount || productData?.price}{" "}
                {t("SAR")}
              </div>
              <div className="  flex  gap-4 items-end ">
                <div className="flex gap-2">
                  <div className="text-2xl text-red-700 font-bold">
                    {productData?.price} {t("SAR")}
                  </div>
                  <Button className="bg-pink-100" radius="lg" size="sm">
                    - {productData?.discountPercentage || 0} %
                  </Button>
                </div>
                <div className="text-green-500">أصلي 100%</div>
              </div>
              <div className=" text-gray-400 mt-4  ">
                شامل ضريبة القيمة المضافة
              </div>
            </div>
            <div className="flex  ">
              {star ? (
                <div className="flex -gap-2">
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    onClick={() => {
                      if (star !== 1) {
                        setStar(1);
                        addRatingHandler(1);
                      } else {
                        setStar(0);
                        addRatingHandler(0);
                      }
                    }}
                  >
                    {star >= 1 ? (
                      <BsStarFill
                        size={16}
                        fill={cn(star >= 1 && " #f4c706")}
                      />
                    ) : (
                      <BiStar className="text-[#f4c706]" size={16} />
                    )}
                  </Button>
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    onClick={() => {
                      if (star !== 2) {
                        setStar(2);
                        addRatingHandler(2);
                      } else {
                        setStar(1);
                        addRatingHandler(1);
                      }
                    }}
                  >
                    {star >= 2 ? (
                      <BsStarFill
                        size={16}
                        fill={cn(star >= 2 && " #f4c706")}
                      />
                    ) : (
                      <BiStar className="text-[#f4c706]" size={16} />
                    )}
                  </Button>
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    onClick={() => {
                      if (star !== 3) {
                        setStar(3);
                        addRatingHandler(3);
                      } else {
                        setStar(2);
                        addRatingHandler(2);
                      }
                    }}
                  >
                    {star >= 3 ? (
                      <BsStarFill
                        size={16}
                        fill={cn(star >= 3 && " #f4c706")}
                      />
                    ) : (
                      <BiStar className="text-[#f4c706]" size={16} />
                    )}
                  </Button>
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    onClick={() => {
                      if (star !== 4) {
                        setStar(4);
                        addRatingHandler(4);
                      } else {
                        setStar(3);
                        addRatingHandler(3);
                      }
                    }}
                  >
                    {star >= 4 ? (
                      <BsStarFill
                        size={16}
                        fill={cn(star >= 4 && " #f4c706")}
                      />
                    ) : (
                      <BiStar className="text-[#f4c706]" size={16} />
                    )}
                  </Button>
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    onClick={() => {
                      if (star !== 5) {
                        setStar(5);
                        addRatingHandler(5);
                      } else {
                        setStar(4);
                        addRatingHandler(4);
                      }
                    }}
                  >
                    {star === 5 || productData?.totalRating === 5 ? (
                      <BsStarFill
                        size={16}
                        fill={cn(
                          (star === 5 || productData?.totalRating === 5) &&
                            " #f4c706"
                        )}
                      />
                    ) : (
                      <BiStar className="text-[#f4c706]" size={16} />
                    )}
                  </Button>
                </div>
              ) : (
                <div className="flex gap-0">
                  <Button
                    size="sm"
                    onClick={() => {
                      if (star === 0) {
                        setStar(1);
                        addRatingHandler(1);
                      } else {
                        setStar(0);
                        addRatingHandler(0);
                      }
                    }}
                    isIconOnly
                    variant="light"
                  >
                    {productData?.totalRating >= 1 ? (
                      <BsStarFill
                        size={16}
                        fill={cn(productData?.totalRating >= 1 && " #f4c706")}
                      />
                    ) : (
                      <BiStar className="text-[#f4c706]" size={16} />
                    )}
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => {
                      if (star === 0) {
                        setStar(2);
                        addRatingHandler(2);
                      } else {
                        setStar(1);
                        addRatingHandler(1);
                      }
                    }}
                    isIconOnly
                    variant="light"
                  >
                    {productData?.totalRating >= 2 ? (
                      <BsStarFill
                        size={16}
                        fill={cn(productData?.totalRating >= 2 && " #f4c706")}
                      />
                    ) : (
                      <BiStar className="text-[#f4c706]" size={16} />
                    )}
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => {
                      if (star === 0) {
                        setStar(3);
                        addRatingHandler(3);
                      } else {
                        setStar(2);
                        addRatingHandler(2);
                      }
                    }}
                    isIconOnly
                    variant="light"
                  >
                    {productData?.totalRating >= 3 ? (
                      <BsStarFill
                        size={16}
                        fill={cn(productData?.totalRating >= 3 && " #f4c706")}
                      />
                    ) : (
                      <BiStar className="text-[#f4c706]" size={16} />
                    )}
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => {
                      if (star === 0) {
                        setStar(4);
                        addRatingHandler(4);
                      } else {
                        setStar(3);
                        addRatingHandler(3);
                      }
                    }}
                    isIconOnly
                    variant="light"
                  >
                    {productData?.totalRating >= 4 ? (
                      <BsStarFill
                        size={16}
                        fill={cn(productData?.totalRating >= 4 && " #f4c706")}
                      />
                    ) : (
                      <BiStar className="text-[#f4c706]" size={16} />
                    )}
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => {
                      if (star === 0) {
                        setStar(5);
                        addRatingHandler(5);
                      } else {
                        setStar(4);
                        addRatingHandler(4);
                      }
                    }}
                    isIconOnly
                    variant="light"
                  >
                    {productData?.totalRating === 5 ? (
                      <BsStarFill
                        size={16}
                        fill={cn(productData?.totalRating === 5 && " #f4c706")}
                      />
                    ) : (
                      <BiStar className="text-[#f4c706]" size={16} />
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-4">
            <div
              onClick={() => setShowRelated(true)}
              className="text-blue-500 text-sm cursor-pointer"
            >
              أضغط هنا لعرض المزيد من العلامة التجارية
            </div>
          </div>
          <Button className="w-full bg-pink-100 texl-xl">
            هذا المنتج لايرد ولا يستبدل
          </Button>
          <div className="hidden md:flex gap-4">
            <div className="flex items-center w-[100px] h-12 justify-between border-[2px] gap-2">
              <Button
                variant="light"
                size="sm"
                isIconOnly
                onClick={handleDecrease}
                type="button"
              >
                -
              </Button>
              <div>{count}</div>
              <Button
                variant="light"
                size="sm"
                isIconOnly
                onClick={handleIncrease}
                type="button"
                className=" "
              >
                +
              </Button>
            </div>
            <Button
              onClick={() => addToCartHandler()}
              radius="sm"
              className="h-12 w-40 bg-black text-white uppercase "
            >
              {t("ADDCART")}
            </Button>
            <Button
              onClick={() => {
                addToFavoriteHandler();
                setFav(!fav);
              }}
              isIconOnly
              variant="light"
              radius="sm"
              className="h-12 w-12 "
            >
              {" "}
              {!fav ? <BiHeart size={60} /> : <BsHeartFill size={60} />}
            </Button>

            <div className="flex justify-end items-center ">
              <Popover showArrow shouldFlip placement="top">
                <PopoverTrigger>
                  <Button
                    onClick={() => copyUrlWithoutSearchParams(setCopied)}
                    isIconOnly
                    size="lg"
                    radius="full"
                    color="success"
                    variant="flat"
                    className=" border-none mb-1    flex justify-center items-center text-teal-800 font-[700]"
                  >
                    <AiOutlineShareAlt size={25} width={25} height={25} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="bg-cyan-500 text-white">
                  <div className="px-1  ">
                    <div className="text-small font-bold">
                      {copied ? "Link copied!" : "Copy link"}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div
            className={cn(
              " flex   text-medium text-gray-500  border-b-2 border-black w-fit"
            )}
          >
            {t("Desc")}
          </div>

          <div className="flex">
            {productData?.description && (
              <pre className=" font-[400] font-sans  w-600  whitespace-break-spaces break-words">
                {productData?.description.slice(0, len)}{" "}
                {len <= 100 && (
                  <span
                    className="text-blue-500  cursor-pointer"
                    onClick={() =>
                      setLen(productData?.description.length || 1000)
                    }
                  >
                    {t("ShowMore")}
                  </span>
                )}
              </pre>
            )}
          </div>
          <div className="md:hidden flex gap-4 sticky bottom-1 bg-white  p-2 rounded-lg z-40   shadow-xl">
            <div className="flex items-center w-[100px] h-12 justify-between border-[2px] gap-2">
              <Button
                variant="light"
                size="sm"
                isIconOnly
                onClick={handleDecrease}
                type="button"
              >
                -
              </Button>
              <div>{count}</div>
              <Button
                variant="light"
                size="sm"
                isIconOnly
                onClick={handleIncrease}
                type="button"
                className=" "
              >
                +
              </Button>
            </div>
            <Button
              onClick={() => addToCartHandler()}
              size="lg"
              variant="flat"
              color="secondary"
              isIconOnly
              radius="full"
              className="h-12  bg-black text-white uppercase "
            >
              <BiCartAdd size={24} />
            </Button>
            <Button
              onClick={() => {
                addToFavoriteHandler();
                setFav(!fav);
              }}
              isIconOnly
              variant="light"
              radius="sm"
              className="h-12 w-12 "
            >
              {" "}
              {!fav ? <BiHeart size={60} /> : <BsHeartFill size={60} />}
            </Button>
            <div className=" ">
              <Popover showArrow shouldFlip placement="top">
                <PopoverTrigger>
                  <Button
                    onClick={() => copyUrlWithoutSearchParams(setCopied)}
                    isIconOnly
                    size="lg"
                    radius="full"
                    color="success"
                    variant="flat"
                    className=" border-none mb-1    flex justify-center items-center text-teal-800 font-[700]"
                  >
                    <AiOutlineShareAlt size={25} width={25} height={25} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="bg-cyan-500 text-white">
                  <div className="px-1  ">
                    <div className="text-small font-bold">
                      {copied ? "Link copied!" : "Copy link"}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-center">
        <Tabs variant="underlined" aria-label="Tabs variants">
          <Tab key="photos" title="Features">
            <Card shadow="none">
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="music" title="How to use">
            <Card shadow="none">
              <CardBody>
                outdoor sports practitioners. Practical and easy to apply, it
                does not need to be spread with the hands and is more resistant
                to water and sweat. Ideal for all skin types, even the most
                sensitive skin.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="videos" title="Reviews">
            <Card shadow="none">
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div> */}

      {showRelated && <RelatedProducts productData={relatedProducts} />}
    </Center>
  );
}

export default memo(ProductCard);
