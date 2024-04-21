"use client";

import { Viewport } from "next";
import Link from "next/link";
import React from "react";
import Logo from "@/components/common/logo/logo";
import { useStocksStore } from "@/state/stores/stocks-store";
import { sendGAEvent } from "@next/third-parties/google";

export const viewport: Viewport = {
  themeColor: "var(--color-white)",
};

const InputLayout = ({ children }: { children: React.ReactNode }) => {
  const { removeAllStocks } = useStocksStore();

  const onResetClick = React.useCallback(() => {
    removeAllStocks();
    sendGAEvent({
      event: "Reset Button Click",
    });
  }, [removeAllStocks]);

  return (
    <div className="flex size-full flex-col">
      <div className="sticky top-0 z-10 flex h-11 w-full shrink-0 items-center justify-between bg-white px-5">
        <Link href="/">
          <Logo />
        </Link>
        <div onClick={onResetClick} className="cursor-pointer text-body3 text-grey-900">
          Reset
        </div>
      </div>
      <div className="h-[calc(100%-50px)] w-full">{children}</div>
    </div>
  );
};

export default InputLayout;
