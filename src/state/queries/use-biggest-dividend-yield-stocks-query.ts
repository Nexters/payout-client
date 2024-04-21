import { getBiggestDividendYieldStocks } from "@/api/generated/endpoint";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import { GetBiggestDividendYieldStocksSector, StockDividendYieldResponse } from "../../api/generated/endpoint.schemas";

export const biggestDividendYieldStocksQueryKeys = createQueryKeys("biggest-dividend-yield-stocks");

export const useBiggestDividendYieldStocksQuery = (sector: GetBiggestDividendYieldStocksSector) => {
  const requestClient = async (): Promise<StockDividendYieldResponse> => {
    const { data } = await getBiggestDividendYieldStocks({ sector, pageNumber: 1, pageSize: 5 });
    return data;
  };

  return useQuery({
    queryKey: [biggestDividendYieldStocksQueryKeys._def, sector],
    queryFn: () => requestClient(),
    staleTime: Infinity,
    gcTime: Infinity,
    retry: 1,
    throwOnError: true,
  });
};
