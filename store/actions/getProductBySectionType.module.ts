"use server";
import { useServerRequest as ServerRequest } from "@/store/hooks/serverApi";
export default async function getProductBySectionType({ type }: { type: any }) {
  const res = await ServerRequest({
    endPoint: `/product/getProductBySectionType/${type}`,
    method: "get",
  });
  return res;
}
