"use client";

import { Drawer as DrawerPrimitive } from "@/components/ui/drawer";
import TickerContent from "./_components/ticker-content";
import React from "react";
import { useDrawerStore } from "@/state/stores/stocks-store";

export default function TickerPage() {
  const { isOpen } = useDrawerStore();

  return (
    <DrawerPrimitive open={isOpen}>
      <TickerContent />
      <div
        className="fixed bottom-4 flex w-full justify-center pt-12"
        style={{
          backgroundImage: "linear-gradient(0deg, var(--color-white) 52.78%, rgba(255, 255, 255, 0.00) 100%)",
          maxWidth: 768,
        }}
      >
        <button className="mx-5 w-full rounded-lg bg-main-700 p-4">
          <p className="text-h5 text-white">Finish</p>
        </button>
      </div>
    </DrawerPrimitive>
  );
}
