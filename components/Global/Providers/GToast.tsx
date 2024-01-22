"use client";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { useLocale } from "next-intl";

export default function GToast() {
  const locale = useLocale();

  return (
    <ToastContainer
      rtl={locale === "en"}
      position={locale === "ar" ? "bottom-left" : "bottom-right"}
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      className={"z-[2000]"}
    />
  );
}
