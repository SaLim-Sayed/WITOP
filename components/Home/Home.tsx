"use server";

import getProductBySectionType from "@/store/actions/getProductBySectionType.module";
import CategorySlider from "../Global/Sliders/CategorySlider";
import SwipperPage from "../Global/Sliders/SwipperPage";
import GSliderSlot from "./Brands/GSliderSlot";
import Brands from "./Favorite/Brands";
import Offers from "./Offers/Offers";
import WelcomeLayer from "./WelcomeLayer/WelcomeLayer";
import Feedbacks from "./Feedbacks/Feedbacks";
import Hero from "./Hero";
import Swipper from "../Global/Swipper";
import { productCategories } from "./data/data";
import Title from "../Global/Ui/Title";

export default async function Home() {
  const trends = await getProductBySectionType({ type: "Trending" });
  const selection = await getProductBySectionType({ type: "Our Selection" });
  const sale = await getProductBySectionType({ type: "On Sale" });

  return (
    <div className="w-full">
      <WelcomeLayer />

      {/* <Hero/> */}
      <SwipperPage />
      <Title title="Categories" />

     <div className="flex justify-center w-full">
     <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 justify-center items-center gap-4 h-full m-4 w-full">
        {productCategories.map((category, index) => (
          <div key={index} className=" gap-4  w-[360px] md:w-full">
            <Swipper title={category?.title} images={category?.images} />
          </div>
        ))}
      </div>
     </div>

      {/* <SimpleSlider /> */}
      {/* <CategorySlider /> */}
      {/* <Offers /> */}
      {/* <GSliderSlot title={"TRENDING"} data={trends?.products} /> */}
      {/* <Brands /> */}
      {/* <Offers /> */}
      {/* <GSliderSlot title={"ON SALE"} data={sale?.products} /> */}
      {/* <Offers /> */}
      {/* <GSliderSlot title={"OUR SELECTION"} data={selection?.products} /> */}
    </div>
  );
}
