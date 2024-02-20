import { useTranslations } from "next-intl";
import { z } from "zod";

export default function useSchema() {
  const tr = useTranslations("Validation");
  const validator = z.object({
     
    phoneNumber: z.string().min(4, { message: tr("PhoneNumber") }),
  });

  return validator;
}
