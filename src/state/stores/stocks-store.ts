import { StockResponse } from "@/api/generated/endpoint.schemas";
import { create } from "zustand";

export interface Stock extends StockResponse {
  count: number;
}

interface StocksStore {
  stocks: Stock[];
  addStocks: (newStocks: Stock) => void;
  removeStocks: (stockToRemove: Stock) => void;
  removeAllStock: () => void;
  editStocks: (editedStock: Stock) => void;
}

export const useStocksStore = create<StocksStore>((set) => ({
  stocks: [],
  addStocks: (newStocks) => set((state) => ({ stocks: [...state.stocks, newStocks] })),
  removeStocks: (stockToRemove) =>
    set((state) => ({ stocks: state.stocks.filter((stock) => stock !== stockToRemove) })),
  removeAllStock: () => set({ stocks: [] }),
  editStocks: (editedStock) =>
    set((state) => ({
      stocks: state.stocks.map((stock) =>
        stock.stockId === editedStock.stockId ? { ...stock, count: editedStock.count } : stock
      ),
    })),
}));
