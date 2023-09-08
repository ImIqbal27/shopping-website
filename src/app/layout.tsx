import HeaderTop from "@/components/HeaderTop";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeaderMain from "@/components/HeaderMain";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopping-website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop />
        <HeaderMain />
        {children}
      </body>
    </html>
  );
}
