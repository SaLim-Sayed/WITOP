import PrivacyPolicy from "@/components/Policy/PrivacyPolicy";
import React from "react";
import img from "@/public/policy/conditions.png";

export default function page() {
  return (
    <PrivacyPolicy
      title="terms-and-conditions"
      image={img}
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
    />
  );
}
