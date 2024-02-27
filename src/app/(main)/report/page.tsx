"use client";

import React from "react";
import { SectorFocus } from "./_components/sector-focus";
import { MonthlyDividend } from "./_components/monthly-dividend";
import { useStocksStore } from "@/state/stores/stocks-store";
import { useStocksSectorRatioMutation } from "@/state/queries/use-stocks-sector-ratio";
import { AnnualDividend } from "./_components/annual-dividend";
import { Loader2Icon } from "lucide-react";

const ReportPage = () => {
  const { stocks } = useStocksStore();
  const { mutate, data } = useStocksSectorRatioMutation();

  React.useEffect(() => {
    mutate(
      stocks.map((stock) => ({
        share: stock.count,
        ticker: stock.ticker ?? "",
      })) ?? []
    );
  }, [mutate, stocks]);

  const sectors = React.useMemo(() => {
    return data?.sort((a, b) => {
      return b.sectorRatio - a.sectorRatio;
    }) ?? []
  }, [data])

  if (!data) {
    return (
      <div className="flex size-full items-center justify-center">
        <Loader2Icon className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="size-full">
      <div className="flex size-full flex-col">
        <SectorFocus data={sectors} />
        <Divider />
        <MonthlyDividend />
        <Divider />
        <AnnualDividend />
      </div>
    </div>
  );
};

const Divider = React.memo(() => {
  return <div className="h-4 w-full shrink-0 bg-grey-100" />;
});

export default ReportPage;
