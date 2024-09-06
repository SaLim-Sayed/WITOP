
import Profile from "@/components/Profile/UserProfile";
import { cookies } from "next/headers";

export default function page() {
     const token = cookies().get("token");
    console.log(token?.value);
    
  return <Profile />;
}
