"use client";

import React from "react";

const TickerItem = React.memo(() => {

  return (
    <div className="flex w-full justify-between">
      <div className="flex">
        <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-gray-50" />
        <div>
          <p className="text-h3 text-gray-900">AAPL</p>
          <p className="line-clamp-1 break-all text-body3 text-gray-600">Apple Inc.</p>
        </div>
      </div>
      <div className="ml-2 text-nowrap">
          <p className="text-body1 text-main-900">{`${20} Shares`}</p>
      </div>
    </div>
  );
});

export default TickerItem;
