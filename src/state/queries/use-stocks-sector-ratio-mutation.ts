import { findSectorRatios } from "@/api/generated/endpoint";
import { SectorRatioResponse } from "@/api/generated/endpoint.schemas";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useStocksStore } from "../stores/stocks-store";
import React from "react";

export const enteredStocksQueryKeys = createQueryKeys("entered-stocks");

export const useStocksSectorRatioMutation = () => {
  const { stocks } = useStocksStore();

  const tickerShares = React.useMemo(
    () =>
      stocks.map((stock) => ({
        share: stock.count,
        ticker: stock.ticker ?? "",
      })),
    [stocks]
  );

  const requestClient = async (): Promise<SectorRatioResponse[]> => {
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
    throwOnError: true,
  });
};
