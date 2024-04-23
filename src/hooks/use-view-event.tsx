import { event } from "@/utils/gtag";
import { usePathname } from "next/navigation";
import React from "react";

export const useViewEvent = () => {
  const pathname = usePathname();

  React.useEffect(() => {
    event({
      action: `${pathname} Viewed`,
    });
  }, [pathname]);
};
