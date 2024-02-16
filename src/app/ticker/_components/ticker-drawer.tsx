"use client";

import { DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import Input from "@/components/ui/input";
import React, { useMemo, useState } from "react";
import TickerList from "./ticker-list";

type DrawerType = "name" | "count";

export const TickerDrawer = React.memo(() => {
  const [tickerName, setTickerName] = useState<string>("");
  const [drawerType, setDrawerType] = useState<DrawerType>("name");
  const [tickerCount, setTickerCount] = useState<number>(0);

  const handleTickerClick = React.useCallback((name: string) => {
    setDrawerType("count");
    setTickerName(name);
  }, []);

  const isSubmittable = useMemo(() => {
    return drawerType === "count" && tickerCount > 0;
  }, [drawerType, tickerCount]);

  return (
    <DrawerContent className="mx-auto h-[calc(100%-100px)] max-w-[--max-width] ">
      <DrawerHeader>
        <DrawerTitle className="mb-10">Search by ticker or company.</DrawerTitle>
        <Input
          value={tickerName}
          label="Ticker"
          type="string"
          placeholder="Search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTickerName(e.target.value)}
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
        <TickerList onClick={handleTickerClick} />
      ) : (
        <DrawerFooter>
          <DrawerClose disabled={!isSubmittable}>
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
