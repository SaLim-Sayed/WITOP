import React from "react";

import { Skeleton } from "@nextui-org/react";

export default function MainSkeleton() {
  return (
    <div className="flex flex-col items-start md:flex-row gap-10 md:items-center">
      <div className="flex gap-4 ">
        <Skeleton className="w-[200px] h-[200px] " />
        <div className="gap-3 flex flex-col mt-4 justify-around">
          <div className="flex flex-col gap-3">
            <Skeleton className="w-[100px] h-[20px] rounded-md" />
            <Skeleton className="w-[100px] h-[10px] rounded-md" />
          </div>
          <div className="flex flex-col gap-3">
            <Skeleton className="w-[100px] h-[20px] rounded-md" />
            <Skeleton className="w-[100px] h-[10px] rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
