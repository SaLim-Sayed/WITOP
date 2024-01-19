"use server";
import { useServerRequest as ServerRequest } from "@/store/hooks/serverApi";

export default async function addToCart( ) {
  "use server";

  const data = {
    count: 5,
  };
  const res = await ServerRequest({
    endPoint: `/user/addToCart/65a517381456b26ed39265f6`,
    body: data,
    method: "POST",
  });
  console.log(res);
  return res;
}
