"use client";
import React, { useEffect, useState } from "react";
import { Image, Pagination, Skeleton, Spinner } from "@nextui-org/react";
import Center from "../Global/Ui/Center";
import GCard from "../Global/Ui/GCard";

import { Product as ProductType } from "@/types/product";
import Headings from "../Global/Ui/Heading";
import getProducts from "@/store/actions/products.module";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import GCardSkeleton from "../Global/Loaders/GCardSkeleton";

export default function Product() {
  const { category } = useParams();
  const locale = useLocale();
  const dir = locale == "ar" ? "rtl" : "ltr";
  const [products, setProducts] = useState<ProductType[]>();
  const [total, setTotal] = useState(1);

  const geData = async () => {
    const server = await getProducts({ category });
    setProducts(server?.products);
    setTotal(server?.totalPage);
    console.log(server?.products);
  };
  useEffect(() => {
    geData();
  }, []);
  return (
    <div>
      <Headings />
      <Center>
        <div className="flex flex-col gap-8">
          <div className=" text-3xl font-bold">
            {products ? products[0]?.category : <Skeleton className="h-8 w-24 rounded-lg" />}
          </div>
          <div>
            Avène presents a complete line of daily and specific care that can
            suit you in several categories. Discover here all the products for
            anti-aging, skin care, body care, sunscreen, make-up, and Men. All
            products from Avène contain thermal water with soothing and
            anti-irritating properties, and are suitable for the whole family,
            including infants and children. You can choose between ranges like
            Avène Physiolift, Avène Hydrance, Avéne Cleanance, Avéne Cicalfate
            or Trixera and many more.
          </div>
          <div dir={dir} className="flex   flex-wrap  justify-around  gap-4">
            {products
              ? products.map((product) => (
                  <GCard
                    key={product?._id}
                    id={product?._id}
                    price={product?.price}
                    title={product?.productName}
                    desc={product?.description}
                    img={product?.images[0]}
                    category={product?.category}
                  />
                ))
              : Array.from({ length: 4 }).map((_index: any) => (
                  <div key={_index}>
                    <GCardSkeleton />
                  </div>
                ))}
          </div>
          <div className="flex justify-center">
            <Pagination showControls total={total || 10} initialPage={1} />
          </div>
        </div>
      </Center>
    </div>
  );
}
