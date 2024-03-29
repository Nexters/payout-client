import React from "react";
import { Months } from "../_data";
import { StockDetailResponseDividendMonthsItem } from "@/api/generated/endpoint.schemas";

interface DividendInfoProps {
  dividendYield?: number;
  dividendPerShare?: number;
  dividendMonths?: StockDetailResponseDividendMonthsItem[];
}

export const DividendInfo = React.memo(({ dividendYield, dividendPerShare, dividendMonths }: DividendInfoProps) => {
  return (
    <div className="flex w-full flex-col px-5 py-8">
      <h4 className="mb-6 text-h4 text-grey-800">Dividend Info</h4>

      <div className="mb-2 flex w-full justify-between gap-2">
        <div className="flex flex-1 flex-col items-center justify-between gap-2 bg-grey-50 p-4">
          <p className="text-body3 text-grey-500">Dividend Yield</p>
          <p className="text-h5 text-grey-800">
            {`${(dividendYield !== undefined ? dividendYield * 100 : 0).toFixed(2)}%`}
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-between bg-grey-50 p-4">
          <p className="text-body3 text-grey-500">Dividend per Share</p>
          <p className="text-h5 text-grey-800">{`${dividendPerShare?.toFixed(2) ?? 0}$`}</p>
        </div>
      </div>

      {dividendMonths && (
        <div className="flex w-full flex-col items-center justify-between gap-2 bg-grey-50 p-4">
          <p className="text-body3 text-grey-500">Payment Frequency</p>
          <span className="text-center text-h5 text-grey-800">
            {`${dividendMonths.length} Times`}
            <span className=" text-body3 text-main-900">{` (${dividendMonths
              .map((month) => Months[month])
              ?.join(", ")})`}</span>
          </span>
        </div>
      )}
    </div>
  );
});
