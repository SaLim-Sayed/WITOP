import { useServerRequest as ServerRequest } from "@/store/hooks/serverApi";
export default async function getAllFilter() {
  const res = await ServerRequest({
    endPoint: `filter/getAllFilter`,
    method: "get",
  });
   
  return res;
}
