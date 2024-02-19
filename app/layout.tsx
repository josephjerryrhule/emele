/* eslint-disable @next/next/inline-script-id */
import type { Metadata } from "next";
import "./globals.css";
import HeaderComponent from "./components/header/header";
/* import FooterComponent from "./components/footer/footer";
 */ import { Open_Sans } from "next/font/google";
import Script from "next/script";

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
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GID}`}
      />
      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GID}');
      `}
      </Script>
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
        {/*  <FooterComponent /> */}
      </body>
    </html>
  );
}
