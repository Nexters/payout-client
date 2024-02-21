"use client";

import { DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import Input from "@/components/ui/input";
import React from "react";
import TickerList from "./ticker-list";
import { useStocksStore } from "@/state/stores/stocks-store";
import useDebounce from "@/hooks/use-debounce";
import { useStocks } from "@/state/queries/useStocks";
import { StockResponse } from "@/api/generated/endpoint.schemas";

type DrawerType = "name" | "count";

export const TickerDrawer = React.memo(() => {
  const { addStocks } = useStocksStore();
  const [tickerName, setTickerName] = React.useState<string>("");
  const [tickerCount, setTickerCount] = React.useState<number>(0);
  const [drawerType, setDrawerType] = React.useState<DrawerType>("name");
  const [selectedStock, setSelectedStock] = React.useState<StockResponse>();
  const [searchStocks, setSearchStocks] = React.useState<StockResponse[]>([]);

  const debouncedTickerName = useDebounce(tickerName, 1000); // 디바운스 적용
  const { fetchStocks } = useStocks();

  const handleTickerClick = React.useCallback((data: StockResponse) => {
    setDrawerType("count");

    setTickerName(data.ticker ?? "");
    setSelectedStock(data);
  }, []);

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const brandName = !!value ? value : "";
    setTickerName(brandName);
  };

  const isSubmittable = React.useMemo(() => {
    return drawerType === "count" && tickerCount > 0;
  }, [drawerType, tickerCount]);

  const handleSubmitClick = () => {
    if (selectedStock) {
      setTickerName("");
      setTickerCount(0);
      setDrawerType("name");

      addStocks(selectedStock);
    }
  };

  React.useEffect(() => {
    if (debouncedTickerName) {
      (async () => {
        const response = await fetchStocks(debouncedTickerName);
        setSearchStocks(response);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedTickerName]);

  return (
    <DrawerContent className="mx-auto h-[calc(100%-100px)] max-w-[--max-width] ">
      <DrawerHeader>
        <DrawerTitle className="mb-10">Search by ticker or company.</DrawerTitle>
        <Input
          value={tickerName}
          label="Ticker"
          type="string"
          placeholder="Search"
          onChange={handleChangeKeyword}
          onFocus={() => setDrawerType("name")}
          clearInput={() => setTickerName("")}
        />

        {drawerType === "count" && (
          <Input
            value={String(tickerCount)}
            label="Shares"
            type="number"
            errorDescription="You can enter 1 or more."
            placeholder="0"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const targetValue = Number(e.target.value);
              const count = isNaN(targetValue) ? 0 : targetValue;
              setTickerCount(count);
            }}
            clearInput={() => setTickerCount(0)}
          />
        )}
      </DrawerHeader>

      {drawerType === "name" ? (
        <TickerList data={searchStocks} onClick={handleTickerClick} />
      ) : (
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
    </DrawerContent>
  );
});
