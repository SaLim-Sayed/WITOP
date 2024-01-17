"use client";
import Center from "@/components/Global/Ui/Center";
import Title from "@/components/Global/Ui/Title";
import { Button, Divider, Image } from "@nextui-org/react";
import { brands, subBrands } from "./brands.module";
import Link from "next/link";
import { BiArrowToRight } from "react-icons/bi";
import { useTranslations } from "next-intl";

interface IProps {}

const Brands = ({}: IProps) => {
  const translate = useTranslations("Buttons");

  return (
    <Center>
      <Title
        title="Our Favorite Brands"
        subTitle={
          <Link href="/brands" className=" flex items-center text-[#00b5bc]">
            See All <BiArrowToRight />{" "}
          </Link>
        }
      />
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between mb-16">
        {brands?.map((brand) => (
          <div
            key={brand.id}
            className="flex flex-col gap-4 justify-center items-center"
          >
            <div>
              <Image
                src={brand.img}
                alt="1"
                width={200}
                height={300}
                className=" cursor-pointer"
              />
            </div>
            <p>{brand.title}</p>
            <Button size="lg" radius="sm" as={Link} href={"/product"}>
              {translate("Shop")}
            </Button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto justify-center items-center  justify-items-center    mb-16 gap-8 md:gap-4">
        {subBrands?.map((brand) => (
          <div
            key={brand.id}
            className="flex flex-col gap-4 justify-between justify-items-between  items-start max-w-[500px]"
          >
            <div className="h-[200px]">
              <Image
                src={brand.img}
                alt="1"
                width={1000}
                height={1000}
                className=" cursor-pointer "
              />
            </div>
            <p className=" font-bold">{brand.title}</p>
            <Divider />
            <p>{brand.desc}</p>
            <Button size="lg" radius="sm" as={Link} href={"/product"}>
              Shop Now
            </Button>
          </div>
        ))}
      </div>
      <div className=" w-[100%] flex justify-center mb-10  ">
        <Image
          radius="none"
          src="/brands/offer.jpg"
          alt="1"
          width={"100%"}
          height={1000}
          className=" hidden md:flex cursor-pointer h-64  w-full "
        />
        <Image
          radius="none"
          src="/brands/offersm.png"
          alt="1"
          width={1000}
          height={1000}
          className=" flex md:hidden cursor-pointer   w-full "
        />
      </div>
    </Center>
  );
};

export default Brands;
