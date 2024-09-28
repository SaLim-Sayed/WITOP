import PrivacyPolicy from "@/components/Policy/PrivacyPolicy";
import React from "react";
import img from "@/public/policy/return.png";

export default function page() {
  return (
    <PrivacyPolicy
      title="return-policy"
      image={img}
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit . "
    />
  );
}
