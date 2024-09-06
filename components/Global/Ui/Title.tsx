import { cn } from "@/libs/cn";
import Center from "./Center";

export default function Title({
  title,
  subTitle,
  desc,
  exSt,
  exStTitle,
  exStSubTitle,
}: {
  title?: string;
  subTitle?: any;
  desc?: any;
  exSt?: string;
  exStTitle?: string;
  exStSubTitle?: string;
}) {
  return (
    <Center>
      <div
        className={cn(
          "flex text-center  w-full   my-[24px] leading-[35px] flex-col  justify-center items-center",
          exSt && exSt
        )}
      >
        {title && (
          <div
            className={cn(
              "md:text-[36px] text-[24px] font-[600] ",
              exStTitle && exStTitle
            )}
          >
            {title}
          </div>
        )}
        {subTitle && (
          <div
            className={cn(
              "text-darkColor-20 font-[400] lg:text-[1.2rem] text-[1rem] max-w-md",
              exStSubTitle && exStSubTitle
            )}
          >
            {subTitle}{" "}
            {desc && (
              <span className="font-[500] text-darkColor-800">{desc} </span>
            )}
          </div>
        )}
      </div>
    </Center>
  );
}
