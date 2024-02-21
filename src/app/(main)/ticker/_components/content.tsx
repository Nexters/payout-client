"use client";

import React from "react";
import TickerList from "./ticker-list";
import { useStocksStore } from "@/state/stores/stocks-store";
import { Stock } from "@/api/stocks/getStocks";

const Content = React.memo(() => {
  const { stocks } = useStocksStore();
  const handleClickTicker = React.useCallback((stock: Stock) => {
    console.log("stock:", stock);
  }, []);
  return <TickerList data={stocks} onClick={handleClickTicker} />;
});

export default Content;
