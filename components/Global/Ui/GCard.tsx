import { ReactNode } from "react";

import { cn } from "@/libs/cn";
import Image from "next/image";
import { Button, Divider } from "@nextui-org/react";

export default function GCard({
    price,
  title,
  desc,
  id,
  img,
  exSt,
}: {
  price:any;
  title:string;
  desc:string;
 img:string;
  exSt?: string;
  id?:any;

}) {
  return (
    <div
      className={cn(
        "  border rounded-md border-gray transition duration-100 ",
        exSt && exSt
      )}
    >
         
          <div
            key={id}
            className="flex flex-col gap-4 justify-center items-center shadow-xl"
          >
            <div className="h-[200px]  p-4">
              <Image
                src={img}
                alt="1"
                width={100}
                height={200}
                className=" cursor-pointer "
              />
            </div>
        <p className=" font-bold"> <span className=" line-through">{price+100}$</span> {price} </p>
            <Divider />
            <p className=" font-bold">{title}</p>

            <p>{desc}</p>
            <Button size="lg" className="w-full"  radius="sm">Shop Now</Button>
          </div>
       
    </div>
  );
}
