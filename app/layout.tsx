// Next
import type { Metadata } from "next";

// Fonts
import { fontSans } from "./fonts";

// Styles
import "./globals.css";

// React
import { Suspense } from "react";

// Loading UI component
import Loading from "./loading";
import { Toaster } from "@/components/shadcn/toaster";

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
      <body className={fontSans.className}>
        <Suspense fallback={<Loading />}>
            <Toaster/>
            {children}
        </Suspense>
      </body>
    </html>
  );
}
