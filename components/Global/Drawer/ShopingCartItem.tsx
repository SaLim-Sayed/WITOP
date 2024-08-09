import React from "react";
import { Card, CardBody, Image, Button, CardFooter } from "@nextui-org/react";
import { BiTrash } from "react-icons/bi";
import { Product } from "@/types/product";

import { showToast } from "../Ui/Toast";
import { cartStore } from "@/store/futures/cartStore";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { BsEye } from "react-icons/bs";
import { axiosInstance } from "@/util/axiosConfig";

interface IProps {
  product: Product;
  setProducts: any;
  setCartCount: any;
  setCartSliderIsOpen: any;
  cartId: any;
}

export default function ShopingCartItem({
  product,
  setProducts,
  setCartCount,
  setCartSliderIsOpen,
  cartId,
}: IProps) {
  const { CartSetter } = cartStore();
  const showSuccessToast = (message?: string) =>
    showToast({ status: "Success", type: "success", toastMessage: message });
  const showErrorToast = (message?: string) =>
    showToast({ status: "! خطأ ", type: "error", toastMessage: message });

  const lang = useLocale();
  const router = useRouter();
  const removeFromCartHandler = async (id: any) => {
    try {
      const { data } = await axiosInstance.put(`/user/removeFromCart/${id}`);

      console.log(data);
      setProducts(data?.cart?.products);
      setCartCount(data?.cart?.cartTotal);
      CartSetter(data?.cart?.products?.length);
      showSuccessToast(data?.message);
    } catch (err: any) {
      console.log(err);
      showErrorToast("يجب تسجيل الدخول اولاََ");
    }
  };

  return (
    <Card
      className="border-none bg-background/90 text-slate-950 dark:bg-default-100/70 overflow-hidden  font-light text-sm  max-w-[610px]"
      shadow="lg"
    >
      <CardBody>
        <div className="grid grid-cols-2 gap-2 md:gap-4 items-center justify-center">
          <div className="relative  z-10  ">
            <Image
              alt="Album cover"
              height={300}
              shadow="md"
              src={product?.images[0]}
              width="100%"
            />
          </div>

          <div className="flex flex-col   gap-4">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-lg">{product.productName}</h3>

                <p className=" ">Price : {product.price}</p>

                <div className=" flex justify-between  items-center gap-4">
                  <Button
                    color="danger"
                    onClick={() => removeFromCartHandler(product?._id)}
                  >
                    Delete <BiTrash />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter className="flex justify-between items-center">
        <Button
          className=" w-full text-lg text-white bg-teal-800 "
          variant="flat"
          color="default"
          onClick={() => {
            router.push(`/cart/${cartId}`);
            setCartSliderIsOpen(false);
          }}
          endContent={<BsEye size={20} />}
        >
          show Cart And Payment
        </Button>
      </CardFooter>
    </Card>
  );
}
