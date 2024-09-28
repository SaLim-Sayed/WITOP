import React from "react";
import img from "@/public/policy/return.png";
import Policy from "@/components/Policy/Policy";

export default function page() {
  return (
    <Policy
      title="return-policy"
      image={img}
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit . "
    />
  );
}
