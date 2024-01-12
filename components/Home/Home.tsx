"use server";

import CategorySlider from "../Global/Sliders/CategorySlider";
import SimpleSlider from "../Global/Sliders/MainSlider";
import Brands from "./Favorite/Brands";
import MainCategories from "./Tooltip/MainCategories";

 
export default async function Home() {

  return (
    <div>
      <MainCategories/>
       <SimpleSlider/>
       <CategorySlider/>
       <Brands/>
    </div>
  );
}
