import { useTranslations } from "next-intl";
import { z } from "zod";

export default function useSchema() {
  const tr = useTranslations("Validation");

  
  const schema = z.object({
    userName: z.string().min(1, { message: tr("UserName") }),
    neighborhood: z.string().min(1, { message: tr("neighborhood") }),
    street: z.string().min(1, { message: tr("street") }),
    userPhone: z.string().min(4, { message: tr("PhoneNumber") }),
    userCity: z.string().min(1, { message: tr("UserCity") }),
    message: z.string().optional(),
    coupon: z.string().optional(),
    paymentWay: z.enum(["Cash on delivery", "Cash by wallet"], {
      errorMap: () => ({ message: tr("paymentWay") }), // Custom error message
    }),
  });

  return schema;
}
