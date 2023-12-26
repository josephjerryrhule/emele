import type { Metadata } from "next";
import "./globals.css";
import HeaderComponent from "./components/header/header";
import FooterComponent from "./components/footer/footer";
import { Open_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Emele Arthur-Hayford",
  description: "Portfolio Website - Emele",
};

const opensans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={
          (opensans.className, "w-full bg-emeleblack text-white p-5 md:p-10")
        }
      >
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
