"use client";

import {
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import React from "react";

interface StockInfoDrawerProps {
  handleInfoClick: () => void;
}

export const StockInfoDrawer = React.memo(({ handleInfoClick }: StockInfoDrawerProps) => {
  return (
    <DrawerContent className="mx-auto  max-w-[--max-width] ">
      <DrawerHeader>
        <DrawerTitle className="mb-6 flex flex-col">
          {"Latest Price"}
          <span className="mt-1 text-body3 text-gray-600">
            {`Last updated `}
            <span className="text-body3 text-main-700">2024/01/27 21:38</span>
          </span>
        </DrawerTitle>
        <DrawerDescription>
          <span className="text-body1 text-gray-700">
            Please note that Payout’s stock information may not always align with the real-time data as they are updated
            everyday at midnight.
          </span>
        </DrawerDescription>
      </DrawerHeader>

      <DrawerFooter>
        <DrawerClose onClick={handleInfoClick}>
          <div className="flex w-full items-center justify-center rounded-lg bg-main-700 p-4 text-h6  text-white">
            Confirm
          </div>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  );
});
