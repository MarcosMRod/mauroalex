import "./globals.css";

import { Suspense } from "react";

import type { Metadata } from "next";

import { Nav } from "./components/nav";
import { Victor_Mono } from "./fonts";

export const metadata: Metadata = {
  title: "Mauro Alex",
  description: "Blog de calistenia de Mauro Alex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={Victor_Mono.className}>
      <body className="fle flex-col overflow-hidden">
        <Suspense>
          <Nav />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
