import PrivacyPolicy from "@/components/Policy/PrivacyPolicy";
import React from "react";
import img from "@/public/policy/shiping.png";

export default function page() {
  return (
    <PrivacyPolicy
      title="shipping-policy"
      image={img}
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit . "
    />
  );
}
