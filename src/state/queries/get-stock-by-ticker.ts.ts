import { getStockByTicker } from "@/api/generated/endpoint";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import { StockDetailResponse } from "../../api/generated/endpoint.schemas";

export const stockByTickerQueryKeys = createQueryKeys("stock-by-ticker");

export const useStockByTickerQuery = (tickerName: string) => {
  const requestClient = async (): Promise<StockDetailResponse> => {
    const { data } = await getStockByTicker(tickerName);
    return data;
  };

  return useQuery({
    queryKey: [stockByTickerQueryKeys._def, tickerName],
    queryFn: () => requestClient(),
    staleTime: Infinity,
    gcTime: Infinity,
    retry: 1,
  });
};
