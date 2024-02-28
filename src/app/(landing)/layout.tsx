import { Viewport } from "next";
import React from "react";

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative flex w-full flex-col items-center justify-center">{children}</div>;
};

export default LandingLayout;
