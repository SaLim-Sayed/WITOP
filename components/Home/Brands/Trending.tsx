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
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Button } from "@nextui-org/react";
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
          <div className="mx-auto  flex items-center  justify-center  ">
            <Button
              isIconOnly
              radius="full"
              className="p-0 min-w-[30px]  h-[30px] z-10 "
              onClick={() => {
                locale == "ar"
                  ? slider.current.slickNext()
                  : slider.current.slickPrev();
              }}
            >
              {locale == "en" ? <BiLeftArrow /> : <BiRightArrow />}
            </Button>
            <div className="w-[85%]   lg:w-full  mx-auto ">
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
            <Button
              isIconOnly
              radius="full"
              className="p-0 min-w-[30px] h-[30px] z-10 "
              onClick={() => {
                locale == "ar"
                  ? slider.current.slickPrev()
                  : slider.current.slickNext();
              }}
            >
              {locale == "en" ? <BiRightArrow /> : <BiLeftArrow />}
            </Button>
          </div>
        </div>
      </Center>
    </div>
  );
}
