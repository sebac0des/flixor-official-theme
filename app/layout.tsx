// Next
import type { Metadata } from "next";

// Fonts
import { heading } from "./fonts";

// Styles
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";


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
      <body className={heading.className}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
       
      </body>
    </html>
  );
}
