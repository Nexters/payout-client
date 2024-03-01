"use client";

import React from "react";
import { Header } from "./_components/header";
import { InvestmentTip } from "./_components/investment-tip";
import { DividendInfo } from "./_components/dividend-info";
import { DrawerOverlay, DrawerPortal, Drawer as DrawerPrimitive } from "@/components/ui/drawer";
import { StockInfoDrawer } from "./_components/stock-drawer";
import { useStockByTickerQuery } from "../../../../state/queries/use-stock-by-ticker-query";
import { Loader2Icon } from "lucide-react";

export default function StockPage({ params }: { params: { id: string } }) {
  const [showStockInfo, setShowStockInfo] = React.useState<boolean>(false);
  const { data } = useStockByTickerQuery(params.id);
  const handleInfoClick = () => {
    setShowStockInfo((prevState) => !prevState);
  };

  React.useEffect(() => {
    // 컴포넌트가 마운트될 때 body 스타일 변경
    document.body.style.setProperty("margin", "auto", "important");
    document.body.style.setProperty("padding", "0");

    // 컴포넌트가 언마운트될 때 body 스타일 복원
    return () => {
      document.body.style.removeProperty("margin");
      document.body.style.removeProperty("padding");
    };
  }, []);

  if (!data) {
    return (
      <div className="flex size-full items-center justify-center">
        <Loader2Icon className="animate-spin" />
      </div>
    );
  }

  return (
    <DrawerPrimitive open={showStockInfo}>
      <DrawerPortal>
        <DrawerOverlay onClick={() => setShowStockInfo(false)} />
        <StockInfoDrawer handleInfoClick={handleInfoClick} />
      </DrawerPortal>
      <div className="flex h-full w-full flex-col pt-2.5">
        <Header stock={data} handleInfoClick={handleInfoClick} />
        <div className="h-4 bg-grey-100" />
        <InvestmentTip exDividendDate={data.exDividendDate} earliestPaymentDate={data.earliestPaymentDate} />
        <DividendInfo
          dividendPerShare={data.dividendPerShare}
          dividendYield={data.dividendYield}
          dividendMonths={data.dividendMonths}
        />
      </div>
    </DrawerPrimitive>
  );
}
