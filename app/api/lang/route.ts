import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = () => {
  const ref = cookies().get("NEXT_LOCALE");
  const data = cookies().getAll();

  return new NextResponse(JSON.stringify({ lang: ref?.value }));
};
