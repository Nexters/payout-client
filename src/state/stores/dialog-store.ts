import { create } from "zustand";

interface DialogStore {
  isDialogOpen: boolean;
  isDialogOpenChange: (isDialogOpen: boolean) => void;
}

export const useDialogStore = create<DialogStore>((set) => ({
  isDialogOpen: false,
  isDialogOpenChange: (isDialogOpen) => set({ isDialogOpen: isDialogOpen }),
}));
