import { Viewport } from "next";
import React from "react";

export const viewport: Viewport = {
  themeColor: "#FFF",
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default MainLayout;
