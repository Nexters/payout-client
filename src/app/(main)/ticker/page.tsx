import Intro from "./_components/intro";
import Content from "./_components/content";
import { Drawer as DrawerPrimitive } from "@/components/ui/drawer";
import { TickerDrawer } from "./_components/ticker-drawer";

export default function TickerPage() {
  return (
    <DrawerPrimitive>
      <div className="flex h-full w-full flex-col">
        <Intro />
        <Content />
      </div>
      <TickerDrawer />
      <div
        className="sticky inset-x-0 bottom-4 flex w-full justify-center pt-12"
        style={{
          backgroundImage: "linear-gradient(0deg, var(--color-white) 52.78%, rgba(255, 255, 255, 0.00) 100%)",
        }}
      >
        <button className="mx-5 w-full rounded-lg bg-main-700 p-4">
          <p className="text-h5 text-white">Finish</p>
        </button>
      </div>
    </DrawerPrimitive>
  );
}
