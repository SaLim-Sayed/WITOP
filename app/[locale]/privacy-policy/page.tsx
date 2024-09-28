import Policy from "@/components/Policy/Policy";
import React from "react";
import conditions from "@/public/policy/conditions.png";

export default function page() {
  return (
    <Policy
      title="privacy-policy"
      image={conditions}
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
    />
  );
}
