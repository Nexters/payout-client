import { Drawer as DrawerPrimitive } from "@/components/ui/drawer";
import { TickerDrawer } from "./_components/ticker-drawer";
import Intro from "./_components/intro";
import TickerList from "./_components/ticker-list";

export default function TickerPage() {
  return (
    <DrawerPrimitive>
      <div className="flex h-full w-full flex-col pt-11">
        <Intro />
        {/* TODO Ticker state */}
        <TickerList />

      </div>
      <TickerDrawer />
      <div className="fixed inset-x-0 bottom-4 flex w-full justify-center pt-12" 
        style={{
          backgroundImage: "linear-gradient(0deg, var(--color-white) 52.78%, rgba(255, 255, 255, 0.00) 100%)",
        }}>
        <button className="mx-5 w-full rounded-lg bg-main-700 p-4">
          <p className="text-h5 text-white">Finish</p>
        </button>
      </div>
    </DrawerPrimitive>
  );
};

