import { Viewport } from "next";
import React from "react";

export const viewport: Viewport = {
  themeColor: "var(--color-purple-100)",
};

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative flex w-full flex-col items-center justify-center">{children}</div>;
};

export default LandingLayout;
