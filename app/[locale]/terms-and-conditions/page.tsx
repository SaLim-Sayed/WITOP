import Policy from "@/components/Policy/Policy";
import React from "react";
import img from "@/public/policy/conditions.png";
import TermsPage from "@/components/Policy/TermsPage";

export default function page() {
  return (
    <Policy
      title="terms-and-conditions"
      image={img}
      desc={<TermsPage/>}
    />
  );
}
