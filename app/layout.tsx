import { Metadata } from "next";
// import { Oswald } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/ui/navbar";

// const oswald = Oswald({ subsets: ["latin"], weight: "400" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: "400" });

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
        className={`${robotoMono.className} antialiased md:px-10 scroll-smooth`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
