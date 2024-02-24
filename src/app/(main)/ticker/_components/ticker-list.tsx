"use client";

import { Stock } from "@/state/stores/stocks-store";
import React from "react";

interface TickerProps {
  data: Stock[];
  tickerName?: string;
  hasShares?: boolean;
  onClick: (stock: Stock) => void;
}

const TickerList = React.memo(({ data, hasShares, onClick }: TickerProps) => {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-start">
      <div className="flex w-full flex-1 flex-col items-start gap-4 overflow-scroll px-4 py-6">
        {data.map((item, index) => (
          <div key={index} className="flex w-full justify-between" onClick={() => onClick(item)}>
            <div className="flex">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full border border-grey-100 bg-grey-50" />
              <div>
                <p className="text-left text-h3 text-grey-900">{item.ticker}</p>
                <p className="line-clamp-1 break-all text-body3 text-grey-600">{item.companyName}</p>
              </div>
            </div>
            {hasShares && (
              <div className="ml-2 text-nowrap">
                <p className="text-body1 text-main-900">{`${item.count} Shares`}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

export default TickerList;
