"use client";
import React, { useEffect, useState } from "react";
import { Button, Image, Pagination, Skeleton, Spinner } from "@nextui-org/react";
import Center from "../Global/Ui/Center";
import GCard from "../Global/Ui/GCard";
import { Product as ProductType } from "@/types/product";
import Headings from "../Global/Ui/Heading";
import getProducts from "@/store/actions/products.module";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import GCardSkeleton from "../Global/Loaders/GCardSkeleton";
import Layer from "../Global/Ui/Layer";
import FilterComponent from "./Filter";
import { useProductStore } from "@/store/futures/productStore";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

export default function Product() {
   const t = useTranslations("Globals");
  const { category } = useParams();
  const locale = useLocale();
  const dir = locale == "ar" ? "rtl" : "ltr";
  const { products, setProducts } = useProductStore();
  const [total, setTotal] = useState(1);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const getData = async () => {
    setLoading(true);
    const server = await getProducts({ category, page });
    console.log(server);
    setProducts(server?.products);
    setTotal(server?.totalPage);
    setTimeout(() => {
      setLoading(false);
    }, 500); // Set loading to false after 1000ms
  };

  useEffect(() => {
    if (page) getData();
  }, [page]);

  return (
    <div className="relative">
      <Headings type={products && products[0]?.category} />

      <Center>
        <div className="flex flex-col  gap-8">
          <Layer
            title={
              <div className=" text-3xl font-bold">
                {products && products[0]?.category}
              </div>
            }
          />

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-[80%] hidden md:flex mx-auto  md:w-[20%]  ">
              <FilterComponent />
            </div>

            <div
              dir={dir}
              className="flex flex-1   flex-wrap  justify-around  gap-4"
            >
              {loading ? ( // Show skeleton while loading
                Array.from({ length: 4 }).map((_, index: any) => (
                  <div key={index}>
                    <GCardSkeleton />
                  </div>
                ))
              ) : products?.length > 0 ? ( // Show products if available
                products.map((product) => (
                  <GCard
                    key={product?._id}
                    id={product?._id}
                    price={product?.price}
                    priceBeforeDiscount={product?.priceBeforeDiscount}
                    discountPercentage={product?.discountPercentage}
                    outOfStock={product?.outOfStock}
                    title={product?.productName}
                    desc={product?.description}
                    img={product?.images[0]}
                    category={product?.category}
                    totalRating={product?.totalRating}
                    stock={product?.stock}
                  />
                ))
              ) : (
                // Show "No Data" message if no products available
                <div className="flex flex-col gap-5 w-full justify-center items-center h-full">
                  <div>{t("noData")}</div>
                  <Button
                    as={Link}
                    href="/"
                    variant="bordered"
                    color="secondary"
                    dir={"rtl"}
                    endContent={<BiArrowBack />}
                  >
                    {t("Back")}
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div className="flex my-4 justify-center">
            <Pagination
              dir="ltr"
              total={total}
              initialPage={1}
              loop
              showControls
              onChange={(e) => setPage(e)}
              as={Link}
              href={"#top"}
            />
          </div>
        </div>
      </Center>
      <div className="  block md:hidden sticky w-full bottom-0 left-0     ">
        <FilterComponent />
      </div>
    </div>
  );
}
