import NavigationBar from "@/components/common/navigation-bar/navigation-bar";
import { Viewport } from "next";
import React from "react";

export const viewport: Viewport = {
  themeColor: "var(--color-white)",
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
};

export default MainLayout;
