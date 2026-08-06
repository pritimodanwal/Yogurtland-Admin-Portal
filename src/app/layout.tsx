import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Navbar } from "../components/navbar";

export const metadata: Metadata = {
  title: "YL Admin",
  description: "YL Admin Portal",
};

export default function RootLayout({ children }: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
