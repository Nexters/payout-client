"use client";

import React from "react";
import { SectorFocus } from "./_components/sector-focus";
import { MonthlyDividend } from "./_components/monthly-dividend";
import { useStocksStore } from "@/state/stores/stocks-store";
import { useStocksSectorRatioMutation } from "@/state/queries/use-stocks-sector-ratio";

const ReportPage = () => {
  const { stocks } = useStocksStore();
  const { mutate } = useStocksSectorRatioMutation();

  React.useEffect(() => {
    mutate(
      stocks.map((stock) => ({
        share: stock.count,
        ticker: stock.ticker ?? "",
      })) ?? []
    );
  }, [mutate, stocks]);

  return (
    <div className="size-full">
      <div className="flex size-full flex-col">
        <SectorFocus />
        <Divider />
        <MonthlyDividend />
        <Divider />
      </div>
    </div>
  );
};

const Divider = React.memo(() => {
  return <div className="h-4 w-full shrink-0 bg-grey-100" />;
});

export default ReportPage;
