import NavigationBar from "@/components/common/navigation-bar/navigation-bar";
import { Viewport } from "next";
import React from "react";

export const viewport: Viewport = {
  themeColor: "var(--color-white)",
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavigationBar />
      <div className="h-[calc(100%-50px)] w-full">{children}</div>
    </>
  );
};

export default MainLayout;
