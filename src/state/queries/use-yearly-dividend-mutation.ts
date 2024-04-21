import { getYearlyDividends1 } from "@/api/generated/endpoint";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const yearlyDividendQueryKeys = createQueryKeys("yearly-dividend");

export const useYearlyDividendMutation = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: yearlyDividendQueryKeys._def,
    mutationFn: () => getYearlyDividends1(id),
    onSuccess: (data) => {
      queryClient.setQueryData(yearlyDividendQueryKeys._def, data);
    },
    throwOnError: true,
  });
};
