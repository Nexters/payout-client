"use client";

import React from "react";
import TickerItem from "./ticker-item";

const TickerList = React.memo(() => {

  return (
    <div className="flex h-full w-full flex-1 flex-col items-start">
      <div className="flex w-full flex-1 flex-col items-start gap-4 overflow-scroll px-4 py-6">
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
      </div>
    </div>
  );
});

export default TickerList;
