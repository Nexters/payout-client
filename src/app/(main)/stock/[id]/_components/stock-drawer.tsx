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
    <DrawerContent className="mx-auto max-w-screen-md">
      <DrawerHeader>
        <DrawerTitle className="mb-6 flex flex-col">
          <p className=" text-h3 font-semibold text-grey-900">{"Latest Price"}</p>
          <p className="mt-1 ">
            <span className="text-body3 text-grey-600">{`Last updated `}</span>
            <span className="text-body3 text-main-700">2024/01/27 21:38</span>
          </p>
        </DrawerTitle>
        <DrawerDescription>
          <span className="text-body1 text-grey-700">
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
