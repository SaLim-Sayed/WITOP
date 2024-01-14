import React from "react";
import { Image, Pagination } from "@nextui-org/react";
import Center from "../Global/Ui/Center";
import GCard from "../Global/Ui/GCard";

import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
export default function Product() {
  return (
    <div>
      <Center>
        <div className="flex flex-col gap-8">
          <div className=" text-3xl font-bold">Title</div>
          <div>
            Avène presents a complete line of daily and specific care that can
            suit you in several categories. Discover here all the products for
            anti-aging, skin care, body care, sunscreen, make-up, and Men. All
            products from Avène contain thermal water with soothing and
            anti-irritating properties, and are suitable for the whole family,
            including infants and children. You can choose between ranges like
            Avène Physiolift, Avène Hydrance, Avéne Cleanance, Avéne Cicalfate
            or Trixera and many more.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mx-4 gap-4">
            {Array(12)
              .fill(0)
              .map((_, index) => (
                <GCard
                  key={index}
                  price={100}
                  title="title"
                  desc="desc"
                  img="/brands/1.png"
                />
              ))}
          </div>
          <div className="flex justify-center">
            <Pagination showControls total={10} initialPage={1} />
          </div>
        </div>
      </Center>
    </div>
  );
}
