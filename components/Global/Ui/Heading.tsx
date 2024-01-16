"use client";
import React from "react";
import {Breadcrumbs, BreadcrumbItem, Button} from "@nextui-org/react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import * as enData from '@/messages/en.json';
import { getKeyByValue } from "./value";

export default function Headings() {
    const t=useTranslations("Globals")
    const trans=useTranslations("Categories")
    const {category}=useParams()
    const cats:string | string[] =category
    const categoryName = Array.isArray(cats) ? cats[0] : cats;
    const catKey = getKeyByValue(enData, decodeURIComponent(categoryName));
    const cat = catKey ? trans(catKey.replace("Categories/", "")) : "";
  
  return (
    <Breadcrumbs>
          <BreadcrumbItem>
        <Button as={Link} href="/" variant="light">{t("Home")}</Button>
          </BreadcrumbItem>
          
          <BreadcrumbItem>
            <Button variant="light" color="warning">
              {cat}
            </Button>
          </BreadcrumbItem>
        </Breadcrumbs>
  );
}
