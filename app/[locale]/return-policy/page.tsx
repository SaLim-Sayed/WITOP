import React from "react";
import img from "@/public/policy/return.png";
import Policy from "@/components/Policy/Policy";
import ReturnPage from "@/components/Policy/ReturnPage";

export default function page() {
  return (
    <Policy
      title="return-policy"
      image={img}
      desc={<ReturnPage/>}
    />
  );
}
