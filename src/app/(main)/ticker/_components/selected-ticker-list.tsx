"use client";

import React from "react";
import TickerList from "./ticker-list";
import { Stock, useStocksStore } from "@/state/stores/stocks-store";

interface SelectedTickerListProps {
  handleTickerClick: (data: Stock) => void;
}

const SelectedTickerList = React.memo(({ handleTickerClick }: SelectedTickerListProps) => {
  const { stocks } = useStocksStore();
  return <TickerList data={stocks} hasShares onClick={handleTickerClick} />;
});

export default SelectedTickerList;
