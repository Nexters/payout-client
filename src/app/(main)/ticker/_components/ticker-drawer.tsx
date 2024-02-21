"use client";

import { DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import Input from "@/components/ui/input";
import React from "react";
import TickerList from "./ticker-list";
import useDebounce from "@/hooks/use-debounce";
import { useStocks } from "@/state/queries/useStocks";
import { DrawerType } from "./ticker-content";
import { Stock, useStocksStore } from "@/state/stores/stocks-store";

interface TickerDrawerProps {
  tickerName: string;
  tickerCount: number;
  drawerType: DrawerType;
  handleTickerClick: (data: Stock) => void;
  handleKeywordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitClick: () => void;
  handleInputClear: (type: DrawerType) => void;
  handleNameFocus: () => void;
  handleDeleteClick: () => void;
  handleConfirmClick: () => void;
}

export const TickerDrawer = React.memo(
  ({
    drawerType,
    tickerCount,
    tickerName,
    handleTickerClick,
    handleKeywordChange,
    handleCountChange,
    handleSubmitClick,
    handleInputClear,
    handleNameFocus,
    handleDeleteClick,
    handleConfirmClick,
  }: TickerDrawerProps) => {
    const [searchStocks, setSearchStocks] = React.useState<Stock[]>([]);
    const { removeStocks } = useStocksStore();

    const debouncedTickerName = useDebounce(tickerName, 1000); // 디바운스 적용
    const { fetchStocks } = useStocks();

    const isSubmittable = React.useMemo(() => {
      return drawerType === "count" && tickerCount > 0;
    }, [drawerType, tickerCount]);

    const title = React.useMemo(() => {
      switch (drawerType) {
        case "name":
          return "Search by ticker or company.";
        case "count":
          return "Number of shares owned.";
        case "edit":
          return "Edit or Delete the stock info.";

        default:
          return "";
      }
    }, [drawerType]);

    /**
     * 검색 API
     */
    React.useEffect(() => {
      if (debouncedTickerName) {
        (async () => {
          const { data } = await fetchStocks(debouncedTickerName);

          setSearchStocks(() =>
            data.map((item) => {
              return {
                ...item,
                count: 0,
              };
            })
          );
        })();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedTickerName]);

    return (
      <DrawerContent className="mx-auto h-[calc(100%-100px)] max-w-[--max-width] ">
        <DrawerHeader>
          <DrawerTitle className="mb-10">{title}</DrawerTitle>
          <Input
            value={tickerName}
            label="Ticker"
            type="string"
            placeholder="Search"
            onChange={handleKeywordChange}
            onFocus={handleNameFocus}
            disabled={drawerType === "edit"}
            clearInput={() => handleInputClear("name")}
          />

          {drawerType !== "name" && (
            <Input
              value={String(tickerCount)}
              label="Shares"
              type="number"
              errorDescription="You can enter 1 or more."
              placeholder="0"
              onChange={handleCountChange}
              clearInput={() => handleInputClear("count")}
            />
          )}
        </DrawerHeader>

        {drawerType === "name" && <TickerList data={searchStocks} onClick={handleTickerClick} />}

        {drawerType === "count" && (
          <DrawerFooter>
            <DrawerClose onClick={handleSubmitClick} disabled={!isSubmittable}>
              <div
                className="flex h-14 w-full items-center justify-center rounded-lg bg-main-700 font-bold text-white"
                style={{
                  backgroundColor: isSubmittable ? "#4F6AFC" : "#7692DA",
                  color: isSubmittable ? "#fff" : "rgba(255, 255, 255, 0.40)",
                }}
              >
                Complete
              </div>
            </DrawerClose>
          </DrawerFooter>
        )}

        {drawerType === "edit" && (
          <DrawerFooter className="flex flex-row">
            <DrawerClose className="h-14 w-full" onClick={handleDeleteClick}>
              <div className="flex h-full items-center justify-center rounded-lg bg-main-50 font-bold text-main-900">
                Delete
              </div>
            </DrawerClose>
            <DrawerClose className="h-14 w-full" onClick={handleConfirmClick}>
              <div className="flex h-full items-center justify-center rounded-lg bg-main-700 font-bold text-white">
                Confirm
              </div>
            </DrawerClose>
          </DrawerFooter>
        )}
      </DrawerContent>
    );
  }
);
