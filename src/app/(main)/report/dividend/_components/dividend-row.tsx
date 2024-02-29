import { SingleYearlyDividendResponse, StockResponse } from "@/api/generated/endpoint.schemas";
import Image from "next/image";
import React from "react";
import TickerDefault from "@/components/icons/ticker-default";

export interface Dividend extends StockResponse {
  share?: number;
}

export const DividendRow = React.memo(({ dividend }: { dividend: SingleYearlyDividendResponse }) => {
  return (
    <div className="flex h-full w-full flex-1 items-center gap-4">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-grey-100">
        {dividend.logoUrl === null ? (
          <TickerDefault className="h-10 min-w-10 max-w-10" />
        ) : (
          <Image
            className="flex size-10 object-contain p-1"
            width={40}
            height={40}
            src={dividend.logoUrl}
            alt={dividend.ticker}
          />
        )}
      </div>
      <div className="items-between flex w-full flex-col justify-center  gap-1">
        <div className="flex items-center justify-between">
          <p className="text-h5 text-grey-900">{dividend.ticker}</p>
          <p className="text-body1 text-main-900">${dividend.totalDividend.toFixed(2)}</p>
        </div>
        <p className=" text-body3 text-grey-600">{dividend.share} Shares</p>
      </div>
    </div>
  );
});
