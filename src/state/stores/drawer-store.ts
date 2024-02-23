import { create } from "zustand";

interface DrawerStore {
  isDrawerOpen: boolean;
  isDrawerOpenChange: (isDrawerOpen: boolean) => void;
}

export const useDrawerStore = create<DrawerStore>((set) => ({
  isDrawerOpen: false,
  isDrawerOpenChange: (isDrawerOpen) => set({ isDrawerOpen: isDrawerOpen }),
}));
