import Center from "@/components/Global/Ui/Center";
import Title from "@/components/Global/Ui/Title";
import { Button, Divider } from "@nextui-org/react";
import { brands, subBrands } from "./brands.module";
import Image from "next/image";

interface IProps {}

const Brands = ({}: IProps) => {
  return (
    <Center>
      <Title title="Our Favorite Brands" subTitle="SEE ALL" />
      <div className="flex justify-between mb-16">
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
            <Button size="lg">Shop Now</Button>
          </div>
        ))}
      </div>
      <div className="flex justify-between mb-16 gap-4">
        {subBrands?.map((brand) => (
          <div
            key={brand.id}
            className="flex flex-col gap-4 justify-center items-start"
          >
            <div className="h-[200px]">
              <Image
                src={brand.img}
                alt="1"
                width={400}
                height={400}
                className=" cursor-pointer h-48"
              />
            </div>
            <p className=" font-bold">{brand.title}</p>
            <Divider />
            <p>{brand.desc}</p>
            <Button size="lg" radius="sm">Shop Now</Button>
          </div>
        ))}
      </div>
       <div className=" mb-10 mx-auto">
       <Image
                src="/brands/offer.jpg"
                alt="1"
                width={1500}
                height={400}
                className=" cursor-pointer "
              /> 
       </div>
    </Center>
  );
};

export default Brands;
