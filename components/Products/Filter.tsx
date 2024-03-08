import React, { useEffect, useState } from "react";
import { Checkbox, Button, Input } from "@nextui-org/react";
import getAllFilter from "@/store/actions/getAllFilter.module";
import { axiosInstance } from "@/util/axiosConfig";
import { useProductStore } from "@/store/futures/productStore";
import { Slider } from "@nextui-org/slider";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

interface Filter {
  _id: string;
  filterName: string;
}

const FilterComponent: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { setProducts } = useProductStore();
  const [allFilters, setAllFilters] = useState<Filter[]>([]);
  const [filters, setFilters] = useState<{ [key: string]: boolean }>({});
  const [priceRange, setPriceRange] = useState<[any, any]>([0, 1000]);

  const handleCheckboxChange = (key: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: !prevFilters[key],
    }));
  };

  const handlePriceRangeChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      // If value is an array, update the price range
      setPriceRange([value[0], value[1]]);
    } else {
      // If value is a single number, set it as the new price range start and end
      setPriceRange([value, value]);
    }
  };

  const applyFilters = async () => {
    try {
      // Get the keys of true options
      const trueOptions = Object.entries(filters)
        .filter(([key, value]) => value)
        .map(([key]) => key);

      // Join the true options with comma
      const trueOptionsString = trueOptions.join(",");

      // Call handleFilter with trueOptionsString and priceRange
      await handleFilter(trueOptionsString, priceRange);
    } catch (error) {
      console.error("Error applying filters:", error);
    }
  };

  const getAllFilters = async () => {
    try {
      const res = await getAllFilter();
      setAllFilters(res?.allFilters || []);
      const initialFilterState = res?.allFilters.reduce(
        (acc: any, filter: any) => ({ ...acc, [filter.filterName]: false }),
        {} as { [key: string]: boolean }
      );
      setFilters(initialFilterState);
    } catch (error) {
      console.error("Error fetching filters:", error);
    }
  };

  const handleFilter = async (
    options: string,
    priceRange: [number | number[], number | number[]]
  ) => {
    try {
      const formattedPriceRange = `${priceRange[0]}-${priceRange[1]}`;
      let url = `/product/filterProduct/1?category=المكياج&price=${formattedPriceRange}`;
      
      // Check if options is not empty before appending it to the URL
      if (options) {
        url += `&filter=${options}`;
      }
  
      const { data } = await axiosInstance.get(url);
      console.log(data);
      if (data?.message === "success") {
        setProducts(data?.products);
      }
    } catch (error) {
      console.error("Error filtering products:", error);
    }
  }; 

  useEffect(() => {
    getAllFilters();
  }, []);
  

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:hidden">
        <Button onPress={onOpen} size="lg" className="w-full">
          Filter{" "}
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody>
                  <p className="font-bold text-xl mt-6 text-cyan-800">
                    Filter Options{" "}
                  </p>
                  {allFilters.map((filter) => (
                    <div key={filter._id}>
                      <Checkbox
                        checked={filters[filter.filterName]}
                        onChange={() => handleCheckboxChange(filter.filterName)}
                      >
                        {filter.filterName}
                      </Checkbox>
                    </div>
                  ))}
                  <Slider
                    label="Price Range"
                    step={50}
                    maxValue={1000}
                    minValue={0}
                    size="sm"
                    defaultValue={[0, 1000]}
                    value={priceRange}
                    onChange={handlePriceRangeChange}
                    showTooltip={true}
                    showOutline={true}
                    disableThumbScale={true}
                    formatOptions={{
                      style: "currency",
                      currency: "SAR",
                      maximumFractionDigits: 2,
                    }}
                    tooltipValueFormatOptions={{
                      style: "currency",
                      currency: "SAR",
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
                  <Button
                    className="bg-cyan-400 text-white text-xl"
                    onClick={applyFilters}
                  >
                    Apply Filters
                  </Button>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
      <div className="  flex-col gap-4 hidden md:flex">
        <p className="font-bold text-xl text-cyan-800">Filter Options </p>
        {allFilters.map((filter) => (
          <div key={filter._id}>
            <Checkbox
              checked={filters[filter.filterName]}
              onChange={() => handleCheckboxChange(filter.filterName)}
            >
              {filter.filterName}
            </Checkbox>
          </div>
        ))}
        <Slider
          label="Price Range"
          step={50}
          maxValue={1000}
          minValue={0}
          size="sm"
          defaultValue={[0, 1000]}
          value={priceRange}
          onChange={handlePriceRangeChange}
          showTooltip={true}
          showOutline={true}
          disableThumbScale={true}
          formatOptions={{
            style: "currency",
            currency: "SAR",
            maximumFractionDigits: 2,
          }}
          tooltipValueFormatOptions={{
            style: "currency",
            currency: "SAR",
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
        <Button
          className="bg-cyan-400 text-white text-xl"
          onClick={applyFilters}
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterComponent;
