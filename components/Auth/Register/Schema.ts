import { useTranslations } from "next-intl";
import { z } from "zod";

export default function useSchema() {
  const tr = useTranslations("Validation");
  const validator = z.object({
    userName: z.string().min(3, { message: tr("UserName") }),
    phoneNumber: z.string().min(4, { message: tr("PhoneNumber") }),
    invitationBy: z.string().optional(),
  });

  return validator;
}
