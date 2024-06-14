import { useTranslations } from "next-intl";
import { z } from "zod";

export default function useSchema() {
  const tr = useTranslations("Validation");

  const schema = z.object({
    userName: z.string().min(1, { message: tr("UserName") }),
    userAddress: z.string().min(1, { message: tr("UserAddress") }),
    userPhone: z.string().min(4, { message: tr("PhoneNumber") }),
    userCity: z.string().min(1, { message: tr("UserCity") }), 
    message: z.string().optional(),
    coupon: z.string().optional(),
  })
 /*  .refine((data) => {
    const minimumTotal = 300;
    const shippingDiscount = 30;
    
    if (data.totalAfterDiscount >= minimumTotal) {
      return data.totalAfterDiscount >= (minimumTotal - shippingDiscount);
    }
    return true;
  }, {
    message: "Total after discount should consider shipping discount for orders above 300 SAR",
    path: ["totalAfterDiscount"],
  });  */

  return schema;
}
