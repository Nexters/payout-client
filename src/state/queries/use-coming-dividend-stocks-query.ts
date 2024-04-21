import { getUpComingDividendStocks } from "@/api/generated/endpoint";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import { GetUpComingDividendStocksSector, UpcomingDividendResponse } from "../../api/generated/endpoint.schemas";

export const comingDividendStocksQueryKeys = createQueryKeys("coming-dividend-stocks");

export const useComingDividendStocksQuery = (sector: GetUpComingDividendStocksSector) => {
  const requestClient = async (): Promise<UpcomingDividendResponse> => {
    const { data } = await getUpComingDividendStocks({ sector, pageNumber: 1, pageSize: 5 });
    return data;
  };

  return useQuery({
    queryKey: [comingDividendStocksQueryKeys._def, sector],
    queryFn: () => requestClient(),
    staleTime: Infinity,
    gcTime: Infinity,
    retry: 1,
    throwOnError: true,
  });
};
