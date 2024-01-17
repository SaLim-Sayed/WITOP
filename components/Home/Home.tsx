"use server";

import CategorySlider from "../Global/Sliders/CategorySlider";
import SimpleSlider from "../Global/Sliders/MainSlider";
import OnSale from "./Brands/OnSale";
import OurSelection from "./Brands/OurSelection";
import Trending from "./Brands/Trending";
import Brands from "./Favorite/Brands";

export default async function Home() {
  return (
    <div>
      <SimpleSlider />
      <CategorySlider />
      <Brands />
      <Trending/>
      <OnSale/>
      <OurSelection/>
    </div>
  );
}
