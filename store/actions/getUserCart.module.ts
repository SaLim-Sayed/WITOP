"use server";
import { useServerRequest as ServerRequest } from "@/store/hooks/serverApi";

export default async function getUserCart() {
  const res = await ServerRequest({
    endPoint: `user/getUserCart`,
    method: "get",
  });
  return res;
}
