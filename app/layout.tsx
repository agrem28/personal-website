import { Metadata } from "next";
// import { Oswald } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
// import Navbar from "@/app/ui/navbar";

// const oswald = Oswald({ subsets: ["latin"], weight: "400" });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Andrew Gremillion",
  description: "personal website and portfolio for Andrew Gremillion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className} antialiased m-10 md:mx-[calc((100vw-756px)/2)] lg:mx-[calc((100vw-1024px)/2)] md:max-w-[756px] lg:max-w-[1024px]  scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
