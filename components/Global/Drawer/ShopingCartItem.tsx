import React from "react";
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { BiTrash } from "react-icons/bi";
import { Product } from "@/types/product";
import axios from "axios";
import { showToast } from "../Ui/Toast";
import { cartStore } from "@/store/futures/cartStore";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { BsEye } from "react-icons/bs";

interface IProps {
  product: Product;
  setProducts: any;
  setCartCount: any;
  setCartSliderIsOpen: any;
}

export default function ShopingCartItem({
  product,
  setProducts,
  setCartCount,
  setCartSliderIsOpen,
}: IProps) {
  const { CartSetter } = cartStore();
  const showSuccessToast = (message?: string) =>
    showToast({ status: "Success", type: "success", toastMessage: message });
  const showErrorToast = (message?: string) =>
    showToast({ status: "Error", type: "error", toastMessage: message });

  const lang = useLocale();
  const router = useRouter();
  const removeFromCartHandler = async (id: any) => {
    try {
      const data = await axios.put(
        `https://maro-cares.onrender.com/user/removeFromCart/${id}`,
        {},
        {
          headers: {
            language: lang || "en",
            authrization:
              "maroTKeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTNlZWNkMjAwZTEzNDM0Mjg3M2M4YiIsImlhdCI6MTcwNTI0MjUyN30.RbBrOw_DzBBpsQsTAAMv34xYDKyjiIp61vcgkQVQfLw",
          },
        }
      );

      console.log(data);
      setProducts(data?.data.cart.products);
      setCartCount(data?.data.cart.cartTotal);
      CartSetter(data?.data.cart.products.length);
      showSuccessToast("item deleted Successfuly");
    } catch (err: any) {
      console.log(err);
      showErrorToast("Something Went Wrong , Try Again..");
    }
  };

  return (
    <Card
      className="border-none bg-background/90 text-slate-950 dark:bg-default-100/70 overflow-hidden  font-light text-sm  max-w-[610px]"
      shadow="lg"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              height={300}
              shadow="md"
              src={product?.images[0]}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold ">{product.productName}</h3>

                <p className=" ">Price : {product.price}</p>

                <div className=" flex justify-between  items-center gap-4">
                  <Button
                   className="  text-lg text-white bg-teal-500 "
                   variant="flat"
                   color="default"
                    onClick={() => {
                      router.push(
                        `/product/${product?.category}/${product._id}`
                      );
                      setCartSliderIsOpen(false);
                    }}
                    endContent={<BsEye size={20} />}
                  >
                    show Details
                  </Button>

                  <Button
                    isIconOnly
                    color="danger"
                    onClick={() => removeFromCartHandler(product?._id)}
                  >
                    <BiTrash />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}