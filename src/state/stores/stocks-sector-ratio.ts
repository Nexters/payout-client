import { SectorRatioResponse } from "@/api/generated/endpoint.schemas";
import { create } from "zustand";

interface StocksSectorRatioStore {
  stockSectorRatio: SectorRatioResponse[];
  update: (newData: SectorRatioResponse[]) => void;
}

export const useStocksSectorRatioStore = create<StocksSectorRatioStore>((set) => ({
  stockSectorRatio: [],
  update: (newData: SectorRatioResponse[]) => set(() => ({ stockSectorRatio: newData })),
}));
