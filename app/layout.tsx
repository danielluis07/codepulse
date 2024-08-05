import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StarsCanvas } from "@/components/main/star-background";
import { Navbar } from "@/components/main/navbar";
import { Footer } from "@/components/main/footer";
import { Analytics } from "@vercel/analytics/react";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { GoogleTagManager } from "@next/third-parties/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Pulse",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <StarsCanvas />
            <Navbar />
            {children}
            <Analytics />
            <Toaster />
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
      <GoogleTagManager gtmId="AW-10841822440" />
    </html>
  );
}
