import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';

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
      <GoogleAnalytics gaId="G-5N5BM31G8W" />
    </html>
  );
}
