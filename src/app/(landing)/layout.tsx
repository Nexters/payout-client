import { Viewport } from "next";
import React from "react";

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LandingLayout;
