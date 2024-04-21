"use client";
import Center from "../Global/Ui/Center";
import Title from "../Global/Ui/Title";
import GCard from "../Global/Ui/GCard";
import { Product } from "@/types/product";
export default function RelatedProducts({
  productData,
}: {
  productData: Product[] | undefined;
}) {
  return (
    <div>
      <Center>
        <Title title="RELATED PRODUCTS " />
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
      </Center>
    </div>
  );
}
