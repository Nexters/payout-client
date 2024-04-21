import { getSectorRatios } from "@/api/generated/endpoint";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const enteredStocksQueryKeys = createQueryKeys("entered-stocks");

export const useStocksSectorRatioMutation = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: enteredStocksQueryKeys._def,
    mutationFn: () => getSectorRatios(id),
    onSuccess: (data) => {
      queryClient.setQueryData(enteredStocksQueryKeys._def, data);
    },
    throwOnError: true,
  });
};
