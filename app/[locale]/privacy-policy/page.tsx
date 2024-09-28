import PrivacyPolicy from "@/components/Policy/PrivacyPolicy";
import React from "react";
import conditions from "@/public/policy/conditions.png";

export default function page() {
  return (
    <PrivacyPolicy
      title="privacy-policy"
      image={conditions}
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
    />
  );
}
