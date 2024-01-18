import React from "react";
import { Card, Skeleton } from "@nextui-org/react";
export default function GCardSkeleton() {
  return (
    <Card className="max-w-[400px] min-w-[250px] space-y-5  p-2 shadow-none h-[300px] " radius="lg">
      <Skeleton className="rounded-lg h-[200px]">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-2/5 h-[32px] rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <div className=" flex justify-between items-start">
          <div className="w-full flex flex-col gap-2">
            <Skeleton className="h-3 w-full rounded-lg" />
            <Skeleton className="h-3 w-[50%] rounded-lg" />
            <Skeleton className="h-3 w-full rounded-lg" />
          </div>
          <div className="w-[100%] flex justify-center items-center">
            
          </div>
          <div className="w-full flex flex-col gap-2">
            <Skeleton className="h-3 w-full rounded-lg" />
            <Skeleton className="h-3 w-[50%]  rounded-lg" />
            <Skeleton className="h-3 w-full rounded-lg" />
          </div>
        </div>
        <div className=" flex justify-between items-center">
          <div className="max-w-[300px] w-full flex items-center gap-3">
            
            <div className="w-full flex flex-col gap-2">
              <Skeleton className="h-3 w-full rounded-lg" />
               
            </div>
          </div>

           
        </div>
      </div>
    </Card>
  );
}
