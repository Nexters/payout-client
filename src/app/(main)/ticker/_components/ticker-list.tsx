"use client";

import { Stock } from "@/state/stores/stocks-store";
import React from "react";
import Image from "next/image";

interface TickerProps {
  data: Stock[];
  tickerName?: string;
  hasShares?: boolean;
  onClick: (stock: Stock) => void;
}

const TickerList = React.memo(({ data, tickerName, hasShares, onClick }: TickerProps) => {
  const getHighlightText = React.useCallback(
    (text?: string) => {
      if (!tickerName || !text) return text;
      const regex = new RegExp(tickerName, "gi");

      return text.split(regex).reduce((acc: (string | React.ReactElement)[], cur = "", idx, arr) => {
        acc.push(cur);
        // 마지막 배열 순번이 아닐 경우에만 하이라이트 워딩 추가
        if (arr.length - 1 > idx) {
          const match = text.match(regex);
          const ticker = match ? match[idx] : tickerName;

          acc.push(
            <span className="text-main-700" key={idx}>
              {ticker}
            </span>
          );
        }
        return acc;
      }, []);
    },
    [tickerName]
  );

  return (
    <div className="flex h-full w-full flex-1 flex-col items-start overflow-scroll" style={{}}>
      <div className={`flex w-full flex-1 flex-col items-start ${hasShares ? "gap-6 pt-6" : "gap-5 pt-8"} px-4 pb-1`}>
        {data.map((item, index) => (
          <div key={index} className="flex w-full justify-between" onClick={() => onClick(item)}>
            <div className="flex items-center">
              <Image
                src={item.logoUrl ?? "/next.svg"}
                alt={"stock logo"}
                width={40}
                height={40}
                className="mr-4 flex h-10 min-w-10 max-w-10 items-center justify-center rounded-full border border-grey-100 bg-grey-50 object-contain p-1"
              />
              <div className="flex flex-col">
                <span className="mb-1 line-clamp-1 break-all text-left text-h5 text-grey-900">
                  {getHighlightText(item.ticker)}
                </span>
                <span className="line-clamp-1 break-all text-body3 text-grey-600">
                  {getHighlightText(item.companyName)}
                </span>
              </div>
            </div>
            {hasShares && (
              <div className="ml-2 max-w-20">
                <p className="truncate text-body1 text-main-900">{`${item.count} Shares`}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

export default TickerList;
