import { Plus } from "lucide-react";
import { Drawer as DrawerPrimitive, DrawerTrigger } from "@/components/ui/drawer";
import { TickerDrawer } from "./_components/drawer";

const TickerPage = () => {
  return (
    <DrawerPrimitive nested shouldScaleBackground>
      <div className="mx-auto flex h-full w-full max-w-[--max-width] flex-col py-6 text-2xl font-bold">
        <p>You Added 0 Tickers</p>
        <div className="flex flex-1 flex-col justify-start py-10 text-lg">
          <DrawerTrigger asChild>
            <div className="flex w-full cursor-pointer items-center justify-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-[#8B95A1]">
                <Plus />
              </div>
              <p>Add Ticker</p>
            </div>
          </DrawerTrigger>
        </div>
      </div>
      <TickerDrawer />
    </DrawerPrimitive>
  );
};

export default TickerPage;
