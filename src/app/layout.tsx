import type { Metadata } from "next";

import "./imports.scss";
import "./globals.scss";

import Navbar from "@/components/Navbar/Navbar";
import { CursorProvider } from "@/components/Providers/Cursor";

export const metadata: Metadata = {
  title: "Rishi Mungia",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CursorProvider>
          <Navbar />
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}
