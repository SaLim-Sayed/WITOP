import { useServerRequest as ServerRequest } from "@/store/hooks/serverApi";
export default async function getUserOrders() {
  const res = await ServerRequest({
    endPoint: `user/userOrders`,
    method: "get",
  });
   
  return res;
}
