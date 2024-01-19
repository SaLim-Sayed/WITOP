"use client";
import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  AutocompleteItem,
  Autocomplete,
  Badge,
  Spinner,
  Card,
} from "@nextui-org/react";
import Link from "next/link";
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
import searchProduct from "@/store/actions/searchProduct.module";
import CartSlider from "../Drawer/Slider-Cart";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import { cartStore } from "@/store/futures/cartStore";
import ClientHydration from "../Providers/ClientHydration";
export default function MainNavbar() {
  const { CartAmount } = cartStore();
  const discloserChakra = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearch, setIsSearch] = React.useState(false);
  const translate = useTranslations("Globals");
  const locale = useLocale();
  const router = useRouter();
  const [cartSliderIsOpen, setCartSliderIsOpen] = React.useState(false);
  const [products, setProducts] = React.useState<any>();
  const [searchTxt, setSearchTxt] = React.useState("");
  const searchData = async () => {
    const data = await searchProduct({ txt: searchTxt });
    setProducts(data?.products);
    console.log(products);
  };
  useEffect(() => {
    if (searchTxt) {
      searchData();
    } else {
      setProducts([""]);
    }
  }, [searchTxt]);
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
        <CartSlider
          open={cartSliderIsOpen}
          setCartSliderIsOpen={setCartSliderIsOpen}
        />
        <MainDrawer
          placement={placement}
          onClose={discloserChakra.onClose}
          isOpen={discloserChakra.isOpen}
        />
        <NavbarContent className="sm:hidden" justify="start">
          <Button
            onClick={discloserChakra.onOpen}
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
            <Autocomplete
              label={translate("Navbar/Search")}
              variant="bordered"
              onInputChange={(value) => {
                setSearchTxt(value);
              }}
              size="lg"
              className="sm:flex-1 rounded-[8px] w-[600px]"
              inputProps={{
                classNames: {
                  inputWrapper: "bg-lightColor-900",
                },
              }}
            >
              {products?.map((item: Product) => (
                <AutocompleteItem
                  textValue={item?.productName || "undefined"}
                  value={item?.productName}
                  key={item?._id}
                  variant="light"
                  className=" flex gap-4 z-[2]"
                  onClick={() =>
                    router.push(`/product/${item?.category}/${item?._id}`)
                  }
                >
                  <div className="flex gap-4  bg-slate-100/50 w-full p-2 ">
                    {item && (
                      <>
                        <Image
                          src={item?.images[0]}
                          width={100}
                          height={50}
                          alt={item?.productName}
                        />

                        <div className="flex flex-col ">
                          <div className=" capitalize text-xl text-cyan-700">
                            {item?.productName || " "}
                          </div>
                          <div className="text-lg font-bold">
                            {item?.price || " "} $
                          </div>
                          <div className="  text-lg line-through">
                            {item?.priceBeforeDiscount || " "} $
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </AutocompleteItem>
              ))}
            </Autocomplete>
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
              className="font-bold w-6 h-12 mx-4"
              variant="light"
            >
              <ClientHydration
                LoaderComponent={
                  <Badge content={<Spinner size="sm" />} variant="flat">
                    <BsCart size={30} />
                  </Badge>
                }
              >
                <Badge
                  content={CartAmount || 0}
                  color="warning"
                  variant="solid"
                >
                  <BsCart size={30} />
                </Badge>
              </ClientHydration>
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
          <Autocomplete
            label={translate("Navbar/Search")}
            variant="faded"
            onInputChange={(value) => {
              setSearchTxt(value);
            }}
            size="lg"
            className="sm:flex-1 rounded-[8px] z-50 "
            inputProps={{
              classNames: {
                inputWrapper: "bg-white",
              },
            }}
          >
            {products?.map((item: Product) => (
              <AutocompleteItem
                textValue={item?.productName || "undefined"}
                value={item?.productName}
                key={item?._id}
                variant="light"
                className=" flex gap-4 z-[2]"
                onClick={() =>
                  router.push(`/product/${item?.category}/${item?._id}`)
                }
              >
                <div className="flex gap-4  bg-slate-100/50 w-full p-2 ">
                  {item && (
                    <>
                      <Image
                        src={item?.images[0]}
                        width={100}
                        height={50}
                        alt={item?.productName}
                      />

                      <div className="flex flex-col ">
                        <div className=" capitalize text-xl text-cyan-700">
                          {item?.productName || " "}
                        </div>
                        <div className="text-lg font-bold">
                          {item?.price || " "} $
                        </div>
                        <div className="  text-lg line-through">
                          {item?.priceBeforeDiscount || " "} $
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </AutocompleteItem>
            ))}
          </Autocomplete>
        </div>
      )}
    </div>
  );
}
