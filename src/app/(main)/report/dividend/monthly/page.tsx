"use client";

import React from "react";
import { Header } from "./_components/header";
import { DividendAccordion } from "./_components/dividend-accordion";
import { useMonthlyDividendMutation } from "@/state/queries/use-monthly-dividend-mutation";
import { Loader2Icon } from "lucide-react";

const MonthlyDividendPage = React.memo(() => {
  const { mutate: mutateMonthlyDividend, data: monthlyDividendData } = useMonthlyDividendMutation();

  React.useEffect(() => {
    mutateMonthlyDividend();
  }, [mutateMonthlyDividend]);

  if (!monthlyDividendData) {
    return (
      <div className="flex size-full items-center justify-center">
        <Loader2Icon className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex size-full flex-col items-center justify-start">
      <Header />
      <DividendAccordion monthlyDividendList={monthlyDividendData} />
    </div>
  );
});

export default MonthlyDividendPage;
