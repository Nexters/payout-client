import { StockResponse } from "@/api/generated/endpoint.schemas";
import { create } from "zustand";

interface StocksStore {
  stocks: StockResponse[];
  addStocks: (newStocks: StockResponse) => void;
  removeStocks: (stockToRemove: StockResponse) => void;
  removeAllStocks: () => void;
}

export const useStocksStore = create<StocksStore>((set) => ({
  stocks: [],
  addStocks: (newStocks) => set((state) => ({ stocks: [...state.stocks, newStocks] })),
  removeStocks: (stockToRemove) =>
    set((state) => ({ stocks: state.stocks.filter((stock) => stock !== stockToRemove) })),
  removeAllStocks: () => set({ stocks: [] }),
}));
