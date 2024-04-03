"use client";
import Center from "@/components/Global/Ui/Center";
import Title from "@/components/Global/Ui/Title";
import { useRef } from "react";
import { Product as ProductType } from "@/types/product";
import Slider from "@ant-design/react-slick";
import { useLocale, useTranslations } from "next-intl";
import { settings } from "./setting";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Button } from "@nextui-org/react";
import GCardSkeleton from "@/components/Global/Loaders/GCardSkeleton";
import GSlider from "@/components/Global/Ui/GSlider";
export default function OurSelection({
  selection,
}: {
  selection: ProductType[];
}) {
  const slider = useRef<any>();
  const t  = useTranslations("Buttons");

  const locale = useLocale();
  const dir = locale == "ar" ? true : false;

  return (
    <div>
      <Center>
        <Title title={t("OUR SELECTION")} exSt="uppercase text-cyan-800" />
        <div>
          <div className="mx-auto  flex items-center  justify-center  ">
            <Button
              isIconOnly
              radius="full"
              className="  p-0 min-w-[30px]  h-[30px] z-10 "
              onClick={() => {
                locale == "ar"
                  ? slider.current.slickNext()
                  : slider.current.slickPrev();
              }}
            >
              {locale == "en" ? <IoIosArrowBack /> : <IoIosArrowForward />}
            </Button>
            <div className="w-[85%] lg:w-full  mx-auto ">
              {/*  @ts-ignore  */}
              <Slider rtl={dir} {...settings} ref={slider} key={2} autoplay >
                {selection
                  ? selection.map((product) => (
                      <div
                        dir={dir ? "rtl" : "ltr"}
                        key={product?._id}
                        className="mx-auto px-4 flex  justify-center"
                      >
                        <GSlider
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
                      </div>
                    ))
                  : Array.from({ length: 4 }).map((_, _index: any) => (
                      <div
                        dir={dir ? "rtl" : "ltr"}
                        key={_index}
                        className="mx-auto px-4 flex justify-center"
                      >
                        <GCardSkeleton />
                      </div>
                    ))}
              </Slider>
            </div>
            <Button
              isIconOnly
              radius="full"
              className="  p-0 min-w-[30px] h-[30px] z-10 "
              onClick={() => {
                locale == "ar"
                  ? slider.current.slickPrev()
                  : slider.current.slickNext();
              }}
            >
              {locale == "en" ? <IoIosArrowForward /> : <IoIosArrowBack />}
            </Button>
          </div>
        </div>
      </Center>
    </div>
  );
}
