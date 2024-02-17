"use client";

import React from "react";
import TickerList from "./ticker-list";

const Content = React.memo(() => {
  const handleClickTicker = React.useCallback((name: string) => {
    console.log("name:", name);
  }, []);
  return <TickerList onClick={handleClickTicker} />;
});

export default Content;
