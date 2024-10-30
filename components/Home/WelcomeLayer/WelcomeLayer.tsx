import { Card, Image } from "@nextui-org/react";

export default function WelcomeLayer() {
  return (
    <Card radius="none" className="w-full" isPressable>
      <div className="flex gap-4 w-full text-center md:text-start bg-gradient-to-b from-gray-200 to-[#0a3b41] flex-col text-cyan-100 justify-center items-center h-[300px]">
        <Image src="/logo1.png" alt="logo" className=" w-64 mx-3" />
        <h1 className="text-[2.5rem] uppercase text-[#ffa458] font-[700]">
          Creating WPC Walls for Green Stylish Living
        </h1>
          
      </div>
    </Card>
  );
}
