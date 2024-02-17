"use client";

import React from "react";

interface TickerProps {
  hasShares?: boolean;
  onClick: (index: string) => void;
}

const TickerList = React.memo(({ hasShares, onClick }: TickerProps) => {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-start">
      <div className="flex w-full flex-1 flex-col items-start gap-4 overflow-scroll px-4 py-6">
        {Array.from({ length: 5 }, (_, index) => (
          <div key={index} className="flex w-full justify-between" onClick={() => onClick("AAPL")}>
            <div className="flex">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-gray-50" />
              <div>
                <p className="text-h3 text-gray-900">AAPL</p>
                <p className="line-clamp-1 break-all text-body3 text-gray-600">Apple Inc.</p>
              </div>
            </div>
            {hasShares && (
              <div className="ml-2 text-nowrap">
                <p className="text-body1 text-main-900">{`${20} Shares`}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

export default TickerList;
