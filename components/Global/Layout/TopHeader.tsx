"use client";
import { Button } from "@nextui-org/react";
import Logo from "@/public/icons/LIGHT_LOGO.svg";
import Image from "next/legacy/image";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { cn } from "@/libs/cn";
import Link from "next/link";
const TopHeader = () => {
  
 
  
  return (
    <div className="flex gap-[9px] items-center justify-center h-[40px] z-50 bg-slate-400 ">
      <h1>Free Shipping for orders {">"} SAR452 * <Link href="" className="text-white"> see conditions</Link>  </h1>
    </div>
  );
};

export default TopHeader;
