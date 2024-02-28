"use client";

import React from "react";
import { SectorFocus } from "./_components/sector-focus";
import { MonthlyDividend } from "./_components/monthly-dividend";
import { useStocksSectorRatioMutation } from "@/state/queries/use-stocks-sector-ratio";
import { AnnualDividend } from "./_components/annual-dividend";
import { Loader2Icon } from "lucide-react";
import { useYearlyDividendMutation } from "@/state/queries/use-yearly-dividend-mutation";
import { YearlyDividendResponse } from "@/api/generated/endpoint.schemas";
import { useMonthlyDividendMutation } from "../../../state/queries/use-monthly-dividend-mutation";

const ReportPage = () => {
  const { mutate: mutateStocksSectorRatio, data: stocksSectorRatioData } = useStocksSectorRatioMutation();
  const { mutate: mutateYearlyDividend, data: yearlyDividendData } = useYearlyDividendMutation();
  const { mutate: mutateMonthlyDividend, data: monthlyDividendData } = useMonthlyDividendMutation();

  React.useEffect(() => {
    mutateStocksSectorRatio();
    mutateYearlyDividend();
    mutateMonthlyDividend();
  }, [mutateMonthlyDividend, mutateStocksSectorRatio, mutateYearlyDividend]);

  const stocksSectorRatio = React.useMemo(() => {
    return (
      stocksSectorRatioData?.sort((a, b) => {
        return b.sectorRatio - a.sectorRatio;
      }) ?? []
    );
  }, [stocksSectorRatioData]);

  const yearlyDividends: YearlyDividendResponse = React.useMemo(() => {
    return {
      totalDividend: yearlyDividendData?.totalDividend ?? 0,
      dividends:
        yearlyDividendData?.dividends.sort((a, b) => {
          return b.totalDividend - a.totalDividend;
        }) ?? [],
    };
  }, [yearlyDividendData]);

  if (!stocksSectorRatioData || !yearlyDividendData || !monthlyDividendData) {
    return (
      <div className="flex size-full items-center justify-center">
        <Loader2Icon className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="size-full">
      <div className="flex size-full flex-col">
        <SectorFocus data={stocksSectorRatio} />
        <Divider />
        <MonthlyDividend data={monthlyDividendData} />
        <Divider />
        <AnnualDividend data={yearlyDividends} />
      </div>
    </div>
  );
};

const Divider = React.memo(() => {
  return <div className="h-4 w-full shrink-0 bg-grey-100" />;
});

export default ReportPage;
