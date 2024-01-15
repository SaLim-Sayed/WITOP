"use server";
import { useServerRequest as ServerRequest } from "@/store/hooks/serverApi";

export default async function getProducts({
  category,
}: {
  category: string | string[];
}): Promise<any> {
  "use server";
  try {
    const res = await ServerRequest({
      endPoint: `/product/getProductByCategory/${category}/1`,
      method: "get",
    });
    console.log(res?.message);
    return res;
  } catch (error: any) {
    console.log(error?.response );
    throw error;
  }
}
