"use client";
import getProductByBrand from "@/store/actions/getProductByBrand.module";
import { Product as ProductType } from "@/types/product";
import { Pagination } from "@nextui-org/react";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import GCardSkeleton from "../Global/Loaders/GCardSkeleton";
import Center from "../Global/Ui/Center";
import GCard from "../Global/Ui/GCard";
import Headings from "../Global/Ui/Heading";
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

          <div
            dir={dir}
            className="flex flex-1   flex-wrap  justify-around  gap-4"
          >
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
