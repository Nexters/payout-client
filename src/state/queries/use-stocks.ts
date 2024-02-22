import { searchStock } from "@/api/generated/endpoint";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";

export const filteredStocksQueryKeys = createQueryKeys("filtered-stocks");

export const useStocksQuery = (keyword: string) => {
  const requestClient = async () => {
    if (keyword) {
      const { data } = await searchStock({ keyword, pageNumber: 1, pageSize: 20 });
      return data.map((item) => ({
        ...item,
        count: 0,
      }));
    }

    return [];
  };

  return useQuery({
    queryKey: [filteredStocksQueryKeys._def, keyword],
    queryFn: () => requestClient(),
    staleTime: Infinity,
    gcTime: Infinity,
    retry: 1,
  });
};
