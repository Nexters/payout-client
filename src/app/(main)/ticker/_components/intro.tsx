import { Button } from "@/components/ui/button";
import { useDrawerStore } from "@/state/stores/drawer-store";
import { useStocksStore } from "@/state/stores/stocks-store";
import { Plus } from "lucide-react";
import React from "react";

const Intro = () => {
  const { isDrawerOpenChange } = useDrawerStore();
  const { stocks } = useStocksStore();
  return (
    <div className="border-b border-b-grey-100 px-4">
      <h2 className="pt-4 text-h2">
        You Added <span className="text-main-700">{stocks.length}</span> Tickers.
      </h2>
      <div className="flex flex-col justify-start pb-4 pt-10 text-lg">
        <Button
          onClick={() => {
            isDrawerOpenChange(true);
          }}
          className="flex w-full items-center justify-start gap-4 pl-0"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500">
            <Plus />
          </div>
          <p className="text-h5 text-gray-700">Add Ticker</p>
        </Button>
      </div>
    </div>
  );
};

export default Intro;
