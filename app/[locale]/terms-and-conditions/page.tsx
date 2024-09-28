import Policy from "@/components/Policy/Policy";
import React from "react";
import img from "@/public/policy/conditions.png";

export default function page() {
  return (
    <Policy
      title="terms-and-conditions"
      image={img}
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
    />
  );
}
