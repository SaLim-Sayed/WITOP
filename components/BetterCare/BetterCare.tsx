import { Image, Pagination } from "@nextui-org/react";
import Center from "../Global/Ui/Center";
import GCard from "../Global/Ui/GCard";

export default function BetterCare() {
  return (
    <Center>
      <div className="flex flex-col  gap-8">
        <Image src="/slider/banner1.jpg" alt="1" width={1500} />

        <div className="grid grid-cols-4 gap-4">
          {Array(12)
            .fill(0)
            .map((_, index) => (
              <GCard
                key={index}
                price={100}
                title="title"
                desc="desc"
                img="/best/1.jpg"
              />
            ))}
        </div>
        <div className="flex justify-center">
        <Pagination showControls total={10} initialPage={1} />

        </div>
      </div>
    </Center>
  );
}
