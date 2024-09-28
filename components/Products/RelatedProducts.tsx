"use client";
import Center from "../Global/Ui/Center";
import Title from "../Global/Ui/Title";
import GCard from "../Global/Ui/GCard";
import { Product } from "@/types/product";
import { useTranslations } from "next-intl";
import { Divider } from "@nextui-org/react";
export default function RelatedProducts({
  productData,
}: {
  productData: Product[] | undefined;
  }) {
  const t=useTranslations("Products")
  return (
    <div className="my-8 py-4 ">
    <Divider/>
        <Title title={t("RelatedProducts")} />
        <div className="flex   flex-wrap  justify-center gap-4">
          {productData?.map((product) => (
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
          ))}
        </div>
      
    </div>
  );
}
