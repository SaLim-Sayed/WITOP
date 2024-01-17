"use client";
import Center from "@/components/Global/Ui/Center";
import Title from "@/components/Global/Ui/Title";
import { useEffect, useRef, useState } from "react";
import { Product as ProductType } from "@/types/product";
import getProductBySectionType from "@/store/actions/getProductBySectionType.module";
import Slider from "@ant-design/react-slick";
import GCard from "@/components/Global/Ui/GCard";
import { useLocale } from "next-intl";
import { settings } from "./setting";

export default function Trending() {
  const slider = useRef<any>();

  const locale = useLocale();
  const dir = locale == "ar" ? true : false;
  const [products, setProducts] = useState<ProductType[]>();
  const getData = async () => {
    const type = "Trending";
    const server = await getProductBySectionType({ type });
    setProducts(server?.products);

    console.log(server?.products);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Center>
        <Title title="TRENDING" />
        <div>
          <div className="gap-4 space-x-4">
            {/*  @ts-ignore  */}
            <Slider rtl={dir} {...settings} ref={slider} autoplay>
              {products?.map((product) => (
                <div
                  dir={dir ? "rtl" : "ltr"}
                  key={product?._id}
                  className="mx-auto px-4 flex justify-center"
                >
                  <GCard
                    key={product?._id}
                    id={product?._id}
                    price={product?.price}
                    title={product?.productName}
                    desc={product?.description}
                    img={product?.images[0]}
                    category={product?.category}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Center>
    </div>
  );
}
