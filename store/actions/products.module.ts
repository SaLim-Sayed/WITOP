"use server";
import { useServerRequest as ServerRequest } from "@/store/hooks/serverApi";

export default async function getProducts({
  category,
}: {
  category: string | string[];
}) {
  const res = await ServerRequest({
    endPoint: `/product/getProductByCategory/${category}/1`,
    method: "get",
  });
  return res;
}
