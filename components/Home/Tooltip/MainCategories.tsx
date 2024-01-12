import Center from "@/components/Global/Ui/Center";
import { Tooltip, Button } from "@nextui-org/react";
import Content from "./Content";
interface IProps {}

const MainCategories = ({}: IProps) => {
  return (
    <div className=" hidden md:inline bg-[#d9d7d7]">
      <Center>
        <div className="grid grid-cols-3  md:grid-flow-col gap-4   mb-8">
          {Array(9)
            .fill(0)
            .map((_, index) => (
              <Tooltip
                key={index}
                showArrow
                placement="bottom"
                content={<Content />}
                classNames={{
                  base: [
                    // arrow color
                    "before:bg-neutral-400 dark:before:bg-white",
                  ],
                  content: [
                    "py-2 px-4 shadow-xl",
                    "text-black bg-gradient-to-br from-white to-neutral-400",
                  ],
                }}
              >
                <Button
                  radius="sm"
                  size="lg"
                  variant="light"
                  color="success"
                  className=" hover:bg-cyan-500"
                >
                  skincare{" "}
                </Button>
              </Tooltip>
            ))}
        </div>
      </Center>
    </div>
  );
};

export default MainCategories;
