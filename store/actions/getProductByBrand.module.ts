 
import { useServerRequest as ServerRequest } from "@/store/hooks/serverApi";
export default async function getProductByBrand({ type }: { type: any }) {
  const res = await ServerRequest({
    endPoint: `/product/getProductByBrand/${type}/1`,
    method: "get",
  });
  return res;
}
