"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Input,
} from "@nextui-org/react";
import Link from "next/link";
import { links } from "./links";
import Image from "next/legacy/image";

import { usePathname } from "next/navigation";
import { cn } from "@/libs/cn";
import { BiHeart, BiSearch, BiUser } from "react-icons/bi";
import { BsCart, BsShop } from "react-icons/bs";

export default function MainNavbar() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isAcive, setIsAcive] = React.useState(1);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered className=" h-24">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Button
            isIconOnly
            size="lg"
            variant="light"
            className="min-w-[90px] p-0 min-h-[90px]  flex gap-2"
          >
            <Link href="/" className="font-bold text-xl text-[#00b5bc]">
              <Image src="/logo1.png" alt="logo" className=" p-0 m-0" layout="fill"/>
            </Link>
          </Button>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
      <NavbarBrand>
          <Button
            isIconOnly
            size="lg"
            variant="light"
            className="min-w-[90px] p-0 min-h-[90px]  flex justify-between gap-2"
          >
            <Link href="/" className="font-bold text-3xl text-[#00b5bc]">
              {" "}
              <Image src="/logo1.png" alt="logo" className=" p-0 m-0" layout="fill"/>
            </Link>
          </Button>
        </NavbarBrand>
        </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
       

        <NavbarItem>
          <Input
            label="Search"
            radius="lg"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "w-96",
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
            }}
            color="default"
            variant="bordered"
            type="search"
            endContent={
              <Button isIconOnly>
                <BiSearch size={20} />
              </Button>
            }
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            isIconOnly
            size="lg"
            className="font-bold w-6 h-10"
            variant="light"
          >
            <BiHeart size={40} />
          </Button>
          <Button
            isIconOnly
            size="lg"
            className="font-bold w-6 h-10 mx-4"
            variant="light"
          >
            <BsCart size={40} />
          </Button>
          <Button
            isIconOnly
            size="lg"
            className="font-bold w-6 h-10 hidden md:inline"
            variant="light"
          >
            <BiUser size={40} />
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Button size="lg" className="w-full flex justify-start left-0 mt-10">
            <Link
              passHref
              className="  flex items-center gap-2 font-bold"
              href={"#"}
            >
              <BiUser size={40} /> Login
            </Link>
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
