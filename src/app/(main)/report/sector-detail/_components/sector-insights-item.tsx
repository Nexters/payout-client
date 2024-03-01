import { formatDateStringToMonthDay } from "@/utils/date";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import TickerDefault from "@/components/icons/ticker-default";

interface InsightsStock {
  dividendYield?: number;
  exDividendDate?: string;
  lastModifiedAt?: string;
  logoUrl: string;
  stockId: string;
  ticker: string;
}

interface SectorInsightsItemProps {
  title: string;
  data: {
    dividends: InsightsStock[];
    lastModifiedAt: string;
  };
  type: InsightsType;
}

type InsightsType = "Date" | "Rate";

export const SectorInsightsItem = React.memo(({ title, data, type }: SectorInsightsItemProps) => {
  const router = useRouter();

  const handleItemClick = useCallback(
    (ticker: string) => {
      router.push(`/stock/${ticker}`);
    },
    [router]
  );

  return (
    <div className="flex w-full flex-col">
      <h4 className="mb-4 px-5 text-h4 text-grey-900 ">{title}</h4>

      <div className="scrollbar-none flex gap-2.5 overflow-x-auto overflow-y-hidden px-5 ">
        {data.dividends.map((stock, idx) => {
          return (
            <div
              key={idx}
              className="rounded-lg border border-grey-200 p-4"
              style={{ minWidth: 119, maxWidth: 119 }}
              onClick={() => {
                handleItemClick(stock.ticker);
              }}
            >
              <div className="flex flex-col gap-4">
                {stock.logoUrl === null ? (
                  <TickerDefault className="h-8 min-w-8 max-w-8" />
                ) : (
                  <Image
                    src={stock.logoUrl ?? "/next.svg"}
                    alt={stock.ticker}
                  width={40}
                  height={40}
                  className="mr-4 h-10 min-w-10 max-w-10 rounded-full border border-grey-100 bg-grey-50 object-contain p-1"
                  />
                )}
                <div>
                  <h5 className="text-h5 text-grey-900">{stock.ticker}</h5>
                  <p className="mt-0.5 truncate text-body2 text-main-900">
                    {type === "Date" && stock.exDividendDate && formatDateStringToMonthDay(stock.exDividendDate)}
                    {type === "Rate" &&
                      `${stock.dividendYield !== undefined ? Math.floor(stock.dividendYield * 100) / 100 : 0}%`}
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
