import { useDrawerStore } from "@/state/stores/stocks-store";
import { Plus } from "lucide-react";
import React from "react";

const Intro = () => {
  const { isOpenChange } = useDrawerStore();
  return (
    <div className="border-b border-b-grey-100 px-4">
      <h2 className="pt-4 text-h2">
        You Added <span className="text-main-700">{0}</span> Tickers.
      </h2>
      <div className="flex flex-col justify-start pb-4 pt-10 text-lg">
        <button
          onClick={() => {
            isOpenChange(true);
          }}
          className="flex w-full cursor-pointer items-center justify-start gap-4"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-[#8B95A1]">
            <Plus />
          </div>
          <p>Add Ticker</p>
        </button>
      </div>
    </div>
  );
};

export default Intro;
