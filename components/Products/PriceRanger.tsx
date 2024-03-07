import React from "react";

import { Slider } from "@nextui-org/slider";

export default function PriceRanger() {
  return (
    <Slider
      label="Price Range"
      step={100}
      maxValue={1000}
      minValue={0}
      size="sm"
      defaultValue={[300, 700]}
      showTooltip={true}
      showOutline={true}
      disableThumbScale={true}
      formatOptions={{
        style: "currency",
        currency: "KWD",
        maximumFractionDigits: 2,
      }}
      tooltipValueFormatOptions={{
        style: "currency",
        currency: "KWD",
        maximumFractionDigits: 0,
      }}
      classNames={{
        base: "max-w-md",
        filler: "bg-cyan-900",
        labelWrapper: "mb-2",
        label: "font-medium text-cyan-700 text-medium",
        value: "font-medium text-cyan-500 text-small",
        thumb: [
          "transition-size",
          "bg-lightColor-900",
          "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
          "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6",
          "after:bg-cyan-900",
        ],
        step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-cyan-900",
      }}
      tooltipProps={{
        offset: 10,
        placement: "bottom",
        classNames: {
          base: [
            // arrow color
            "before:bg-cyan-900 after:bg-cyan-900 ",
          ],
          content: ["py-2 shadow-xl", "text-white bg-cyan-900"],
        },
      }}
    />
  );
}
