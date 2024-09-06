"use server";

import getProductBySectionType from "@/store/actions/getProductBySectionType.module";
import CategorySlider from "../Global/Sliders/CategorySlider";
import SwipperPage from "../Global/Sliders/SwipperPage";
import GSliderSlot from "./Brands/GSliderSlot";
import Brands from "./Favorite/Brands";
import Offers from "./Offers/Offers";
import WelcomeLayer from "./WelcomeLayer/WelcomeLayer";
import Feedbacks from "./Feedbacks/Feedbacks";

export default async function Home() {
  const trends = await getProductBySectionType({ type: "Trending" });
  const selection = await getProductBySectionType({ type: "Our Selection" });
  const sale = await getProductBySectionType({ type: "On Sale" });

  return (
    <div>
      <SwipperPage />
      {/* <SimpleSlider /> */}
      <CategorySlider />
      <Offers />
      <GSliderSlot title={"TRENDING"} data={trends?.products} />
      <Brands />

      <Offers />
      <GSliderSlot title={"ON SALE"} data={sale?.products} />
      <Offers />
      <GSliderSlot title={"OUR SELECTION"} data={selection?.products} />
      <Feedbacks />

      <WelcomeLayer />
    </div>
  );
}
