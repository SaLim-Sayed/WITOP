"use client"
import { BsArrowUpShort } from "react-icons/bs";
import ScrollToTop from "react-scroll-to-top";

const ToTop = ( ) => {
  return  <>
  <ScrollToTop
  smooth
  color="#000"
  component={<BsArrowUpShort size={30} className=" text-slate-900 font-thin "/>}
  style={{
    backgroundColor: "#bbb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    zIndex:"50"
    
  }}
/>
  </>
}

export default ToTop