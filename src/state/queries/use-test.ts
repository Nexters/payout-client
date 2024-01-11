import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";

export const testQueryKeys = createQueryKeys("test");

export const useTest = (initialData?: any, select?: any) => {
  return useQuery({
    queryKey: testQueryKeys._def,
    queryFn: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data: "test" });
        }, 1000);
      });
    },
    staleTime: Infinity,
    gcTime: Infinity,
    initialData,
    select,
  });
};
