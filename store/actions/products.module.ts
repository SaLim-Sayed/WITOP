"use server";
import { useServerRequest as ServerRequest } from "@/store/hooks/serverApi";

export default async function getProducts(): Promise<any> {
  "use server";
  try {
    const res = await ServerRequest({
      endPoint: "/product/getProductByCategory/first category/1",
      method: "get",
    });
    console.log(res);
    return res;
  } catch (error: any) {
    console.log(error?.response?.data);
    throw error;
  }
}
