import { useTranslations } from "next-intl";
import { z } from "zod";

export default function useSchema() {
  const tr = useTranslations("Validation");

  const schema = z.object({
    coupon: z.string().min(1, { message: tr("Coupon") }) ,
  });

  return schema;
}
