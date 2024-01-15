"use client";
import React, { useEffect, useState } from "react";
import { Image, Pagination } from "@nextui-org/react";
import Center from "../Global/Ui/Center";
import GCard from "../Global/Ui/GCard";

import { Product as ProductType } from "@/types/product";
import Headings from "../Global/Ui/Heading";
import getProducts from "@/store/actions/products.module";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Title from "../Global/Ui/Title";
export default function Product() {
  const { category } = useParams();

  const [products, setProducts] = useState<ProductType[]>();

  const geData = async () => {
    const server = await getProducts({ category });
    setProducts(server?.products);
    console.log(server?.products);
  };
  useEffect(() => {
    geData();
  }, []);
  return (
    <div>
      <Headings />
      <Center>
        {products ? (
          <div className="flex flex-col gap-8">
            <div className=" text-3xl font-bold">{products[0]?.category}</div>
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
            <div className="grid grid-cols-1 justify-center items-center w-full md:grid-cols-3 lg:grid-cols-4 mx-4 gap-4">
              {products?.map((product) => (
                <GCard
                  key={product?._id}
                  id={product?._id}
                  price={product?.price}
                  title={product?.productName}
                  desc={product?.description}
                  img={product?.images[0]}
                  category={product?.category}
                />
              ))}
            </div>
            <div className="flex justify-center">
              <Pagination showControls total={10} initialPage={1} />
            </div>
          </div>
        )
        :
        <Title title="No Products Found" />
        }
         
      </Center>
    </div>
  );
}
