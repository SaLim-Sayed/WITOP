
"use client"
import React from 'react'
import Center from '../Global/Ui/Center'
import Layer from '../Global/Ui/Layer'
import { useTranslations } from 'next-intl';

export default function PrivacyPolicy() {
    const t = useTranslations("Policy");
  return (
    <Center>
      <div className="mb-8">
        <Layer title={t("privacy-policy")} />
        <h1 className="text-3xl font-bold">{t("privacy-policy")}</h1>
      </div>
    </Center>
  );
}
