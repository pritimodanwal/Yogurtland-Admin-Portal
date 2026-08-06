import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Navbar } from "../components/navbar";
import { Providers } from "./provider";

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
        <Providers>
          <Navbar/>
          {children}
        </Providers>
        </body>
    </html>
  );
}
