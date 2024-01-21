"use server";

import getFavoriteList from "@/store/actions/getFavoriteList.module";
import NavbarPage from "./Navbar";

export default async function MainNavbar() {
  const favorite = await getFavoriteList();
   
  return <NavbarPage />;
}
