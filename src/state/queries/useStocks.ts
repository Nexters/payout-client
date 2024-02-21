import { searchStock } from "@/api/generated/endpoint";
import { queryClient } from "@/app/global-provider";
import { createQueryKeys } from "@lukemorales/query-key-factory";

export const testQueryKeys = createQueryKeys("test");

export const useStocks = () => {
  const requestClient = (keyword: string) => searchStock({ keyword, pageNumber: 1, pageSize: 20 });

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
