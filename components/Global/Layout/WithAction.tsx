"use client";

import { cn } from "@/libs/cn";
import { useNavigation } from "@/util/useNavigation";
import { Box, Flex, HStack, useDisclosure } from "@chakra-ui/react";
import { Button, Navbar } from "@nextui-org/react";
import Cookies from "js-cookie";
import { useLocale } from "next-intl";
import Image from "next/legacy/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiMenuAltLeft, BiMenuAltRight, BiWorld } from "react-icons/bi";
import MainDrawer from "../Drawer/MainDrawer";
import TopHeader from "./TopHeader";

export default function WithAction() {
  const router = useRouter();
  const { navigateTo } = useNavigation();
  const locale = useLocale();
  const pathName = usePathname();

  const discloserChakra = useDisclosure();
  const [placement, setPlacement] = useState("right");

  const getDirection = () => {
    Cookies.set("NEXT_LOCALE", locale == "ar" ? "en" : "ar");
    if (pathName == "/ar" || pathName == "/") {
      return locale == "en" ? "/ar" : "en";
    }

    return locale == "en"
      ? `/ar/${pathName}`
      : pathName.replace("/ar/", "/en/");
  };

  const switchLang = () => {
    router.push(getDirection());
  };

  useEffect(() => {
    if (locale === "ar") {
      setPlacement("left");
    }
  }, [locale]);

  return (
    <>
      {/* <TopHeader /> */}

      <Box bg={"#fff"} className="shadow-md " px={4}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <Navbar className=" w-3 z-[400] flex lg:hidden ">
            <Button
              onClick={discloserChakra.onOpen}
              isIconOnly
              size="lg"
              className={cn("font-bold  ", locale === "ar" ? "-mr-6" : "-ml-6")}
              variant="light"
            >
              {locale === "ar" ? (
                <BiMenuAltRight size={40} />
              ) : (
                <BiMenuAltLeft size={40} />
              )}
            </Button>
            <Box className={cn(locale === "ar" ? "-mr-6" : "-ml-6")}>
              <Button
                isIconOnly
                size="lg"
                variant="light"
                className="min-w-[120px]  h-[40px]  md:min-w-[250px]   flex   gap-2"
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
            </Box>

            <MainDrawer
              placement={placement}
              onClose={discloserChakra.onClose}
              isOpen={discloserChakra.isOpen}
            />
          </Navbar>
          <HStack spacing={8} className="hidden lg:flex" alignItems={"center"}>
            <Box>
              <Button
                isIconOnly
                size="lg"
                variant="light"
                className="min-w-[120px] h-[60px]  hidden lg:flex md:min-w-[250px]     gap-2"
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
            </Box>
          </HStack>

          <Flex alignItems={"center"}>
            <Button
              size="lg" 
              variant="flat"
              color="warning"
              className="mx-1 text-black"
              onClick={switchLang}
            >
              <BiWorld />
              {locale == "en" ? " | English" : " | العربية"}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
