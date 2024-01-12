"use server";

import CategorySlider from "../Global/Sliders/CategorySlider";
import SimpleSlider from "../Global/Sliders/MainSlider";
import Brands from "./Favorite/Brands";

export default async function Home() {
  return (
    <div>
      <SimpleSlider />
      <CategorySlider />
      <Brands />
    </div>
  );
}
