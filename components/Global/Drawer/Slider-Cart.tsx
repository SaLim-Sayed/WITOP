"use client";
import { ICartState, Product, Product as ProductType } from "@/types/product";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "@nextui-org/button";
import { BiShow, BiX } from "react-icons/bi";
import getUserCart from "@/store/actions/getUserCart.module";
import Image from "next/image";
import ShopingCartItem from "./ShopingCartItem";
import Cookies from "js-cookie";
import { showToast } from "../Ui/Toast";
import { Card } from "@nextui-org/react";
import { cartStore, useProductStore } from "@/store/futures/cartStore";
import { useRouter } from "next/navigation"; 

interface IProps {
  open: any;
  setCartSliderIsOpen: any;
}
const CartSlider = ({ open, setCartSliderIsOpen }: IProps) => {
  const token = Cookies.get("token");
  const router = useRouter();
  const [products, setProducts] = useState<ProductType[]>();
  const [cartProducts, setCartProducts] = useState<ICartState>();
  const [cartCount, setCartCount] = useState<any>();
  const { CartSetter } = cartStore();

  const { setProductsCart } = useProductStore();
  const getCartData = async () => {
    const res = await getUserCart();
    console.log({res})
    setCartCount(res?.cart?.cartTotal);
    setProducts(res?.cart?.products);
    setProductsCart(res?.cart?.products);
    CartSetter(res?.numberOfItem);
    setCartProducts(res?.cart);
  };
  // console.log( products);
  useEffect(() => {
    if (token) {
      getCartData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  useEffect(() => {
    if (token) {
      getCartData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (token) {
      if (open) getCartData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 cursor-pointer"
          onClose={setCartSliderIsOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col  relative overflow-auto  bg-white shadow-xl">
                      <div className="flex-1   px-4 sm:px-6">
                        <div className="  top-0 w-full  ">
                          <div className="flex items-center px-4   text-white z-50  h-12  justify-between">
                            <Dialog.Title className="text-xl  ">
                              <Button
                                size="lg"
                                radius="md"
                                variant="shadow"
                                color="secondary"
                                className="-m-4 fixed flex h-10 items-center  z-[500] "
                                onClick={() => {
                                  router.push(`/cart/${cartProducts?._id}`);
                                  setCartSliderIsOpen(false);
                                }}
                              >
                                Show All cart Items <BiShow />
                              </Button>
                            </Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <Button
                                isIconOnly
                                variant="shadow"
                                color="warning"
                                className="-m-2 p-2 fixed  z-[500]"
                                onClick={() => setCartSliderIsOpen(false)}
                              >
                                <BiX />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Dialog.Description>
                          <div className="mt-12">
                            <div className="flow-root relative">
                              <Dialog.Overlay className="absolute">
                                <Image
                                  width={300}
                                  height={300}
                                  alt="second banner"
                                  className="  fixed top-[50%] -translate-y-[50%] right-2 my-20 w-[300px] h-[300px] opacity-20"
                                  src="/no-product.png"
                                />
                              </Dialog.Overlay>
                              <div className="flex flex-col  gap-2">
                                {products?.map((product) => (
                                  <Card
                                    isPressable
                                    onClick={() => {
                                      router.push(
                                        `/product/${product?.category}/${product._id}`
                                      );
                                      setCartSliderIsOpen(false);
                                    }}
                                    key={product._id}
                                  >
                                    <ShopingCartItem
                                    cartId={cartProducts?._id}
                                      product={product}
                                      setProducts={setProducts}
                                      setCartSliderIsOpen={setCartSliderIsOpen}
                                      setCartCount={setCartCount}
                                    />
                                  </Card>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Dialog.Description>
                      </div>
                      {/* <Button
                                size="lg"
                                radius="md"
                                variant="shadow"
                                color="warning"
                                className="-m-4 bottom-12 right-2 fixed flex h-10 items-center  z-[500] "
                              >
                                Shopping cart
                              </Button> */}
                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal :</p>
                          <p>{cartCount} $</p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default CartSlider;
