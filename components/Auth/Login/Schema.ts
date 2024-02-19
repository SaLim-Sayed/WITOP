import { z } from "zod";

export default function useSchema() {
  const validator = z.object({
    userName:z.string().min(3, { message: "Name is too short" }),
      phoneNumber: z.string().min(4, { message: "Please enter a valid phone number" }), 
  });

  return validator;
}
