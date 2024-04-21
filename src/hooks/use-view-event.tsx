import { sendGAEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";
import React from "react";

export const useViewEvent = () => {
  const pathname = usePathname();

  React.useEffect(() => {
    sendGAEvent({
      event: `${pathname} Viewed`,
    });
  }, [pathname]);
};
