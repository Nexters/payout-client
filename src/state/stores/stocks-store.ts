import { StockResponse } from "@/api/generated/endpoint.schemas";
import { create } from "zustand";

export interface Stock extends StockResponse {
  count: number;
}

interface StocksStore {
  stocks: Stock[];
  addStock: (newStocks: Stock) => void;
  removeStock: (stockToRemove: Stock) => void;
  removeAllStocks: () => void;
  editStock: (editedStock: Stock) => void;
}

export const useStocksStore = create<StocksStore>((set) => ({
  stocks: [],
  addStock: (newStocks) => set((state) => ({ stocks: [...state.stocks, newStocks] })),
  removeStock: (stockToRemove) => set((state) => ({ stocks: state.stocks.filter((stock) => stock !== stockToRemove) })),
  removeAllStocks: () => set({ stocks: [] }),
  editStock: (editedStock) =>
    set((state) => ({
      stocks: state.stocks.map((stock) =>
        stock.stockId === editedStock.stockId ? { ...stock, count: editedStock.count } : stock
      ),
    })),
}));
