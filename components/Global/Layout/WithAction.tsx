"use client";

import {
  Box,
  Flex,
  HStack,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import Image from "next/legacy/image";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdAddCircleOutline } from "react-icons/md";
import React, { useEffect, useState } from "react";
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
  Avatar,
  AvatarIcon,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
} from "@nextui-org/react";
import {
  BiHeart,
  BiLogIn,
  BiLogInCircle,
  BiMenuAltLeft,
  BiMenuAltRight,
  BiSearch,
  BiSolidLogIn,
  BiUser,
} from "react-icons/bi";
import { BsCart, BsHeartFill } from "react-icons/bs";
import MainDrawer from "../Drawer/MainDrawer";
import { Spinner } from "@chakra-ui/react";
import TopHeader from "./TopHeader";
import { cn } from "@/libs/cn";
import searchProduct from "@/store/actions/searchProduct.module";
import CartSlider from "../Drawer/Slider-Cart";
import { Product } from "@/types/product";
import { cartStore } from "@/store/futures/cartStore";
import ClientHydration from "../Providers/ClientHydration";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { BiWorld } from "react-icons/bi";
import { useLocale, useTranslations } from "next-intl";
import { showToast } from "../Ui/Toast";
import axios from "axios";
import getFavoriteList from "@/store/actions/getFavoriteList.module";
import useFavoriteStore from "@/store/futures/useFavoriteStore";
import { axiosInstance } from "@/util/axiosConfig";
import Cookie from "js-cookie";
interface Props {
  children: React.ReactNode;
}

export default function WithAction() {
  const router = useRouter();
  const locale = useLocale();
  const pathName = usePathname();
  const translate = useTranslations("Globals");

  const { CartAmount } = cartStore();
  const discloserChakra = useDisclosure();
  const [placement, setPlacement] = useState("right");
  const [favNum, setFavNum] = useState<number>(0);
  const [isSearch, setIsSearch] = useState(false);

  const token = Cookies.get("token");

  const handleLogout = async () => {
    Cookies.set("token", "");
    window.location.reload();
  };
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
  const [cartSliderIsOpen, setCartSliderIsOpen] = useState(false);
  const [products, setProducts] = useState<any>();
  const [searchTxt, setSearchTxt] = useState("");
  const { isFavoriteOpen, setFavoriteIsOpen } = useFavoriteStore();
  const [favorite, setFavorite] = useState<Product[]>();

  const showSuccessToast = (message?: string) =>
    showToast({ status: "Success", type: "success", toastMessage: message });
  const showErrorToast = (message?: string) =>
    showToast({ status: "Error", type: "error", toastMessage: message });

  const searchData = async () => {
    const data = await searchProduct({ txt: searchTxt });
    setProducts(data?.products);
    console.log(products);
  };

  const removeFavoriteHandler = async (id: any) => {
    try {
      const { data } = await axiosInstance.put(
        `/user/removeFromFavorite/${id}`
      );
      setFavoriteIsOpen(!isFavoriteOpen);
      showSuccessToast(data?.message);
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
    if (token) {
      if (isFavoriteOpen === true || isFavoriteOpen === false) {
        getFavData();
      }
    }
  }, [isFavoriteOpen]);
  useEffect(() => {
    if (token) {
      getFavData();
    }
  }, [token]);
  useEffect(() => {
    if (token) {
      getFavData();
    }
  }, []);
  useEffect(() => {
    if (token) {
      getFavData();
    }
  }, [token]);
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
    <>
      <TopHeader />

      <Box bg={"#fff"} className="shadow-md " px={4}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <Navbar className=" w-3  flex lg:hidden ">
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
                className="min-w-[100px]  h-[40px]  md:min-w-[200px]   flex   gap-2"
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
            <CartSlider
              open={cartSliderIsOpen}
              setCartSliderIsOpen={setCartSliderIsOpen}
            />
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
                className="min-w-[120px] h-[60px]  hidden lg:flex md:min-w-[200px]     gap-2"
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

          <div className="my-2">
            <Autocomplete
              label={translate("Navbar/Search")}
              variant="bordered"
              onInputChange={(value) => {
                setSearchTxt(value);
              }}
              size="md"
              className="hidden lg:flex  rounded-[8px] w-[600px]"
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
          </div>
          <Flex alignItems={"center"}>
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
                      content={(favNum && favNum) || 0}
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
                  content={(CartAmount && CartAmount) || 0}
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
              variant="flat"
              color="success"
              className="mx-1"
              onClick={switchLang}
            >
              <BiWorld />
              {locale == "en" ? " | En" : " | ع"}
            </Button>
            <ClientHydration
              LoaderComponent={
                <Avatar src="https://images.unsplash.com/broken" />
              }
            >
              {token && (
                <div className="flex items-center">
                  <Dropdown>
                    <DropdownTrigger>
                      <Button isIconOnly size="lg" variant="light">
                        <Badge
                          content=""
                          color="success"
                          shape="circle"
                          placement="bottom-right"
                        >
                          <Avatar
                            icon={<AvatarIcon />}
                            classNames={{
                              base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                              icon: "text-black/80",
                            }}
                          />
                        </Badge>
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                      <DropdownItem
                        onClick={handleLogout}
                        key="delete"
                        textValue="Logout"
                      >
                        <span className="text-danger  text-lg">Logout</span>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              )}

              {!token && (
                <Button
                  size="sm"
                  className="font-bold bg-cyan-800 text-white w-fit  flex justify-center"
                  onClick={() => router.push("/auth/login")}
                  variant="solid"
                >
                  {translate("Login")}
                  {/* <BiLogIn size={20} /> */}
                </Button>
              )}
            </ClientHydration>
          </Flex>
        </Flex>
      </Box>
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
                className=" flex gap-4  justify-center  z-[2]"
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
    </>
  );
}
