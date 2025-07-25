import type { Metadata } from "next";

import "./imports.scss";
import "./globals.scss";

import Navbar from "@/components/Navbar/Navbar";
import { CursorProvider } from "@/components/Providers/Cursor";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Rishi Mungia",
  description: "Web | Games | Blockchain",
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
          <Footer />
        </CursorProvider>
      </body>
    </html>
  );
}
