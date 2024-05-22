"use server";
 
import WithAction from "./WithAction";

export default async function MainNavbar() {
  return (
  <div className="sticky top-0 z-50">
   {/* <NavbarPage /> */}
    <WithAction/> 
  </div>
  )
}
