import Policy from "@/components/Policy/Policy";
import React from "react";
import conditions from "@/public/policy/privacy.png";
import PrivacyPage from "@/components/Policy/PrivacyPage";

export default function page() {
  return (
    <Policy title="privacy-policy" image={conditions} desc={<PrivacyPage/>} />
  );
}
