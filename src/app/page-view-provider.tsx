"use client";

import { pageview } from "@/utils/gtag";
import { usePathname } from "next/navigation";
import React from "react";

export const PageViewProvider = () => {
  const pathname = usePathname();
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      pageview(pathname);
    }
  }, [pathname]);

  return null;
};
