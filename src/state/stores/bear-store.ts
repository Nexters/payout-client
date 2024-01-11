import { create } from "zustand";

export const useBearStore = create((set) => ({
  bears: 0,
  removeAllBears: () => set({ bears: 0 }),
}));
