"use client";

import Toast from "@/components/common/toast/toast";
import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "sonner";

const TickerList = React.memo(() => {
  const onTickerDelete = React.useCallback(() => {
    toast.custom((t) => <Toast t={t} title={`You deleted ${"GOOGLE"}`} isRevertable={true} />);
  }, []);

  return (
    <div className="flex h-full w-full flex-1 flex-col items-start">
      <div className="flex w-full flex-1 flex-col items-start gap-4">
        <div className="flex w-full items-center justify-between ">
          <p className="text-2xl font-bold">GOOGLE</p>
          <Button onClick={onTickerDelete}>Delete</Button>
        </div>
        <div className="flex w-full items-center justify-between ">
          <p className="text-2xl font-bold">GOOGLE</p>
          <Button onClick={onTickerDelete}>Delete</Button>
        </div>
        <div className="flex w-full items-center justify-between ">
          <p className="text-2xl font-bold">GOOGLE</p>
          <Button onClick={onTickerDelete}>Delete</Button>
        </div>
        <div className="flex w-full items-center justify-between ">
          <p className="text-2xl font-bold">GOOGLE</p>
          <Button onClick={onTickerDelete}>Delete</Button>
        </div>
        <div className="flex w-full items-center justify-between ">
          <p className="text-2xl font-bold">GOOGLE</p>
          <Button onClick={onTickerDelete}>Delete</Button>
        </div>
      </div>
    </div>
  );
});

export default TickerList;
