"use client";
import React, { useState } from "react";
import Center from "../Global/Ui/Center";
import ImageGallury from "../Global/Sliders/ImageGallury";
import { BiHeart, BiStar } from "react-icons/bi";
import { Button, Card, CardBody } from "@nextui-org/react";
import { Tabs, Tab } from "@nextui-org/react";
import Title from "../Global/Ui/Title";
import GCard from "../Global/Ui/GCard";
export default function ProductCard() {
  const [count, setCount] = useState<number>(1);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <Center>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <ImageGallury />
        <div className="flex flex-col gap-4">
          <div className="text-3xl relative">Title</div>
          <div className="text-2xl font-bold">
            HELIOCARE 360º SPORT TRANSPARENT STICK SPF50+ 25G
          </div>
          <div className="text-2xl font-bold line-through">SAR 112.09</div>
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">SAR 79.27</div>
            <div className="flex">
              <BiStar size={30} />
              <BiStar size={30} />
              <BiStar size={30} />
              <BiStar size={30} />
              <BiStar size={30} />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center w-[100px] h-12 justify-between border-[2px] gap-2">
              <Button
                variant="light"
                size="sm"
                isIconOnly
                onClick={handleDecrease}
                type="button"
              >
                -
              </Button>
              <div>{count}</div>
              <Button
                variant="light"
                size="sm"
                isIconOnly
                onClick={handleIncrease}
                type="button"
                className=" "
              >
                +
              </Button>
            </div>
            <Button
              radius="sm"
              className="h-12 w-40 bg-black text-white uppercase "
            >
              Add To Cart
            </Button>
            <Button
              isIconOnly
              variant="light"
              radius="sm"
              className="h-12 w-12 "
            >
              {" "}
              <BiHeart size={60} />
            </Button>
          </div>
          <div className="text-xl text-justify">
            Heliocare 360º Sport Transparent Stick SPF50+ is a stick with high
            sun protection for face and body, specially developed for outdoor
            sports practitioners. Practical and easy to apply, it does not need
            to be spread with the hands and is more resistant to water and
            sweat. Ideal for all skin types, even the most sensitive skin.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Tabs variant="underlined" aria-label="Tabs variants">
          <Tab key="photos" title="Features">
             <Card shadow="none">
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="music" title="How to use">
             <Card shadow="none">
              <CardBody>
                outdoor sports practitioners. Practical and easy to apply, it
                does not need to be spread with the hands and is more resistant
                to water and sweat. Ideal for all skin types, even the most
                sensitive skin.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="videos" title="Reviews">
            <Card shadow="none">
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
      <Title title="RELATED PRODUCTS "/>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mx-4 gap-4">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <GCard
                  key={index}
                  id={2}
                  price={100}
                  title="title"
                  desc="desc"
                  img="/brands/1.png"
                />
              ))}
          </div>
    </Center>
  );
}
