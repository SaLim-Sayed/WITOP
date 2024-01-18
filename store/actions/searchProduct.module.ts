"use server";
import { useServerRequest as ServerRequest } from "@/store/hooks/serverApi";

export default async function searchProduct({
  txt,
}: {
  txt: string;
}): Promise<any> {
  "use server";
  try {
    const res = await ServerRequest({
      endPoint: `/product/searchForProduct/${txt}`,
      method: "get",
    });
    console.log(res)
    return res;
  } catch (error: any) {
    throw error;
  }
}
