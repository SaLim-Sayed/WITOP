import { useServerRequest as ServerRequest } from "@/store/hooks/serverApi";

export default async function categoryProducts({
  category,
  page,
}: {
  category: string | string[];
  page: any;
}) {
  const res = await ServerRequest({
    endPoint: `/product/getByMainCategory/${category}/${page}`,
    method: "get",
  });
  return res;
}
