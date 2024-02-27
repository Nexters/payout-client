import { findSectorRatios } from "@/api/generated/endpoint";
import { SectorRatioResponse, TickerShare } from "@/api/generated/endpoint.schemas";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";

export const enteredStocksQueryKeys = createQueryKeys("entered-stocks");

export const useStocksSectorRatioMutation = (): UseMutationResult<SectorRatioResponse[], unknown, TickerShare[]> => {
  const requestClient = async (tickerShares: TickerShare[]): Promise<SectorRatioResponse[]> => {
    const response = await findSectorRatios({ tickerShares });
    return response.data;
  };
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: enteredStocksQueryKeys._def,
    mutationFn: requestClient,
    onSuccess: (data) => {
      queryClient.setQueryData(enteredStocksQueryKeys._def, data);
    },
  });
};
