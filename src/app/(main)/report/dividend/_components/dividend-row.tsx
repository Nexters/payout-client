import { SingleYearlyDividendResponse, StockResponse } from "@/api/generated/endpoint.schemas";
import Image from "next/image";
import React from "react";

export interface Dividend extends StockResponse {}

export const DividendRow = React.memo(({ dividend }: { dividend: SingleYearlyDividendResponse }) => {
  return (
    <div className="flex h-full w-full flex-1 items-center gap-4">
      <Image src={dividend.logoUrl} alt={dividend.ticker} width={40} height={40} />
      <div className="items-between flex w-full flex-col justify-center  gap-1">
        <div className="flex items-center justify-between">
          <p className="text-h5 text-grey-900">{dividend.ticker}</p>
          <p className="text-body1 text-main-900">${dividend.totalDividend}</p>
        </div>
        <p className=" text-body3 text-grey-600">{dividend.share} Shares</p>
      </div>
    </div>
  );
});
