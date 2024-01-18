"use client";
import React, { useEffect } from "react";
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
import {
  BiHeart,
  BiMenuAltLeft,
  BiMenuAltRight,
  BiSearch,
  BiUser,
} from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { useLocale, useTranslations } from "next-intl";
import MainDrawer from "../Drawer/MainDrawer";
import { useDisclosure } from "@chakra-ui/react";
import TopHeader from "./TopHeader";
import { cn } from "@/libs/cn";

import CartSlider from "../Drawer/Slider-Cart";
export default function MainNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearch, setIsSearch] = React.useState(false);
  const translate = useTranslations("Globals");
  const locale = useLocale();
  const [cartSliderIsOpen, setCartSliderIsOpen] = React.useState(false);
  useEffect(() => {
    if (locale === "ar") {
      setPlacement("left");
    }
  }, [locale]);
  return (
    <div className="flex flex-col fixed top-0 z-50 w-full shadow-md">
      <TopHeader />
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        classNames={{
          wrapper: "w-full",
        }}
        isBordered
        className=" bg-white  h-24"
      >
        {" "}
        <CartSlider
          open={cartSliderIsOpen}
          setCartSliderIsOpen={setCartSliderIsOpen}
        />
        <MainDrawer placement={placement} onClose={onClose} isOpen={isOpen} />
        <NavbarContent className="sm:hidden" justify="start">
          <Button
            onClick={onOpen}
            isIconOnly
            size="lg"
            className={cn(
              "font-bold w-6 h-10 sm:hidden",
              locale === "ar" ? "-mr-8" : "-ml-8"
            )}
            variant="light"
          >
            {locale === "ar" ? (
              <BiMenuAltRight size={40} />
            ) : (
              <BiMenuAltLeft size={40} />
            )}
          </Button>
        </NavbarContent>
        <NavbarContent className="sm:hidden pr-3  " justify="center">
          <NavbarBrand>
            <Button
              isIconOnly
              size="lg"
              variant="light"
              className="min-w-[100px] p-0   flex gap-2"
            >
              <Link href="/" className="font-bold text-xl text-[#00b5bc]">
                <Image
                  src="/logo1.png"
                  alt="logo"
                  className=" p-0 m-0"
                  layout="fill"
                />
              </Link>
            </Button>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent
          className={cn(
            "hidden sm:flex gap-4 ",
            locale === "ar" ? "mr-0  lg:-mr-[180px] " : "ml-0  lg:-ml-[180px] "
          )}
          justify="start"
        >
          <NavbarBrand>
            <Button
              isIconOnly
              size="lg"
              variant="light"
              className="min-w-[110px] p-0  flex justify-between gap-2"
            >
              <Link href="/" className="font-bold text-3xl text-[#00b5bc]">
                {" "}
                <Image
                  src="/logo1.png"
                  alt="logo"
                  className=" p-0 m-0"
                  layout="fill"
                />
              </Link>
            </Button>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Input
              label={translate("Navbar/Search")}
              radius="lg"
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "w-full lg:w-96",
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
        <NavbarContent
          className={cn(
            "mr-0   ",
            locale === "ar"
              ? "ml-2 lg:-ml-[180px]   2xl:-ml-[240px]"
              : " mr-2  lg:-mr-[180px] 2xl:-mr-[240px]"
          )}
          justify="end"
        >
          <NavbarItem>
            <Button
              className="font-bold w-6 h-10 md:hidden inline"
              variant="light"
              size="lg"
              onClick={() => setIsSearch(!isSearch)}
              isIconOnly
            >
              <BiSearch size={30} />
            </Button>
            <Button
              isIconOnly
              size="lg"
              className="font-bold w-6 h-10"
              variant="light"
            >
              <BiHeart size={30} />
            </Button>
            <Button
              onClick={() => setCartSliderIsOpen((open) => !open)}
              isIconOnly
              size="lg"
              className="font-bold w-6 h-10 mx-4"
              variant="light"
            >
              <BsCart size={30} />
            </Button>
            <Button
              isIconOnly
              size="lg"
              className="font-bold w-6 h-10 hidden md:inline"
              variant="light"
            >
              <BiUser size={30} />
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      {isSearch && (
        <div className="flex md:hidden">
          <Input
            label={translate("Navbar/Search")}
            radius="lg"
            className="flex md:hidden"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "w-full lg:w-96",

                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
            }}
            color="default"
            type="search"
            endContent={
              <Button isIconOnly>
                <BiSearch size={20} />
              </Button>
            }
          />
        </div>
      )}
    </div>
  );
}
