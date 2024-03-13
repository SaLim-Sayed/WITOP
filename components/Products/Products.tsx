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
  const { products, setProducts } = useProductStore();
  const [total, setTotal] = useState(1);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const server = await getProducts({ category });
    console.log(server)
    setProducts(server?.products);
    setTotal(server?.totalPage);
    setTimeout(() => {
      setLoading(false);
    }, 500); // Set loading to false after 1000ms
  };

  useEffect(() => {
    getData();
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

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-[80%]  mx-auto  md:w-[20%]  ">
              <FilterComponent />
            </div>

            <div
              dir={dir}
              className="flex flex-1   flex-wrap  justify-around  gap-4"
            >
              {loading ? ( // Show skeleton while loading
                Array.from({ length: 4 }).map((_,index: any) => (
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
                  />
                ))
              ) : ( // Show "No Data" message if no products available
                <div>No Data</div>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <Pagination showControls total={total || 10} initialPage={1} />
          </div>
        </div>
      </Center>
    </div>
  );
}
