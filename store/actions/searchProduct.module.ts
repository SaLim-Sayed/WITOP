 
import { useServerRequest as ServerRequest } from "@/store/hooks/serverApi";

export default async function searchProduct({ txt }: { txt: string }) {
  const res = await ServerRequest({
    endPoint: `/product/searchForProduct/${txt}`,
    method: "get",
  });
  console.log(res);
  return res;
}
