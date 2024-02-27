"use client";

import { Button } from "@/components/common/button/button";
import { useRouter } from "next/navigation";
import React from "react";

const FloatingFooter = React.memo(() => {
  const router = useRouter();

  const onButtonClick = React.useCallback(() => {
    router.push("/ticker");
  }, [router]);

  return (
    <div className="pointer-events-none fixed bottom-0 left-1/2 w-full max-w-[768px] -translate-x-1/2 bg-[linear-gradient(0deg,_#FFF_52.78%,_rgba(255,_255,_255,_0.00)_100%)] p-5 pt-[50px]">
      <Button onClick={onButtonClick} variant={"primary"} size={"large"} className="pointer-events-auto w-full">
        Check My Dividend Portfolio
      </Button>
    </div>
  );
});

export default FloatingFooter;
