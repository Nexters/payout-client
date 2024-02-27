"use client";

import { Button } from "@/components/ui/button";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useDialogStore } from "@/state/stores/dialog-store";
import React from "react";

interface DialogProps {
  title: string;
}
export const Dialog = React.memo(({ title }: DialogProps) => {
  const { isDialogOpenChange } = useDialogStore();
  return (
    <DialogContent className="w-4/5 rounded-xl bg-white p-5">
      <DialogHeader>
        <DialogTitle className="my-5 text-h5">{title}</DialogTitle>
      </DialogHeader>
      <DialogFooter>
        <Button className="mt-5 h-12 rounded-lg bg-main-700 py-4" onClick={() => isDialogOpenChange(false)}>
          <DialogDescription className="text-h6 text-white">Ok</DialogDescription>
        </Button>
      </DialogFooter>
    </DialogContent>
  );
});
