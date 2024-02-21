import { Stock } from "@/api/stocks/getStocks";
import { create } from "zustand";

interface StocksStore {
  stocks: Stock[];
  addStocks: (newStocks: Stock[]) => void;
  removeStocks: (stockToRemove: Stock) => void;
  removeAllStocks: () => void;
}

export const useStocksStore = create<StocksStore>((set) => ({
  stocks: [],
  addStocks: (newStocks) => set((state) => ({ stocks: [...state.stocks, ...newStocks] })),
  removeStocks: (stockToRemove) =>
    set((state) => ({ stocks: state.stocks.filter((stock) => stock !== stockToRemove) })),
  removeAllStocks: () => set({ stocks: [] }),
}));
