import type { Metadata } from "next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Inter } from "next/font/google";
import "./globals.css";
import NextUi from "@/components/Providers/NextUi";
import MainNavbar from "@/components/Global/Layout/Navbar";
import TopHeader from "@/components/Global/Layout/TopHeader";
import Footer from "@/components/Global/Layout/Footer";
import MainCategories from "@/components/Tooltip/MainCategories";
import ToTop from "@/components/Global/Ui/ToTop";
import { NextIntlClientProvider } from "next-intl";
import ClientHydration from "@/components/Global/Providers/ClientHydration";
import MainLoader from "@/components/Global/Loaders/MainLoader";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Generated by create next app",
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
    console.log(error);
  }
  return (
    <html lang={locale} dir={locale == "en" ? "ltr" : "rtl"}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NextUi>
            <ClientHydration LoaderComponent={<MainLoader />}>
              <MainNavbar />
              <div className="mt-[160px]  md:mt-[150px]">
                <MainCategories />

                {children}
                <ToTop />
              </div>

              <Footer />
            </ClientHydration>
          </NextUi>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
