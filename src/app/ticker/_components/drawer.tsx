"use client";

import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import React from "react";

export const TickerDrawer = React.memo(() => {
  return (
    <DrawerContent className="mx-auto h-[calc(100%-100px)] max-w-[--max-width] ">
      <DrawerHeader>
        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
        <DrawerDescription>This action cannot be undone.</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <DrawerClose>
          <div className="flex h-14 w-full items-center justify-center rounded-lg bg-[#333D4B] font-bold text-white">
            Complete
          </div>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  );
});
