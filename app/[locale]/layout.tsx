import type { Metadata } from "next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Changa } from "next/font/google";

import "./globals.css";
import NextUi from "@/components/Providers/NextUi";
import Footer from "@/components/Global/Layout/Footer";
import MainCategories from "@/components/Tooltip/MainCategories";
import ToTop from "@/components/Global/Ui/ToTop";
import { NextIntlClientProvider } from "next-intl";
import GToast from "@/components/Global/Providers/GToast";
import { notFound } from "next/navigation";
import MainNavbar from "@/components/Global/Layout/MainNavbar";
import Head from "next/head";

const inter = Changa({
  subsets: ["arabic"],
  weight: ["400"],
});

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export const metadata: Metadata = {
  title: "MaroCare",
  description: "GENUINE CARE - BEST PRICE",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  // Language Switcher Client Provider
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale} dir={locale == "en" ? "ltr" : "rtl"}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NextUi>
            <MainNavbar />
            <div className=" ">
              <MainCategories />
              {children}
              <ToTop />
            </div>
            <GToast />
            <Footer />
          </NextUi>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
