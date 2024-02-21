"use client";

import React from "react";
import TickerList from "./ticker-list";
import { getStockByTicker } from "@/api/generated/endpoint";

const Content = React.memo(() => {
  const handleClickTicker = React.useCallback((name: string) => {
    console.log("name:", name);
  }, []);

  React.useEffect(() => {
    (async () => {
      console.log(await getStockByTicker("AAPL"));
    })();
  }, []);

  return <TickerList onClick={handleClickTicker} />;
});

export default Content;
