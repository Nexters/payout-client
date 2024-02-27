import React from "react";
import { StockShareResponse } from "@/api/generated/endpoint.schemas";

export const DividendList = React.memo(({ dividendList }: { dividendList: StockShareResponse[] }) => {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-6 overflow-y-auto px-5 py-8">
      {dividendList.map((dividend, idx) => (
        <></>
        // <DividendRow dividend={dividend} key={idx} />
      ))}
    </div>
  );
});
