"use client";
import getProductByBrand from "@/store/actions/getProductByBrand.module";
import { Product as ProductType } from "@/types/product";
import { Button, Pagination } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import GCardSkeleton from "../Global/Loaders/GCardSkeleton";
import Center from "../Global/Ui/Center";
import GCard from "../Global/Ui/GCard";
import Headings from "../Global/Ui/Heading";
import Layer from "../Global/Ui/Layer";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

export default function Brand() {
  const { type } = useParams();
  const t = useTranslations("Globals");

  const locale = useLocale();
  const dir = locale == "ar" ? "rtl" : "ltr";
  const [products, setProducts] = useState<ProductType[]>();
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    const data = await getProductByBrand({ type: type, page });
    setProducts(data?.products);
    setTotal(data?.totalPage);
    setTimeout(() => {
      setLoading(false);
    }, 500); // Set loading to false after 1000ms
  };
  useEffect(() => {
    if (page) getData();
  }, [page]);
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
            {loading ? ( // Show skeleton while loading
              Array.from({ length: 4 }).map((_, index: any) => (
                <div key={index}>
                  <GCardSkeleton />
                </div>
              ))
            ) : products ? (
              products.map((product) => (
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
            ) : (
              // Show "No Data" message if no products available
              <div className="flex flex-col gap-5 w-full justify-center items-center h-full">
                <div>{t("noData")}</div>
                <Button
                  as={Link}
                  href="/"
                  variant="bordered"
                  color="secondary"
                  dir={"rtl"}
                  endContent={<BiArrowBack />}
                >
                  {t("Back")}
                </Button>
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <Pagination
              dir="ltr"
              showControls
              total={total}
              initialPage={1}
              onChange={setPage}
              as={Link}
              href={"#top"}
            />
          </div>
        </div>
      </Center>
    </div>
  );
}
