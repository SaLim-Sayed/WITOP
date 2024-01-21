import { useServerRequest as ServerRequest } from "@/store/hooks/serverApi";
export default async function getFavoriteList() {
  const res = await ServerRequest({
    endPoint: `user/getFavoriteList`,
    method: "get",
  });
  return res;
}
