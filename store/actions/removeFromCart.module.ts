 
import { useServerRequest as ServerRequest } from "@/store/hooks/serverApi";

export default async function removeFromCart({
  id, 
}: {
  id: string  ; 
}) {
 
  try {
    const res = await ServerRequest({
      endPoint: `/user/removeFromCart/${id}`,
      method: "put",
    });
    return res;
  } catch (error: any) {
    throw error;
  }
}
