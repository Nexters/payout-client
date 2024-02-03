import { Viewport } from "next";
import React from "react";

export const viewport: Viewport = {
  themeColor: "var(--color-purple-100)",
};

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default LandingLayout;
