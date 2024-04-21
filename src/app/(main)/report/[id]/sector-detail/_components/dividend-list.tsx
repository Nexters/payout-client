import React from "react";
import { StockShareResponse } from "@/api/generated/endpoint.schemas";
import { DividendRow } from "../../dividend/_components/dividend-row";

export const DividendList = React.memo(({ dividendList }: { dividendList: StockShareResponse[] }) => {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-6 overflow-y-auto px-5 py-8">
      {dividendList.map((dividend, idx) => (
        <DividendRow
          key={idx}
          dividend={{
            ...dividend.stockResponse,
            share: dividend.share,
            totalDividend: dividend.share * dividend.stockResponse.price,
          }}
        />
      ))}
    </div>
  );
});

