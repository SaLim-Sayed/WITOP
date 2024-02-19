import { z } from "zod";

export default function useSchema() {
  const validator = z.object({
    userName:z.string().min(3, { message: "Name is too short" }),
    email: z
      .string()
      .email({
        message: "Please enter a valid email",
      })
      .min(5), 
      phoneNumber: z.string().min(4, { message: "Please enter a valid phone number" }), 
  });

  return validator;
}
