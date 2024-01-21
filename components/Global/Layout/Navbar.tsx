"use client";
import React, { useEffect, useMemo } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  AutocompleteItem,
  Autocomplete,
  Badge,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Card,
} from "@nextui-org/react";
import Image from "next/legacy/image";
import {
  BiHeart,
  BiMenuAltLeft,
  BiMenuAltRight,
  BiSearch,
  BiUser,
} from "react-icons/bi";
import { BsCart, BsHeartFill } from "react-icons/bs";
import MainDrawer from "../Drawer/MainDrawer";
import { Spinner, useDisclosure } from "@chakra-ui/react";
import TopHeader from "./TopHeader";
import { cn } from "@/libs/cn";
import searchProduct from "@/store/actions/searchProduct.module";
import CartSlider from "../Drawer/Slider-Cart";
import { Product } from "@/types/product";
import { cartStore } from "@/store/futures/cartStore";
import ClientHydration from "../Providers/ClientHydration";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";
import { FaSignLanguage } from "react-icons/fa";
import Center from "../Ui/Center";
import { BiWorld } from "react-icons/bi";
import { useLocale, useTranslations } from "next-intl";
import FavoriteItem from "../Drawer/FavoriteItem";
import { showToast } from "../Ui/Toast";
import axios from "axios";
import getFavoriteList from "@/store/actions/getFavoriteList.module";
import useFavoriteStore from "@/store/futures/useFavoriteStore";
export default function NavbarPage() {
  const { CartAmount } = cartStore();
  const discloserChakra = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearch, setIsSearch] = React.useState(false);
  const translate = useTranslations("Globals");

  const router = useRouter();
  const locale = useLocale();
  const pathName = usePathname();

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
  const [cartSliderIsOpen, setCartSliderIsOpen] = React.useState(false);
  const [products, setProducts] = React.useState<any>();
  const [searchTxt, setSearchTxt] = React.useState("");
  const searchData = async () => {
    const data = await searchProduct({ txt: searchTxt });
    setProducts(data?.products);
    console.log(products);
  };

  const [favNum, setFavNum] = React.useState<number>(0);
  const showSuccessToast = (message?: string) =>
    showToast({ status: "Success", type: "success", toastMessage: message });
  const showErrorToast = (message?: string) =>
    showToast({ status: "Error", type: "error", toastMessage: message });

  const { isFavoriteOpen, setFavoriteIsOpen } = useFavoriteStore();
  const [favorite, setFavorite] = React.useState<Product[]>();
  const removeFavoriteHandler = async (id: any) => {
    try {
      const data = await axios.put(
        `https://maro-cares.onrender.com/user/removeFromFavorite/${id}`,
        {},
        {
          headers: {
            language: locale || "en",
            authrization:
              "maroTKeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTNlZWNkMjAwZTEzNDM0Mjg3M2M4YiIsImlhdCI6MTcwNTI0MjUyN30.RbBrOw_DzBBpsQsTAAMv34xYDKyjiIp61vcgkQVQfLw",
          },
        }
      );
      setFavoriteIsOpen(!isFavoriteOpen);
      showSuccessToast("item deleted Successfuly");
    } catch (err: any) {
      console.log(err);
      showErrorToast("Something Went Wrong , Try Again..");
    }
  };

  const getFavData = async () => {
    const list = await getFavoriteList();
    setFavorite(list?.favoriteList);
    setFavNum(list?.numberOfItem);
  };

  useEffect(() => {
    if (isFavoriteOpen===true||isFavoriteOpen===false) {
      getFavData();
    }
  }, [isFavoriteOpen]);

  useEffect(() => {
    getFavData();
  }, []);
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
        <NavbarContent className="lg:hidden flex  " justify="start">
          <Button
            onClick={discloserChakra.onOpen}
            isIconOnly
            size="lg"
            className={cn("font-bold  ", locale === "ar" ? "-mr-12" : "-ml-12")}
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
              className="min-w-[100px]  p-0   flex gap-2"
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
              className="max-w-[200px] w-full h-16 p-0  flex justify-between gap-2"
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
        <NavbarContent className="lg:flex  hidden   gap-4" justify="center">
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
          <NavbarItem
            className={cn(
              "flex items-center ",
              locale === "ar" ? "-mr-2 lg:ml-8" : "-ml-2 lg:mr-8"
            )}
          >
            <Button
              size="sm"
              className="font-bold  md:hidden inline"
              variant="light"
              onClick={() => setIsSearch(!isSearch)}
              isIconOnly
            >
              <BiSearch size={20} />
            </Button>
            <Popover placement="bottom">
              <PopoverTrigger>
                <Button
                  onClick={() => setFavoriteIsOpen(!isFavoriteOpen)}
                  size="sm"
                  isIconOnly
                  className="font-bold "
                  variant="light"
                >
                  <ClientHydration
                    LoaderComponent={
                      <Badge content={<Spinner size="xs" />} variant="solid">
                        <BiHeart size={20} />
                      </Badge>
                    }
                  >
                    <Badge
                      content={favNum || 0}
                      color="warning"
                      variant="solid"
                    >
                      <BiHeart size={20} />
                    </Badge>
                  </ClientHydration>
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex flex-col  gap-2">
                  {favorite?.map((product) => (
                    <Card
                      onClick={() =>
                        router.push(
                          `/product/${product?.category}/${product?._id}`
                        )
                      }
                      isPressable
                      key={product._id}
                    >
                      <div className="flex gap-4  bg-slate-100/50 w-full p-2 ">
                        <Image
                          src={product?.images[0]}
                          width={100}
                          height={50}
                          alt={product?.productName}
                        />

                        <div className="flex flex-col items-start ">
                          <div className=" capitalize text-xl text-cyan-700">
                            {product?.productName || " "}
                          </div>
                          <div className="text-lg font-bold flex items-center gap-8   justify-between">
                            <p>{product?.price || " "} $</p>
                            <Button
                              variant="light"
                              size="sm"
                              isIconOnly
                              onClick={() => {
                                removeFavoriteHandler(product?._id);
                              }}
                            >
                              <BsHeartFill size={10} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            <Button
              size="sm"
              onClick={() => setCartSliderIsOpen((open) => !open)}
              isIconOnly
              className="font-bold "
              variant="light"
            >
              <ClientHydration
                LoaderComponent={
                  <Badge content={<Spinner size="xs" />} variant="solid">
                    <BsCart size={20} />
                  </Badge>
                }
              >
                <Badge
                  content={CartAmount || 0}
                  color="warning"
                  variant="solid"
                >
                  <BsCart size={20} />
                </Badge>
              </ClientHydration>
            </Button>
            <Button
              size="sm"
              isIconOnly
              className="font-bold  flex justify-center"
              variant="light"
            >
              <BiUser size={20} />
            </Button>
            <Button
              isIconOnly
              variant="flat"
              color="success"
              onClick={switchLang}
            >
              <BiWorld />
              {locale == "en" ? " | En" : " | ع"}
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      {isSearch && (
        <div className="flex lg:hidden">
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
