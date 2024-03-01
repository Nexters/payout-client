import { getYearlyDividends } from "@/api/generated/endpoint";
import { YearlyDividendResponse } from "@/api/generated/endpoint.schemas";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useStocksStore } from "../stores/stocks-store";
import React from "react";

export const yearlyDividendQueryKeys = createQueryKeys("yearly-dividend");

export const useYearlyDividendMutation = () => {
  const { stocks } = useStocksStore();

  const tickerShares = React.useMemo(
    () =>
      stocks.map((stock) => ({
        share: stock.count,
        ticker: stock.ticker ?? "",
      })),
    [stocks]
  );

  const requestClient = async (): Promise<YearlyDividendResponse> => {
    const response = await getYearlyDividends({
      tickerShares,
    });
    return response.data;
  };
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: yearlyDividendQueryKeys._def,
    mutationFn: requestClient,
    onSuccess: (data) => {
      queryClient.setQueryData(yearlyDividendQueryKeys._def, data);
    },
    throwOnError: true,
  });
};
