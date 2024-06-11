// Next
import type { Metadata } from "next";

// Fonts
import { poppins } from "./fonts";

// Styles
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Jalf",
  description: "Productos para profesionales de estetica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={poppins.className}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Toaster />
      </body>
    </html>
  );
}
