/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React from "react";
import Center from "../Global/Ui/Center";
import ImageGallury from "../Global/Sliders/ImageGallury";
import { BiHeart, BiStar } from "react-icons/bi";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import { Tabs, Tab } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import RelatedProducts from "./RelatedProducts";
import { useParams } from "next/navigation";
import getProductByID from "@/store/actions/getProductByID.module";
import Cookies from "js-cookie";
import { showToast } from "../Global/Ui/Toast";
import { cartStore } from "@/store/futures/cartStore";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/libs/cn";
import { BsHeartFill, BsStarFill } from "react-icons/bs";
import useFavoriteStore from "@/store/futures/useFavoriteStore";
import { axiosInstance } from "@/util/axiosConfig";
import SmImageGallury from "../Global/Sliders/SmImageGallury";
import ImageGallurySM from "../Global/Sliders/ImageGallurySM";
export default function ProductCard() {
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
    showToast({ status: "Error", type: "error", toastMessage: message });
  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const [productData, setProductData] = useState<Product>();
  const [showDesc, setShowDesc] = useState(false);
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
      showErrorToast("Something Went Wrong , Try Again..");
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
      showErrorToast("Something Went Wrong , Try Again..");
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
      showErrorToast("Something Went Wrong , Try Again..");
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
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
          <div className="text-[14px] md:text-xl relative  ">
            {productData?.productName}
          </div>
          {/* <div className="text-2xl font-bold line-through">
            {productData?.priceBeforeDiscount} $
          </div> */}
          <div className="flex justify-between items-center">
            <div className="text-2xl text-red-700 font-bold">
              {productData?.price} {t("SAR")}
            </div>
            {star ? (
              <div className="flex gap-1">
                <Button
                  isIconOnly
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
                    <BsStarFill size={20} fill={cn(star >= 1 && " #f4c706")} />
                  ) : (
                    <BiStar className="text-[#f4c706]" size={20} />
                  )}
                </Button>
                <Button
                  isIconOnly
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
                    <BsStarFill size={20} fill={cn(star >= 2 && " #f4c706")} />
                  ) : (
                    <BiStar className="text-[#f4c706]" size={20} />
                  )}
                </Button>
                <Button
                  isIconOnly
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
                    <BsStarFill size={20} fill={cn(star >= 3 && " #f4c706")} />
                  ) : (
                    <BiStar className="text-[#f4c706]" size={20} />
                  )}
                </Button>
                <Button
                  isIconOnly
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
                    <BsStarFill size={20} fill={cn(star >= 4 && " #f4c706")} />
                  ) : (
                    <BiStar className="text-[#f4c706]" size={20} />
                  )}
                </Button>
                <Button
                  isIconOnly
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
                      size={20}
                      fill={cn(
                        (star === 5 || productData?.totalRating === 5) &&
                          " #f4c706"
                      )}
                    />
                  ) : (
                    <BiStar className="text-[#f4c706]" size={20} />
                  )}
                </Button>
              </div>
            ) : (
              <div className="flex gap-1">
                <Button
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
                      size={20}
                      fill={cn(productData?.totalRating >= 1 && " #f4c706")}
                    />
                  ) : (
                    <BiStar className="text-[#f4c706]" size={20} />
                  )}
                </Button>
                <Button
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
                      size={20}
                      fill={cn(productData?.totalRating >= 2 && " #f4c706")}
                    />
                  ) : (
                    <BiStar className="text-[#f4c706]" size={20} />
                  )}
                </Button>
                <Button
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
                      size={20}
                      fill={cn(productData?.totalRating >= 3 && " #f4c706")}
                    />
                  ) : (
                    <BiStar className="text-[#f4c706]" size={20} />
                  )}
                </Button>
                <Button
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
                      size={20}
                      fill={cn(productData?.totalRating >= 4 && " #f4c706")}
                    />
                  ) : (
                    <BiStar className="text-[#f4c706]" size={20} />
                  )}
                </Button>
                <Button
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
                      size={20}
                      fill={cn(productData?.totalRating === 5 && " #f4c706")}
                    />
                  ) : (
                    <BiStar className="text-[#f4c706]" size={20} />
                  )}
                </Button>
              </div>
            )}
          </div>
          <div className="flex gap-4">
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
          </div>
          <Button
            variant="light"
            radius="none"
            className={cn(
              "   font-500 text-xl",
              showDesc && "border-b-2 border-black"
            )}
            onClick={() => setShowDesc(!showDesc)}
          >
            {t("ShowDesc")}
          </Button>
          {showDesc && (
            <code className="text-sm  ">{productData?.description}</code>
          )}
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

      <RelatedProducts productData={relatedProducts} />
    </Center>
  );
}
