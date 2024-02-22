import { findSectorRatios } from "@/api/generated/endpoint";
import { TickerShare } from "@/api/generated/endpoint.schemas";
import { queryClient } from "@/app/global-provider";
import { createQueryKeys } from "@lukemorales/query-key-factory";

export const testQueryKeys = createQueryKeys("use-stocks-sector-ratio");

export const useStocksSectorRatio = () => {
  const requestClient = (tickerShares: TickerShare[]) => findSectorRatios({ tickerShares });

  return {
    fetchStocksSectorRatio: async (tickerShares: TickerShare[]) => {
      return queryClient.fetchQuery({
        queryKey: [testQueryKeys._def, tickerShares],
        queryFn: () => requestClient(tickerShares),
        staleTime: Infinity,
        gcTime: Infinity,
        retry: 1,
      });
    },
  };
};
