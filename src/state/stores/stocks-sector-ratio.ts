import { SectorRatioResponse } from "@/api/generated/endpoint.schemas";
import { create } from "zustand";

interface StocksSectorRatioStore {
  stockSectorRatio: SectorRatioResponse[];
  setStockSectorRatio: (newData: SectorRatioResponse[]) => void;
}

export const useStocksSectorRatioStore = create<StocksSectorRatioStore>((set) => ({
  stockSectorRatio: [],
  setStockSectorRatio: (newData: SectorRatioResponse[]) => set(() => ({ stockSectorRatio: newData })),
}));
