import NavigationBar from "@/components/common/navigation-bar/navigation-bar";
import { Viewport } from "next";
import React from "react";

export const viewport: Viewport = {
  themeColor: "var(--color-white)",
};

import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    description: "Self-check Your Dividend Portfolio",
  };
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex size-full flex-col">
      <NavigationBar />
      <div className="h-[calc(100%-50px)] w-full overflow-auto">{children}</div>
    </div>
  );
};

export default MainLayout;
