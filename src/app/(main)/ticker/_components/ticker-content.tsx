"use client";

import Intro from "@/app/(main)/ticker/_components/intro";
import SelectedTickerList from "@/app/(main)/ticker/_components/selected-ticker-list";
import { TickerDrawer } from "@/app/(main)/ticker/_components/ticker-drawer";
import { Stock, useDrawerStore, useStocksStore } from "@/state/stores/stocks-store";
import React from "react";

export type DrawerType = "name" | "count" | "edit";

const TickerContent = React.memo(() => {
  const { addStocks, removeStocks, editStocks } = useStocksStore();
  const { isOpenChange } = useDrawerStore();

  const [tickerName, setTickerName] = React.useState<string>("");
  const [tickerCount, setTickerCount] = React.useState<number>(0);
  const [drawerType, setDrawerType] = React.useState<DrawerType>("name");
  const [selectedStock, setSelectedStock] = React.useState<Stock>();

  const resetData = React.useCallback(() => {
    setTickerName("");
    setTickerCount(0);
    setDrawerType("name");
  }, []);

  const handleTickerClick = React.useCallback((data: Stock) => {
    setDrawerType("count");

    setTickerName(data.ticker ?? "");
    setSelectedStock(data);
  }, []);

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const brandName = !!value ? value : "";
    setTickerName(brandName);
  };
  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = Number(e.target.value);
    const count = isNaN(targetValue) ? 0 : targetValue;
    setTickerCount(count);
  };

  const handleSubmitClick = React.useCallback(() => {
    if (selectedStock) {
      resetData();

      addStocks({ ...selectedStock, count: tickerCount });
      isOpenChange(false);
    }
  }, [addStocks, isOpenChange, resetData, selectedStock, tickerCount]);

  const handleInputClear = React.useCallback((type: DrawerType) => {
    if (type === "name") {
      return setTickerName("");
    }

    return setTickerCount(0);
  }, []);

  const handleNameFocus = React.useCallback(() => {
    setDrawerType("name");
  }, []);

  const handleSelectedTickerClick = React.useCallback(
    (data: Stock) => {
      if (data.ticker && data.count) {
        isOpenChange(true);
        setTickerName(data.ticker);
        setTickerCount(data.count);
        setDrawerType("edit");
        setSelectedStock(data);
      }
    },
    [isOpenChange]
  );

  const handleDeleteClick = React.useCallback(() => {
    if (selectedStock) {
      removeStocks(selectedStock);
      resetData();
      return isOpenChange(false);
    }
  }, [isOpenChange, removeStocks, resetData, selectedStock]);

  const handleConfirmClick = React.useCallback(() => {
    editStocks({ ...selectedStock, count: tickerCount });
    resetData();
    return isOpenChange(false);
  }, [editStocks, isOpenChange, resetData, selectedStock, tickerCount]);

  return (
    <>
      <div className="flex h-full w-full flex-col pt-11">
        <Intro />
        <SelectedTickerList handleTickerClick={handleSelectedTickerClick} />
      </div>
      <TickerDrawer
        drawerType={drawerType}
        tickerCount={tickerCount}
        tickerName={tickerName}
        handleTickerClick={handleTickerClick}
        handleKeywordChange={handleKeywordChange}
        handleCountChange={handleCountChange}
        handleSubmitClick={handleSubmitClick}
        handleInputClear={handleInputClear}
        handleNameFocus={handleNameFocus}
        handleDeleteClick={handleDeleteClick}
        handleConfirmClick={handleConfirmClick}
      />
    </>
  );
});

export default TickerContent;
