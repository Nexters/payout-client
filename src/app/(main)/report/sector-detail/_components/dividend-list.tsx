import React from "react";
import { Dividend, DividendRow } from "../../dividend/_components/dividend-row";

export const DividendList = React.memo(({ dividendList }: { dividendList: Dividend[] }) => {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-6 overflow-y-auto px-5 py-8">
      {dividendList.map((dividend, idx) => (
        <DividendRow dividend={dividend} key={idx} />
      ))}
    </div>
  );
});
