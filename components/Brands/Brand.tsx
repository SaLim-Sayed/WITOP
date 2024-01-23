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
import getProductBySectionType from "@/store/actions/getProductBySectionType.module";
import getProductByBrand from "@/store/actions/getProductByBrand.module";
import Layer from "../Global/Ui/Layer";

export default function Brand() {
  const { type } = useParams();
  console.log(type);
  const locale = useLocale();
  const dir = locale == "ar" ? "rtl" : "ltr";
  const [products, setProducts] = useState<ProductType[]>();
  const [total, setTotal] = useState(1);
  const getData = async () => {
    const data = await getProductByBrand({ type: type });
    setProducts(data?.products);
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Headings type={products && products[0]?.brand} />

      <Center>
        <div className="flex flex-col  gap-8">
          <Layer
            title={
              <div className=" text-3xl font-bold">
                {products && products[0]?.brand}
              </div>
            }
          />

          <div dir={dir} className="flex   flex-wrap   mx-auto   gap-4">
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
