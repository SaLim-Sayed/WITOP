"use client";
import { useProductStore } from "@/store/futures/cartStore";
import React from "react";

import Center from "../Global/Ui/Center";
import ImageGallury from "../Global/Sliders/ImageGallury";
import { BiHeart, BiStar, BiTrash } from "react-icons/bi";
import { Button, Card, CardBody, Divider, Input } from "@nextui-org/react";
import { Tabs, Tab } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { useParams } from "next/navigation";
import getProductByID from "@/store/actions/getProductByID.module";

import { showToast } from "../Global/Ui/Toast";
import { cartStore } from "@/store/futures/cartStore";
import { useLocale } from "next-intl";
import { cn } from "@/libs/cn";
import { BsHeartFill, BsStarFill } from "react-icons/bs";
import useFavoriteStore from "@/store/futures/useFavoriteStore";
import { axiosInstance } from "@/util/axiosConfig";

export default function Cart() {
  const { productsCart, setProductsCart } = useProductStore();
  console.log({ productsCart });

  const [count, setCount] = useState<number>(1);

  const showSuccessToast = (message?: string) =>
    showToast({ status: "Success", type: "success", toastMessage: message });
  const showErrorToast = (message?: string) =>
    showToast({ status: "Error", type: "error", toastMessage: message });
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const lang = useLocale();

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addRatingHandler = async (noOfStar: number, id: string) => {
    try {
      const { data } = await axiosInstance.post(`/user/addRating/${id}`, {
        numberOfStar: noOfStar,
      });

      console.log(data);
    } catch (err: any) {
      console.log(err);
      showErrorToast("Something Went Wrong , Try Again..");
    }
  };
  const updateCountInCart = async (id: string) => {
    try {
      const { data } = await axiosInstance.put(
        `/user/updateCountInCart/${id}`,
        { count: count }
      );
      setProductsCart(data?.cart?.products);
      console.log(data);
      showSuccessToast(data?.message);
    } catch (err: any) {
      console.log(err);
      showErrorToast("Something Went Wrong , Try Again..");
    }
  };
  const removeFromCartHandler = async (id: any) => {
    try {
      const { data } = await axiosInstance.put(
        `/user/removeFromCart/${id}`,
        {}
      );

      setProductsCart(data?.cart?.products);

      showSuccessToast(data?.message);
    } catch (err: any) {
      console.log(err);
      showErrorToast("Something Went Wrong , Try Again..");
    }
  };
  return (
    <Center>
      {productsCart?.map((product) => (
        <div
          key={product?._id}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-4 gap-8"
        >
          <ImageGallury images={product?.images} alt={product?.productName} />
          <div className="flex flex-col gap-4">
            <div className="text-3xl relative">{product?.productName}</div>
            <div className="text-2xl font-bold">{product?.description}</div>

            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold">
                {" "}
                Price : {product?.price}{" "}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold">
                Amount : {product?.count}{" "}
              </div>
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
                onClick={() => updateCountInCart(product?._id)}
                radius="sm"
                className="h-12 w-full bg-black text-white uppercase "
              >
                Update Amount
              </Button>
              <Button
                className="h-12  w-full "
                color="danger"
                onClick={() => removeFromCartHandler(product?._id)}
                endContent={<BiTrash />}
              >
                Delete
              </Button>
            </div>
            <div className="text-xl text-justify">
              <Button
                // onClick={() => addToCartHandler(product?._id)}
                radius="lg"
                className="w-full h-12 bg-black text-white uppercase "
              >
                Go Payment
              </Button>
            </div>
          </div>
          <Divider />
        </div>
      ))}
    </Center>
  );
}
