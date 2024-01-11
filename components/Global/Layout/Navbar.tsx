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
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/libs/cn";
import { BiHeart, BiSearch, BiUser } from "react-icons/bi";
import { BsCart, BsShop } from "react-icons/bs";

export default function MainNavbar() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isAcive, setIsAcive] = React.useState(1);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Button size="lg" variant="light" className="w-40 h-10 flex gap-2">
            <p className="font-bold text-xl text-[#00b5bc]">Ecommerce</p>
          </Button>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Button
            size="lg"
            variant="light"
            className="w-60 h-10 flex justify-between gap-2"
          >
            <div className="font-bold text-3xl text-[#00b5bc]">Ecommerce</div>
          </Button>
        </NavbarBrand>

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
            className="font-bold w-6 h-10 hidden md:block"
            variant="light"
          >
            <BiUser size={40} />
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {links.map((item) => (
          <>
            <NavbarMenuItem key={item.id}>
              <Button
                onClick={() => setIsAcive(item.id)}
                size="lg"
                className="w-full flex justify-start left-0"
                as={Link}
                href={item.url}
                color={item.id === isAcive ? "warning" : "default"}
              >
                <Link
                  passHref
                  className="  flex gap-2 font-bold"
                  href={item.url}
                >
                  {item.icon} {item.title}
                </Link>
              </Button>
            </NavbarMenuItem>
          </>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
