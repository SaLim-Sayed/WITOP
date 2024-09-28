import React from "react";
import img from "@/public/policy/shiping.png";
import Policy from "@/components/Policy/Policy";

export default function page() {
  return (
    <Policy
      title="shipping-policy"
      image={img}
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit . "
    />
  );
}
