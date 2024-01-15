"use server";
import { useServerRequest as ServerRequest } from "@/store/hooks/serverApi";

export default async function getProductByID({
  id,
  category
}: {
  id: string | string[];
  category: string | string[];
}): Promise<any> {
  "use server";
  try {
    const res = await ServerRequest({
  endPoint: `/product/getProductDetails/${category}/${id}`,
      method: "get",
    });
    console.log(res);
    return res;
  } catch (error: any) {
    console.log(error?.response?.data);
    throw error;
  }
}
