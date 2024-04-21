import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import { GlobalProvider } from "./global-provider";
import { Toaster } from "@/components/ui/sonner";

const dm_sans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Payout",
  description: "Calculate your dividend payout with ease.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    images: "/thumbnail.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body className={dm_sans.className}>
        <GlobalProvider>
          <div className="relative flex h-full w-full flex-col items-center justify-center">
            <div className="h-full w-full flex-1">{children}</div>
            <Toaster position="bottom-center" />
          </div>
        </GlobalProvider>
      </body>
    </html>
  );
}
