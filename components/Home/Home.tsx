"use server";

import SwipperPage from "../Global/Sliders/SwipperPage";
import Swipper from "../Global/Swipper";
import Title from "../Global/Ui/Title";
import { productCategories } from "./data/data";
import WelcomeLayer from "./WelcomeLayer/WelcomeLayer";

export default async function Home() { 
  return (
    <div className="w-full">
      <WelcomeLayer />

      {/* <Hero/> */}
      <SwipperPage />
      <Title title="Categories" />

     <div className="flex justify-center w-full">
     <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 justify-center items-center gap-4 h-full m-4 w-full">
        {productCategories.map((category, index) => (
          <div key={index} className=" gap-4  max-w-[360px] max-h-[400px]">
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
