import { Button } from "@/components/ui/button";
import { useDrawerStore } from "@/state/stores/drawer-store";
import { useStocksStore } from "@/state/stores/stocks-store";
import { event } from "@/utils/gtag";
import { Plus } from "lucide-react";
import React from "react";

const Intro = () => {
  const { isDrawerOpenChange } = useDrawerStore();
  const { stocks } = useStocksStore();
  const hasStock = stocks.length > 0;

  const onAddStockClick = React.useCallback(() => {
    isDrawerOpenChange(true);
    event({
      action: "Add Stock Button Click",
    });
  }, [isDrawerOpenChange]);

  return (
    <>
      <h2 className="px-4 pt-4 text-h2">
        You added <span className="text-main-700">{stocks.length}</span> {`${stocks.length > 1 ? "stocks" : "stock"}`}.
      </h2>
      <div className="sticky top-4 flex flex-col justify-start bg-white px-4 pb-4 pt-10 text-lg">
        <Button onClick={onAddStockClick} className="flex w-full items-center justify-start gap-4 pl-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-grey-100 text-grey-500">
            <Plus />
          </div>
          <p className="text-h5 text-grey-700">Add Stock</p>
        </Button>
      </div>
      <div className={`${hasStock && "h-px border-b border-b-grey-100"}`} />
    </>
  );
};

export default Intro;
