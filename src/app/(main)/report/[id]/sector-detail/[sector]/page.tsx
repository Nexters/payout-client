"use client";

import React from "react";
import { Header } from "../_components/header";
import { Loader2Icon } from "lucide-react";
import { useStocksSectorRatioMutation } from "@/state/queries/use-stocks-sector-ratio-mutation";
import { DividendList } from "../_components/dividend-list";
import { SectorInsights } from "../_components/sector-insights";
import { useComingDividendStocksQuery } from "../../../../../../state/queries/use-coming-dividend-stocks-query";
import { useBiggestDividendYieldStocksQuery } from "../../../../../../state/queries/use-biggest-dividend-yield-stocks-query";
import { useParams } from "next/navigation";
import { GetBiggestDividendYieldStocksSector, GetUpComingDividendStocksSector } from "@/api/generated/endpoint.schemas";

const SectorDetailPage = React.memo(({ params }: { params: { sector: string } }) => {
  const { id } = useParams<{ id: string }>();
  const { data: comingDividendStocks } = useComingDividendStocksQuery(params.sector as GetUpComingDividendStocksSector);
  const { data: biggestDividendYieldStocks } = useBiggestDividendYieldStocksQuery(
    params.sector as GetBiggestDividendYieldStocksSector
  );

  const { data, mutate } = useStocksSectorRatioMutation(id);

  const sectorValue = React.useMemo(() => {
    return params.sector.split("%20").join(" ");
  }, [params.sector]);

  const sectorData = React.useMemo(() => {
    return data?.data.find((each) => each.sectorValue === sectorValue);
  }, [data, sectorValue]);

  React.useEffect(() => {
    mutate();
  }, [mutate]);

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
