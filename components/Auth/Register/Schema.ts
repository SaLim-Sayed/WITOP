import { useTranslations } from "next-intl";
import { z } from "zod";

export default function useSchema() {
  const tr = useTranslations("Validation");
  const validator = z.object({
    userName: z.string().min(3, { message: tr("UserName") }),
    email: z
      .string()
      .email({
        message:  tr("Email"),
      })
      .min(5),
    phoneNumber: z.string().min(4, { message: tr("PhoneNumber") }),
  });

  return validator;
}
