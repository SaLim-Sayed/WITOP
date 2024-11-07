import React, { ReactNode } from "react";

import { cn } from "@/libs/cn";

export default function Center({
  children,
  nav,
  className
}: {
  children: ReactNode;
  nav?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-[94%] lg:w-[90%] 2xl:w-[80%] mx-auto",
        nav && "w-[100%] lg:w-[90%] 2xl:w-[80%] mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
