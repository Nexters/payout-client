import { getUpComingDividendStocks } from "@/api/generated/endpoint";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import { UpcomingDividendResponse } from "../../api/generated/endpoint.schemas";

export const comingDividendStocksQueryKeys = createQueryKeys("coming-dividend-stocks");

export const useComingDividendStocksQuery = () => {
  const requestClient = async (): Promise<UpcomingDividendResponse> => {
    const { data } = await getUpComingDividendStocks({ pageNumber: 1, pageSize: 5 });
    return data;
  };

  return useQuery({
    queryKey: [comingDividendStocksQueryKeys._def],
    queryFn: () => requestClient(),
    staleTime: Infinity,
    gcTime: Infinity,
    retry: 1,
  });
};
