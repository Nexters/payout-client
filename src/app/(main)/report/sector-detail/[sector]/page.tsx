"use client";

import React from "react";
import { Header } from "../_components/header";
import { Loader2Icon } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { enteredStocksQueryKeys } from "@/state/queries/use-stocks-sector-ratio-mutation";
import { SectorRatioResponse } from "@/api/generated/endpoint.schemas";
import { DividendList } from "../_components/dividend-list";
import { SectorInsights } from "../_components/sector-insights";
import { useComingDividendStocksQuery } from "../../../../../state/queries/use-coming-dividend-stocks-query";
import { useBiggestDividendYieldStocksQuery } from "../../../../../state/queries/use-biggest-dividend-yield-stocks-query";

const SectorDetailPage = React.memo(({ params }: { params: { sector: string } }) => {
  const queryClient = useQueryClient();

  const { data: comingDividendStocks } = useComingDividendStocksQuery(params.sector);
  const { data: biggestDividendYieldStocks } = useBiggestDividendYieldStocksQuery(params.sector);

  const data = React.useMemo(
    () =>
      queryClient
        .getQueriesData({})
        .find(([queryKey]) => enteredStocksQueryKeys._def === queryKey)?.[1] as SectorRatioResponse[],
    [queryClient]
  );

  const sectorValue = React.useMemo(() => {
    return params.sector.split("%20").join(" ");
  }, [params.sector]);

  const sectorData = React.useMemo(() => {
    return data?.find((each) => each.sectorValue === sectorValue);
  }, [data, sectorValue]);

  if (!sectorData) {
    return (
      <div className="flex size-full items-center justify-center">
        <Loader2Icon className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="size-full">
      <Header
        tickerCount={sectorData?.stockShares?.length ?? 0}
        sectorRatio={Number((sectorData?.sectorRatio * 100).toFixed(2))}
        sectorName={sectorData?.sectorName}
      />
      <DividendList dividendList={sectorData.stockShares} />
      <div className="h-4 bg-gray-100" />

      <SectorInsights
        comingDividendStocks={comingDividendStocks}
        biggestDividendYieldStocks={biggestDividendYieldStocks}
      />
    </div>
  );
});

export default SectorDetailPage;
