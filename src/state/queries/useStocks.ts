import { Stock, getStocks } from "@/api/stocks/getStocks";
import { queryClient } from "@/app/global-provider";
import { createQueryKeys } from "@lukemorales/query-key-factory";

export const testQueryKeys = createQueryKeys("test");

export const useStocks = () => {
  const requestClient = (keyword: string): Promise<Stock[]> => getStocks(keyword);

  return {
    fetchStocks: async (keyword: string) => {
      return queryClient.fetchQuery({
        queryKey: [testQueryKeys._def, keyword],
        queryFn: () => requestClient(keyword),
        staleTime: Infinity,
        gcTime: Infinity,
        retry: 1,
      });
    },
  };
};
