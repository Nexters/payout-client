"use client";

import Intro from "@/app/(main)/ticker/_components/intro";
import { TickerDrawer } from "@/app/(main)/ticker/_components/ticker-drawer";
import { Dialog } from "@/components/common/dialog/dialog";
import Toast from "@/components/common/toast/toast";
import { Stock, useStocksStore } from "@/state/stores/stocks-store";
import React from "react";
import { toast } from "sonner";
import { DrawerOverlay, Drawer as DrawerPrimitive } from "@/components/ui/drawer";
import { Dialog as DialogPrimitive } from "@/components/ui/dialog";
import { useDrawerStore } from "@/state/stores/drawer-store";
import { useDialogStore } from "@/state/stores/dialog-store";
import TickerList from "./ticker-list";

export type DrawerType = "name" | "count" | "edit";

const MAX_TICKER_COUNT = 15;

const TickerContent = React.memo(() => {
  const { stocks, addStock, removeStock, editStock } = useStocksStore();
  const { isDrawerOpen, isDrawerOpenChange } = useDrawerStore();
  const { isDialogOpen, isDialogOpenChange } = useDialogStore();

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
    if (stocks.length > MAX_TICKER_COUNT - 1) {
      return isDialogOpenChange(true);
    }

    if (selectedStock) {
      resetData();

      addStock({ ...selectedStock, count: tickerCount });
      isDrawerOpenChange(false);
    }
  }, [addStock, isDialogOpenChange, isDrawerOpenChange, resetData, selectedStock, stocks.length, tickerCount]);

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
        isDrawerOpenChange(true);
        setTickerName(data.ticker);
        setTickerCount(data.count);
        setDrawerType("edit");
        setSelectedStock(data);
      }
    },
    [isDrawerOpenChange]
  );

  const handleDeleteClick = React.useCallback(() => {
    const prevStock = selectedStock;
    if (selectedStock) {
      removeStock(selectedStock);
      resetData();
      toast.custom((t) => (
        <Toast
          t={t}
          title={`You deleted ${selectedStock.ticker}`}
          isRevertable
          handleUndo={() => {
            prevStock && addStock(prevStock);
          }}
        />
      ));
      return isDrawerOpenChange(false);
    }
  }, [addStock, isDrawerOpenChange, removeStock, resetData, selectedStock]);

  const handleConfirmClick = React.useCallback(() => {
    editStock({ ...selectedStock, count: tickerCount });
    resetData();
    isDrawerOpenChange(false);
  }, [editStock, isDrawerOpenChange, resetData, selectedStock, tickerCount]);

  return (
    <DrawerPrimitive
      open={isDrawerOpen}
      onClose={() => {
        isDrawerOpenChange(false);
      }}
    >
      <div className="flex h-full w-full flex-col pt-2.5">
        <Intro />
        <TickerList data={stocks} hasShares onClick={handleSelectedTickerClick} />
      </div>
      <DrawerOverlay onClick={() => isDrawerOpenChange(false)} />
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

      <DialogPrimitive open={isDialogOpen}>
        <Dialog title={`You can add up to ${MAX_TICKER_COUNT} stocks.`} />
      </DialogPrimitive>
    </DrawerPrimitive>
  );
});

export default TickerContent;
