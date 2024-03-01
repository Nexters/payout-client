"use client";

import { DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import Input from "@/components/ui/input";
import React from "react";
import TickerList from "./ticker-list";
import useDebounce from "@/hooks/use-debounce";
import { useFilteredStocksQuery } from "@/state/queries/use-filtered-stocks-query";
import { DrawerType } from "./ticker-content";
import { Stock } from "@/state/stores/stocks-store";
import { exhaustiveCheck } from "@/utils/exhaustive-check";

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
    const debouncedTickerName = useDebounce(tickerName, 400); // 디바운스 적용
    const { data, isLoading } = useFilteredStocksQuery(debouncedTickerName);
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
          exhaustiveCheck(drawerType); // ERROR!!
      }
    }, [drawerType]);

    return (
      <DrawerContent className="mx-auto h-[calc(100%-100px)] max-w-screen-md">
        <DrawerHeader className="pb-0">
          <DrawerTitle className="mb-10 text-h3 font-semibold text-grey-900">{title}</DrawerTitle>
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
            <div className="mt-5">
              <Input
                value={tickerCount === 0 ? "" : String(tickerCount)}
                label="Shares"
                type="number"
                errorDescription="You can enter 1 or more."
                placeholder="0"
                onChange={handleCountChange}
                clearInput={() => handleInputClear("count")}
              />
            </div>
          )}
        </DrawerHeader>

        {isLoading ? (
          <div className="flex h-full w-full flex-1 flex-col items-start gap-5 overflow-scroll px-5 pt-8">
            {Array.from({ length: 10 }, (_, idx) => (
              <div className="flex " key={idx}>
                <div className="mr-4 h-10 w-10 rounded-full bg-grey-50" />
                <div className="flex flex-col">
                  <div className="mb-1 rounded-sm bg-grey-50" style={{ width: 54, height: 19 }} />
                  <div className=" rounded-sm bg-grey-50" style={{ width: 220, height: 17 }} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          drawerType === "name" &&
          !!data && <TickerList data={data} tickerName={tickerName} onClick={handleTickerClick} />
        )}

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
