"use client";

import React from "react";
import TickerList from "./ticker-list";
import { useStocksStore } from "@/state/stores/stocks-store";
import { StockResponse } from "@/api/generated/endpoint.schemas";

const Content = React.memo(() => {
  const { stocks } = useStocksStore();
  const handleClickTicker = React.useCallback((stock: StockResponse) => {
    console.log("stock:", stock);
  }, []);
  return <TickerList data={stocks} onClick={handleClickTicker} />;
});

export default Content;
