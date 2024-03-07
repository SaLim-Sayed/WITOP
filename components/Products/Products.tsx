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
import Layer from "../Global/Ui/Layer"; 
import FilterComponent from "./Filter";
import { useProductStore } from "@/store/futures/productStore";

export default function Product() {
  const { category } = useParams();
  const locale = useLocale();
  const dir = locale == "ar" ? "rtl" : "ltr";
  const {products, setProducts} = useProductStore();
  const [total, setTotal] = useState(1);

  const geData = async () => {
    const server = await getProducts({ category });
    setProducts(server?.products);
    setTotal(server?.totalPage);
     
  };
  useEffect(() => {
    geData();
  }, []);
  return (
    <div>
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

           <div className="flex">
            <div className="w-[20%]">
                <FilterComponent/>
            </div>
           
          <div dir={dir} className="flex flex-1   flex-wrap  justify-around  gap-4">
            {products.length > 0
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
          </div></div>
          <div className="flex justify-center">
            <Pagination showControls total={total || 10} initialPage={1} />
          </div>
        </div>
      </Center>
    </div>
  );
}
3