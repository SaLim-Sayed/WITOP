import { Card, Image } from "@nextui-org/react";
import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
  FaTwitter,
  FaVoicemail,
  FaWhatsapp,
} from "react-icons/fa";

export default function WelcomeLayer() {
  return (
    <Card radius="none" className="w-full" isPressable>
  <div className="flex gap-4 w-full text-center md:text-start bg-gradient-to-b from-orange-200 to-[#0a3b41] flex-col text-cyan-100 justify-center items-center h-[300px]">
        <Image src="/logo1.png" alt="logo" className=" w-48 mx-3" />
        <h1 className="text-[2.5rem] uppercase font-[700]" > هنا حيث يبدأ الجمال </h1>
        <h2 className="text-black"> </h2>
        <div className="flex gap-4">
          <FaFacebook size={40} />
          <FaInstagram size={40} />
          <FaTwitter size={40} />
          <FaTiktok size={40} />
          <FaSnapchat size={40} />
          <FaWhatsapp size={40} />

        </div>
      </div>
    </Card>
  );
}
