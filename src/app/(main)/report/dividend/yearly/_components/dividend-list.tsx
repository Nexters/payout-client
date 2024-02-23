import React from "react";
import { Dividend, DividendRow } from "../../_components/dividend-row";

export const DividendList = React.memo(({ dividendList }: { dividendList: Dividend[] }) => {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-6 overflow-y-auto px-5 pb-8">
      {dividendList.map((dividend, idx) => (
        <div className="flex h-10 w-full items-center justify-between gap-2" key={`${dividend.ticker}-${idx}`}>
          <p className="flex h-full w-5 shrink-0 items-center justify-start align-middle text-h5 text-main-900">
            {idx + 1}
          </p>
          <DividendRow dividend={dividend} />
        </div>
      ))}
    </div>
  );
});
