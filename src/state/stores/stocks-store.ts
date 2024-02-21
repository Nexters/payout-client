import { StockResponse } from "@/api/generated/endpoint.schemas";
import { create } from "zustand";

export interface Stock extends StockResponse {
  count: number;
}

interface StocksStore {
  stocks: Stock[];
  addStocks: (newStocks: Stock) => void;
  removeStocks: (stockToRemove: Stock) => void;
  removeAllStocks: () => void;
  editStocks: (editedStock: Stock) => void;
}

export const useStocksStore = create<StocksStore>((set) => ({
  stocks: [],
  addStocks: (newStocks) => set((state) => ({ stocks: [...state.stocks, newStocks] })),
  removeStocks: (stockToRemove) =>
    set((state) => ({ stocks: state.stocks.filter((stock) => stock !== stockToRemove) })),
  removeAllStocks: () => set({ stocks: [] }),
  editStocks: (editedStock) =>
    set((state) => ({
      stocks: state.stocks.map((stock) =>
        stock.stockId === editedStock.stockId ? { ...stock, count: editedStock.count } : stock
      ),
    })),
}));

interface DrawerStore {
  isOpen: boolean;
  isOpenChange: (isOpen: boolean) => void;
}

export const useDrawerStore = create<DrawerStore>((set) => ({
  isOpen: false,
  isOpenChange: (isOpen) => set({ isOpen: isOpen }),
}));
