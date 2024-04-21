import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getMonthlyDividends1 } from "@/api/generated/endpoint";

export const MonthlyDividendQueryKeys = createQueryKeys("monthly-dividend");

export const useMonthlyDividendMutation = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: MonthlyDividendQueryKeys._def,
    mutationFn: () => getMonthlyDividends1(id),
    onSuccess: (data) => {
      queryClient.setQueryData(MonthlyDividendQueryKeys._def, data);
    },
    throwOnError: true,
  });
};
