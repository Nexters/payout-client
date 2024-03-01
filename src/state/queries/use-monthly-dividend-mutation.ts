import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useStocksStore } from "../stores/stocks-store";
import React from "react";
import { getMonthlyDividends } from "@/api/generated/endpoint";
import { MonthlyDividendResponse } from "@/api/generated/endpoint.schemas";

export const MonthlyDividendQueryKeys = createQueryKeys("monthly-dividend");

export const useMonthlyDividendMutation = () => {
  const { stocks } = useStocksStore();

  const tickerShares = React.useMemo(
    () =>
      stocks.map((stock) => ({
        share: stock.count,
        ticker: stock.ticker ?? "",
      })),
    [stocks]
  );

  const requestClient = async (): Promise<MonthlyDividendResponse[]> => {
    const response = await getMonthlyDividends({
      tickerShares,
    });
    return response.data;
  };
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: MonthlyDividendQueryKeys._def,
    mutationFn: requestClient,
    onSuccess: (data) => {
      queryClient.setQueryData(MonthlyDividendQueryKeys._def, data);
    },
    throwOnError: true,
  });
};
