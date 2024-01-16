"use client";
import Center from "../Global/Ui/Center";
import Title from "../Global/Ui/Title";
import GCard from "../Global/Ui/GCard";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import getProducts from "@/store/actions/products.module";
import { useParams } from "next/navigation";
export default function RelatedProducts() {
  const { category } = useParams();
  const [products, setProducts] = useState<Product[]>();
  const geData = async () => {
    const server = await getProducts({category});
    setProducts(server?.products);
    console.log(server?.products);
  };
  useEffect(() => {
    geData();
  }, []);
  return (
    <div>
      <Center>
        <Title title="RELATED PRODUCTS " />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-4 gap-4">
      {products?.slice(0, 5).map((product) => (
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
      </Center>
    </div>
  );
}
