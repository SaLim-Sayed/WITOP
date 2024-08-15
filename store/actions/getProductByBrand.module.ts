import { useServerRequest as ServerRequest } from "@/store/hooks/serverApi";
export default async function getProductByBrand({
  type,
  page,
}: {
  type: any;
  page: any;
}) {
  const res = await ServerRequest({
    endPoint: `/product/getProductByBrand/${type}/${page}`,
    method: "get",
  });
  return res;
}
