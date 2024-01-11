import React from "react";

import { Select, SelectItem } from "@nextui-org/react";

export default function DropList({
  list,
  label,
  placeholder,
}: {
  list: string[];
  label: string;
  placeholder: string;
}) {
  return (
    <Select
      variant="bordered"
      disallowEmptySelection={true}
      dir="ltr"
      classNames={{
        value: "sm:text-[1.2rem] font-[500]",
        trigger: "border-[1px] border-lightColor-50",
      }}
      size={"lg"}
      label={label}
      className=" w-full lg:w-[300px]"
    >
      {list.map((listItem: string) => (
        <SelectItem key={listItem} value={listItem}>
          {listItem}
        </SelectItem>
      ))}
    </Select>
  );
}
