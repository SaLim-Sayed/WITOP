"use server";
import { useServerRequest as ServerRequest } from "@/store/hooks/serverApi";

export default async function getUserCart() {
  "use server";

  try {
    const res = await ServerRequest({
      endPoint: `user/getUserCart`,
      method: "get",
    });
    return res;
  } catch (error: any) {
    throw error;
  }
}
