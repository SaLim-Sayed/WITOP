import Layer from "@/components/Global/Layout/Layer";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return(
  <>
    <Layer  title={'سلة المشتريات'}/>
    {children}
  </>)
}