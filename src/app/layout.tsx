import type { Metadata } from "next";

import "@/app/globals.css";
import Menu from "@/app/ui/nav/Menu";
import { inter } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Komocrafts",
  description: "Handmade home decor and gifts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-komo-bg`}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
