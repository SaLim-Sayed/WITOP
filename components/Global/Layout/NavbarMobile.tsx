"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";

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
      path: "/",
    },
    {
      name: "Contact Us",
      path: "/",
    },
  ];

  const [selected, setSelected] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const phoneNumber = "+966547448149"; // The phone number for the chat (including country code)
  const message = "Hello, I am interested in your products.";
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
      <div className="flex gap-4">
          <Button
            variant="faded"
            color="primary"
            as={Link}
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61565975191172&mibextid=ZbWKwL"
            isIconOnly
          >
            <FaFacebook size={40} />
          </Button>
          <Button
            variant="faded"
            color="success"
            as={Link}
            target="_blank"
            href="weixin://dl/officialaccounts?scene=108&need_open_webview=1&url=https://m.wechat.com/c/+966547448149"
            isIconOnly
          >
            <IoLogoWechat size={40} />
          </Button>
          <Button
            variant="faded"
            color="success"
            as={Link}
            target="_blank"
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`}
            isIconOnly
          >
            <FaWhatsapp size={40} />
          </Button>
        </div>
    </>
  );
}
