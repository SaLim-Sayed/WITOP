import React, { useEffect, useState } from "react";
import { Checkbox, Button, Slider, RadioGroup, Radio } from "@nextui-org/react";
import getAllFilter from "@/store/actions/getAllFilter.module";
import { axiosInstance } from "@/util/axiosConfig";
import { useProductStore } from "@/store/futures/productStore";
import {
  Modal,
  ModalContent,
  ModalBody,
  CheckboxGroup,
  useDisclosure,
} from "@nextui-org/react";
import useCategory from "../Global/Layout/useCategory ";
import { BiFilter, BiSkipNext } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useParams, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import * as enData from "@/messages/en.json";
import * as arData from "@/messages/ar.json";
import { getKeyByValue } from "../Global/Ui/value";
import { cn } from "@/libs/cn";
interface Filter {
  _id: string;
  filterName: string;
}

const FilterComponent: React.FC = ({ cat }: any) => {
  const { categories, currentPage, totalPages, handlePageChange } =
    useCategory();
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { setProducts } = useProductStore();
  const [allFilters, setAllFilters] = useState<Filter[]>([]);
  const [filters, setFilters] = useState<{ [key: string]: boolean }>({});
  const [priceRange, setPriceRange] = useState<[any, any]>([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [page, setPage] = useState(5);

  // Function to set the selected category from URL by default
  const trans = useTranslations("Categories");
  const local = useLocale();

  const jsonData = local === "ar" ? arData : enData;
  const { category } = useParams();
  const cats: string | string[] = category;
  const categoryName = Array.isArray(cats) ? cats[0] : cats;
  const catKey = getKeyByValue(jsonData, decodeURIComponent(categoryName));
  const catName = catKey
    ? trans(catKey.replace("Categories/SubCategory/Desc/", "SubCategory.Desc."))
    : "";

  const setSelectedCategoryFromURL = () => {
    if (typeof catName === "string") {
      setSelectedCategory(catName); // Set the selected category state
    }
  };

  const handleCheckboxChange = (key: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: !prevFilters[key],
    }));
  };

  const handlePriceRangeChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setPriceRange([value[0], value[1]]);
    } else {
      setPriceRange([value, value]);
    }
  };

  const applyFilters = async () => {
    try {
      const trueOptions = Object.entries(filters)
        .filter(([key, value]) => value)
        .map(([key]) => key);
      const trueOptionsString = trueOptions.join(",");
      router.push(`/product/${selectedCategory}`);
      await handleFilter(trueOptionsString, priceRange, selectedCategory);
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
    priceRange: [number | number[], number | number[]],
    category: string
  ) => {
    try {
      const formattedPriceRange = `${priceRange[0]}-${priceRange[1]}`;
      let url = `/product/filterProduct/1?category=${category}&price=${formattedPriceRange}`;
      if (options) {
        url += `&filter=${options}`;
      }
      const { data } = await axiosInstance.get(url);
      if (data?.message === "success") {
        setProducts(data?.products);
      }
    } catch (error) {
      console.error("Error filtering products:", error);
    }
  };

  useEffect(() => {
    setSelectedCategoryFromURL();
    getAllFilters();
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:hidden">
        <Button
          onPress={onOpen}
          size="lg"
          className="w-full"
          endContent={<BiFilter className="text-2xl" />}
        >
          Filter
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody>
                  <p className="font-bold text-xl mt-6 text-cyan-800">
                    Filter Options
                  </p>
                  {allFilters.slice(page - 5, page).map((filter) => (
                    <div key={filter._id}>
                      <Checkbox
                        checked={filters[filter.filterName]}
                        onChange={() => handleCheckboxChange(filter.filterName)}
                      >
                        {filter.filterName}
                      </Checkbox>
                    </div>
                  ))}
                  <div className="flex gap-2 items-center">
                    <Button
                      onClick={() => setPage(page - 5)}
                      disabled={page === 5}
                      isIconOnly
                    >
                      <IoIosArrowBack
                        size={20}
                        className={cn(
                          "text-cyan-800",
                          local === "ar" ? "rotate-180" : ""
                        )}
                      />
                    </Button>
                    <span>{currentPage}</span>
                    <Button
                      onClick={() => setPage(page + 5)}
                      disabled={page === allFilters.length / 5 - 1}
                      isIconOnly
                    >
                      <IoIosArrowForward
                        size={20}
                        className={cn(
                          "text-cyan-800",
                          local === "ar" ? "rotate-180" : ""
                        )}
                      />
                    </Button>
                  </div>
                  <RadioGroup
                    value={selectedCategory}
                    onValueChange={(selected) => setSelectedCategory(selected)}
                    label={
                      <p className="font-bold text-xl text-cyan-800">
                        Filter Category{" "}
                      </p>
                    }
                    className="gap-4"
                    classNames={{
                      label: "text-dark font-[500] text-[14px]",
                    }}
                  >
                    {categories.map((opt: any, index) => (
                      <Radio
                        key={index}
                        value={opt}
                        color="default"
                        classNames={{
                          label: "text-darkColor-200 mx-2 ",
                        }}
                      >
                        {opt}
                      </Radio>
                    ))}
                  </RadioGroup>

                  {/* Pagination controls */}
                  <div className="flex gap-2 items-center">
                    <Button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      isIconOnly
                    >
                      <IoIosArrowBack
                        size={20}
                        className={cn(
                          "text-cyan-800",
                          local === "ar" ? "rotate-180" : ""
                        )}
                      />
                    </Button>
                    <span>{currentPage}</span>
                    <Button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      isIconOnly
                    >
                      <IoIosArrowForward
                        size={20}
                        className={cn(
                          "text-cyan-800",
                          local === "ar" ? "rotate-180" : ""
                        )}
                      />
                    </Button>
                  </div>
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
        {allFilters.slice(page - 5, page).map((filter) => (
          <div key={filter._id}>
            <Checkbox
              checked={filters[filter.filterName]}
              onChange={() => handleCheckboxChange(filter.filterName)}
            >
              {filter.filterName}
            </Checkbox>
          </div>
        ))}
        <div className="flex gap-2 items-center">
          <Button
            onClick={() => setPage(page - 5)}
            disabled={page === 5}
            isIconOnly
          >
            <IoIosArrowBack
              size={20}
              className={cn(
                "text-cyan-800",
                local === "ar" ? "rotate-180" : ""
              )}
            />
          </Button>
          <span>{currentPage}</span>
          <Button
            onClick={() => setPage(page + 5)}
            disabled={allFilters.length ==page }
            isIconOnly
          >
            <IoIosArrowForward
              size={20}
              className={cn(
                "text-cyan-800",
                local === "ar" ? "rotate-180" : ""
              )}
            />
          </Button>
        </div>
        {/* Render checkboxes for all categories */}

        <RadioGroup
          value={selectedCategory}
          label={
            <p className="font-bold text-xl text-cyan-800">Filter Category </p>
          }
          onValueChange={(selected) => setSelectedCategory(selected)}
          className="gap-4"
          classNames={{
            label: "text-dark font-[500] text-[14px]",
          }}
        >
          {categories.map((opt: any, index) => (
            <Radio
              key={index}
              value={opt}
              color="default"
              classNames={{
                label: "text-darkColor-200 mx-2 ",
              }}
            >
              {opt}
            </Radio>
          ))}
        </RadioGroup>

        {/* Pagination controls */}
        <div className="flex   items-center gap-2">
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            isIconOnly
          >
            <IoIosArrowBack
              size={20}
              className={cn(
                "text-cyan-800",
                local === "ar" ? "rotate-180" : ""
              )}
            />
          </Button>
          <span>{currentPage}</span>
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            isIconOnly
          >
            <IoIosArrowForward
              size={20}
              className={cn(
                "text-cyan-800",
                local === "ar" ? "rotate-180" : ""
              )}
            />
          </Button>
        </div>
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
