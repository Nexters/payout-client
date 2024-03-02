"use client";

import React, { useMemo, useState } from "react";
import { MonthlyDividendResponse } from "@/api/generated/endpoint.schemas";
import { BarChart } from "@tremor/react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Button } from "@/components/common/button/button";

const COLORS = ["navy-700"];

const dataFormatter = (number: number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;

type halfToggleType = "first" | "second";

interface MonthlyDividendProps {
  data: MonthlyDividendResponse[];
}
export const MonthlyDividend = React.memo(({ data }: MonthlyDividendProps) => {
  const [halfToggleState, setHalfToggleState] = useState<halfToggleType>("first");
  const router = useRouter();

  const monthlyDividends = React.useMemo(
    () =>
      data.map((item) => {
        return {
          date:
            parseInt((item.year ?? 0).toString().slice(-2)) +
            "." +
            ((item.month ?? 0) < 10 ? `0${item.month}` : (item.month ?? 0).toString()),
          totalDividend: item.totalDividend,
        };
      }),
    [data]
  );

  const averageDividendIncome = React.useMemo(() => {
    return data.reduce((prev, cur) => {
      return prev + cur.totalDividend;
    }, 0);
  }, [data]);

  const handleToggle = (type: halfToggleType) => {
    setHalfToggleState(type);
  };

  const handleCheckMonthlyClick = () => {
    router.push(`/report/dividend/monthly`);
  };

  const shownChartData = useMemo(() => {
    if (halfToggleState === "first") {
      return monthlyDividends.slice(0, 6);
    }

    return monthlyDividends.slice(6, 12);
  }, [halfToggleState, monthlyDividends]);

  return (
    <div className="flex flex-col gap-6 p-5 py-8">
      <div className="flex w-full flex-col items-start  gap-y-0.5">
        <p className=" text-h5 text-grey-600">Average Monthly Dividend Income</p>
        <p className=" text-h1 text-grey-900">{`$${(averageDividendIncome / 12).toFixed(2)}`}</p>
      </div>
      <BarChart
        index="date"
        categories={["totalDividend"]}
        data={shownChartData}
        className="h-[165px]"
        showAnimation={true}
        colors={COLORS}
        valueFormatter={dataFormatter}
        onValueChange={(v) => console.log(v)}
        showGridLines={false}
        showYAxis={false}
        showLegend={false}
      />

      <div className="mb-2 flex items-center justify-between rounded-3xl border border-gray-100 bg-grey-100 p-1.5">
        <ShadcnButton
          className={`flex h-9 flex-1 items-center justify-center rounded-3xl ${
            halfToggleState === "first" ? "bg-white text-h6 " : "bg-gray-100 text-body2 "
          } `}
          style={{
            boxShadow: halfToggleState === "first" ? "0px 2px 10px 0px rgba(0, 0, 0, 0.08)" : undefined,
            color: halfToggleState === "first" ? "#4e5968" : "#8b95a1",
          }}
          onClick={() => handleToggle("first")}
        >
          First Half
        </ShadcnButton>
        <ShadcnButton
          className={`flex h-9 flex-1 items-center justify-center rounded-3xl ${
            halfToggleState === "second" ? "bg-white text-h6" : "bg-gray-100 text-body2"
          } `}
          style={{
            boxShadow: halfToggleState === "second" ? "0px 2px 10px 0px rgba(0, 0, 0, 0.08)" : undefined,
            color: halfToggleState === "second" ? "#4e5968" : "#8b95a1",
          }}
          onClick={() => handleToggle("second")}
        >
          Second Half
        </ShadcnButton>
      </div>

      <Button onClick={handleCheckMonthlyClick} className="shrink-0" variant={"secondary"} size={"max"}>
        Check Your Monthly Dividend
      </Button>
    </div>
  );
});
