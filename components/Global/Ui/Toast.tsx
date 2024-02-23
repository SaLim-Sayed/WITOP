import { Image } from "@nextui-org/react";
import { MdConnectingAirports } from "react-icons/md";
import { toast, TypeOptions } from "react-toastify";

type Toast = { toastMessage?: string; type?: TypeOptions; status?: string };

export const showToast = ({ toastMessage, type, status }: Toast) => {
  const iconColor =
    type === "error" ? "text-primaryColor-600" : "text-primaryColor-900";
  const icon = (
    <div className="w-[200px]  ">
      <Image src="/logo2.png" alt="logo" height={200} width={200} />
    </div>
  );

  const message =
    type === "error" ? (
      <div className="flex flex-col gap-3 justify-center items-center">
        <div className={`text-[35px] font-[600] ${iconColor}`}>
          {status && status}
        </div>
        <div className="text-center">{toastMessage}</div>
      </div>
    ) : (
      <div className="flex flex-col gap-3 justify-center items-center">
        <div className={`text-[35px] font-[600] ${iconColor}`}>
          {status && status}
        </div>
        <div className="text-center">{toastMessage}</div>
      </div>
    );

  const options = {
    icon,
    duration: 5000,
    type,
  };

  toast(message, options);
};
