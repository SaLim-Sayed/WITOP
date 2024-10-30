"use client";
import { Button } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { NavbarMenuItem } from "@nextui-org/react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { cn } from "@/libs/cn";

export default function NavbarMobile({
  setIsMenuOpen,
  onClose,
}: {
  setIsMenuOpen?: any;
  onClose: () => void;
}) {
  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
  ];

  const [selected, setSelected] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  return (
    <>
      {/* {useCategory.map((category, index) => (
        <NavbarMenuItem key={index}>
          <Button
            className="w-full mb-2"
            as={Link}
            href={`/product/${category.category}`}
            variant="bordered"
          >
            {category.category}
          </Button>
        </NavbarMenuItem>
      ))} */}
      {routes.map((item, index) => (
        <Button
          size="md"
          onClick={() => {
 
            onClose();
          }}
          key={index}
          className={cn(
            "w-full mb-2 text-lg",
           
          )}
          as={Link}
          href={`/product/${item.path}`}
        >
          {item.name}
        </Button>
      ))}
    </>
  );
}
