"use client";

import React from "react";
import { Header } from "./_components/header";
import { DividendList } from "./_components/dividend-list";
import { useYearlyDividendMutation } from "@/state/queries/use-yearly-dividend-mutation";
import { YearlyDividendResponse } from "@/api/generated/endpoint.schemas";
import { Loader2Icon } from "lucide-react";
import { useParams } from "next/navigation";

const YearlyDividendPage = React.memo(() => {
  const { id } = useParams<{ id: string }>();
  const { mutate: mutateYearlyDividend, data: yearlyDividendData } = useYearlyDividendMutation(id);

  React.useEffect(() => {
    mutateYearlyDividend();
  }, [mutateYearlyDividend]);

  const yearlyDividends: YearlyDividendResponse = React.useMemo(() => {
    return {
      totalDividend: yearlyDividendData?.data.totalDividend ?? 0,
      dividends:
        yearlyDividendData?.data.dividends.sort((a, b) => {
          return b.totalDividend - a.totalDividend;
        }) ?? [],
    };
  }, [yearlyDividendData]);

  if (!yearlyDividendData) {
    return (
      <div className="flex size-full items-center justify-center">
        <Loader2Icon className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex size-full flex-col items-center justify-start">
      <Header />
      <DividendList dividendList={yearlyDividends.dividends} />
    </div>
  );
});

export default YearlyDividendPage;
