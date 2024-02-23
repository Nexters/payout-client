import { formatDateStringToMonthDay } from "@/utils/data";
import Image from "next/image";
import React from "react";

export interface InsightsStock {
  stockId: string;
  ticker: string;
  logoUrl: string;
  exDividendDate: string;
  sectorRatio?: number;
}

interface SectorInsightsItemProps {
  title: string;
  stocks: InsightsStock[];
  type: InsightsType;
}

type InsightsType = "Date" | "Rate";

export const SectorInsightsItem = React.memo(({ title, stocks, type }: SectorInsightsItemProps) => {
  return (
    <div className="flex w-full flex-col">
      <h4 className="mb-4 px-5 text-h4 text-grey-900 ">{title}</h4>

      <div className="scrollbar-none flex gap-2.5 overflow-x-auto overflow-y-hidden px-5 ">
        {stocks.map((stock, idx) => {
          return (
            <div key={idx} className="rounded-lg border border-gray-200 p-4" style={{ minWidth: 119, maxWidth: 119 }}>
              <div className="flex flex-col gap-4">
                <Image src={"/next.svg"} alt={stock.ticker} width={32} height={32} />

                <div>
                  <h5 className="text-h5 text-gray-900">{stock.ticker}</h5>
                  <p className="mt-0.5 truncate text-body2 text-main-900">
                    {type === "Date" && formatDateStringToMonthDay(stock.exDividendDate)}
                    {type === "Rate" &&
                      `${stock.sectorRatio !== undefined ? (stock.sectorRatio * 100).toFixed(0) : 0}%`}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});
