import { Viewport } from "next";
import React from "react";

export const viewport: Viewport = {
  themeColor: "var(--color-white)",
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default MainLayout;
