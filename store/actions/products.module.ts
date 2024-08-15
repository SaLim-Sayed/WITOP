import { useServerRequest as ServerRequest } from "@/store/hooks/serverApi";

export default async function getProducts({
  category,
  page,
}: {
  category: string | string[];
  page: any;
}) {
  const res = await ServerRequest({
    endPoint: `/product/getProductByCategory/${category}/${page}`,
    method: "get",
  });
  return res;
}
