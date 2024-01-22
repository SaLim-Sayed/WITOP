"use server";

import getProductBySectionType from "@/store/actions/getProductBySectionType.module";
import CategorySlider from "../Global/Sliders/CategorySlider";
import SimpleSlider from "../Global/Sliders/MainSlider";
import OnSale from "./Brands/OnSale";
import OurSelection from "./Brands/OurSelection";
import Trending from "./Brands/Trending";
import Brands from "./Favorite/Brands";
import Offers from "./Offers/Offers";
import SwipperPage from "../Global/Sliders/SwipperPage";

export default async function Home() {
  const trends = await getProductBySectionType({ type: "Trending" });
  const selection = await getProductBySectionType({ type: "Our selection" });
  const sale = await getProductBySectionType({ type: "On sale" });
  return (
    <div>
      <SwipperPage/>
      {/* <SimpleSlider /> */}
      <CategorySlider />
      <Brands />
      <Offers />
      <Trending trends={trends?.products} />
      <OnSale sale={sale?.products} />
      <OurSelection selection={selection?.products} />
    </div>
  );
}
